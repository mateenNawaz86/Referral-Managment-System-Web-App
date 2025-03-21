import Cookies from "js-cookie";
import localStore from "./localStore";

export const getToken = () => Cookies.get("referralToken");
export const getRefreshToken = () => Cookies.get("referralRefreshToken");

// export const setToken = (token) =>
//   setCookie("referralToken", token, {
//     httpOnly: false,
//     sameSite: true,
//     secure: false,
//   });

// export const setRefreshToken = (token) =>
//   setCookie("referralRefreshToken", token, {
//     httpOnly: false,
//     sameSite: true,
//     secure: false,
//   });

export const setUserRole = (token) =>
  localStore.store_data("referralUserRole", token);

export const getUser = () => Cookies.get("referralUser");
// export const saveUser = (user) => setCookie("referralUser", user);

export const logout = () => {
  Cookies.remove("referralToken");
  Cookies.remove("referralRefreshToken");
  Cookies.remove("referralUser");
  localStore.remove_data("referralUserRole");
  localStore.remove_data("fcm");
  localStore.remove_data("roomToken");
  localStore.remove_data("ChatUser");
  localStore.remove_data("chatToken");
  return true;
};

class Auth {
  constructor() {
    this.user = {};
  }

  setUserFromLocal() {
    const user = getToken();
    this.user = user ? JSON.parse(user) : {};
  }

  set setUser(user) {
    this.user = user;
  }

  get getUser() {
    return this.user;
  }

  logout() {
    logout();
    this.user = {};
  }
}

export const authClass = new Auth();

export function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

export function getValueByKey(object, value) {
  return Object.values(object).find((key) => object[key] === value);
}

export function getCategoryName(category, id) {
  const result = category.find((item) => item?.id === id);
  return result?.name;
}

export function setErrorFunc(object, set) {
  if (object) {
    for (const [key, value] of Object.entries(object)) {
      set(key, { type: "manual", message: value });
    }
  }
}

export const generateValues = (data) => {
  let option = null;
  if (Array.isArray(data)) {
    option = data.map((item) => item?.value);
  } else {
    option = data?.value;
  }
  return option;
};

export const getLabelByValue = (value, list) => {
  const filteredItem = list?.filter((item) => item.value === value);
  return filteredItem?.[0]?.label;
};
