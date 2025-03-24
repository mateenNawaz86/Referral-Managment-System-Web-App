import axios from "axios";
import { logout } from "../utils/auth";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const API_DOMAIN = import.meta.env.VITE_API_DOMAIN;

export const BASEURL = API_DOMAIN + "api";

export async function getApiRequestHeader(data) {
  const accessToken = Cookies.get("accessToken");
  const baseHeaders = {
    Accept: "application/json",
  };

  if (accessToken) {
    baseHeaders["Authorization"] = `Bearer ${accessToken}`;
  }

  if (data instanceof FormData) {
    return baseHeaders;
  }
  return {
    ...baseHeaders,
    "Content-Type": "application/json",
  };
}

const instance = axios.create({
  baseURL: BASEURL,
  timeout: 60000,
  withCredentials: false,
});

export async function updateHeaders(data) {
  const header = await getApiRequestHeader(data);
  instance.defaults.headers = header;
}

export async function request({ method, url, data, headers }) {
  if (headers === undefined) {
    await updateHeaders(data);
  }

  const promise = instance[method](url, data);
  let response;
  try {
    response = await promise;
  } catch (error) {
    toast.error(`${error?.response?.data?.message}`);

    if (error?.response?.data?.code === 401) {
      logout();
      window.location = "/";
    }
    throw error;
  }
  return response;
}

export async function deleteRequestWithBody({ method, url, data, headers }) {
  if (headers === undefined) {
    await updateHeaders();
  }

  const promise = instance[method](url, data);
  let response;
  try {
    response = await promise;
  } catch (error) {
    toast.error(`${error?.response?.data?.message}`);

    if (error?.response?.data?.code === 401) {
      logout();
      window.location = "/";
    }
    throw error.response;
  }
  return response;
}

export async function newRequest({ method, url, data, headers }) {
  if (headers === undefined) {
    await updateHeaders();
  }
  const promise = instance[method](url, data);
  let response;
  try {
    response = await promise;
  } catch (error) {
    toast.error(`${error?.response?.data?.message}`);

    if (error?.response?.data?.code === 401) {
      logout();
      window.location = "/";
    }
    throw error.response;
  }

  if (
    response.status
      ? response.status.toString().indexOf("2") !== 0
      : response.data.status.toString().indexOf("2") !== 0
  ) {
    throw { response };
  } else {
    return response.data;
  }
}

export async function get(url, params, featureAndAction, config) {
  const { filter, ...otherParams } = params;
  let queryParams = {};
  if (config.detail) {
    url = `${url}/${filter}`;
    return request({
      method: "get",
      url: url,
      data: { featureAndAction },
      ...config,
    });
  }

  if (filter && !url.includes("filter")) {
    queryParams.filter = JSON.stringify(filter);
  }

  for (const key in otherParams) {
    if (!url.includes(key)) {
      queryParams[key] = otherParams[key];
    }
  }

  const queryString = new URLSearchParams(queryParams).toString();
  const fullUrl = queryString ? `${url}?${queryString}` : url;
  return request({
    method: "get",
    url: fullUrl,
    data: { featureAndAction },
    ...config,
  });
}

export async function del(url, params, config) {
  return request({ method: "delete", url, data: { params }, ...config });
}

export async function delWithReqBody(url, data, config) {
  return deleteRequestWithBody({
    method: "delete",
    url,
    data: { data },
    ...config,
  });
}

export async function post(url, data, featureAndAction, config, file) {
  return request({ method: "post", url, data, ...config, file });
}

export async function put(url, data, config) {
  return newRequest({ method: "put", url, data, ...config });
}

export async function patch(url, data, config) {
  return newRequest({ method: "patch", url, data, ...config });
}

export const independentRequest = async (url, method, data) => {
  const promise = axios[method](url, data);
  let response;
  try {
    response = await promise;
  } catch (error) {
    throw error.response;
  }
  const payload = response;
  return payload;
};
