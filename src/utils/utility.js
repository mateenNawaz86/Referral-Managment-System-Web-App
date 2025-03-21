import { useNavigate } from "react-router-dom";
import { DetailScreenStages } from "./static";

export const combineClasses = (defaultClasses, className = "") => {
  if (!className) return defaultClasses;

  const defaultSet = new Set(defaultClasses.split(" "));
  const customSet = new Set(className.split(" "));

  customSet.forEach((customClass) => {
    if (customClass.startsWith("!!")) {
      defaultSet.delete(customClass.slice(2));
      customSet.delete(customClass);
    }
  });

  defaultSet.forEach((defaultClass) => {
    const baseClass = defaultClass.split("-")[0];
    customSet.forEach((customClass) => {
      if (customClass.startsWith(baseClass)) {
        defaultSet.delete(defaultClass);
      }
    });
  });

  return [...defaultSet, ...customSet].join(" ");
};

export const conditionHandlerLogin = (response, connect = false) => {
  const navigate = useNavigate();

  if (!connect) {
    if (!response?.data?.data?.User?.isEmailVerified) {
      navigate("/login-success");
    } else if (!response?.data?.data?.User?.isProfileComplete) {
      navigate("/profile");
    } else if (
      staticEnums["User"]["role"][response?.data?.data?.User?.role] === 1 &&
      !response?.data?.data?.User?.plan?.id
    ) {
      navigate("/plan");
    } else {
      if (staticEnums["User"]["role"][response?.data?.data?.User?.role] === 0) {
        navigate("/admin/dashboard");
      } else if (
        staticEnums["User"]["role"][response?.data?.data?.User?.role] === 3
      ) {
        navigate("/agent/dashboard");
      } else {
        navigate("/dashboard");
      }
    }
  } else {
    navigate("/dashboard");
  }
};

export function setErrors(setError, errors, translate) {
  if (!errors) return;
  let newObj = {};

  Object.entries(errors).forEach(([key, value]) => {
    if (key && !value) {
      setError(key, { message: null });
    }
    if (Array.isArray(value)) {
      value.forEach((element, index) => {
        Object.entries(element).forEach(([key1, value1]) => {
          const newKey = key1.split(".")[1];
          newObj = {
            ...newObj,
            [index]: {
              [newKey]: { message: translate(`validationMessages.${value1}`) },
            },
          };
        });
      });
      setError(key, newObj);
    } else {
      setError(key, {
        message: formatStrings(
          translate(`validationMessages.${value?.split(":")[0]}`),
          value?.split(":").slice(1)
        ),
      });
    }
  });
}

export const getButtonClass = (condition, activeClass, inactiveClass = "") => {
  return condition ? activeClass : inactiveClass;
};

export const getPageFromURL = () => {
  const params = new URLSearchParams(window.location.search);
  return Number(params.get("page")) || 1;
};

export const getRedeemStatusStyles = (status) => {
  const statusStyles = {
    Successful: {
      bg: "bg-[#d9f3e1]",
      text: "text-[#05B035]",
    },
    "In Progress": {
      bg: "bg-[#fdf0e4]",
      text: "text-[#F2994A]",
    },
    Pending: {
      bg: "bg-[#e0ecfc]",
      text: "text-[#2F80ED]",
    },
    Cancelled: {
      bg: "bg-[#fcd9d9]",
      text: "text-[#E80000]",
    },
  };

  return (
    statusStyles[status] || {
      bg: "bg-[#fcd9d9]",
      text: "text-[#E80000]",
    }
  );
};

export const getStatusStyles = (status) => {
  const styles = {
    Redeemed: {
      bg: "bg-[#05B03526]",
      text: "text-[#05B035]",
    },
    default: {
      bg: "bg-[#E8000026]",
      text: "text-[#E80000]",
    },
  };

  return styles[status] || styles.default;
};

export const findErrorMessage = (errors, data = [], fieldName) => {
  const keys = data.length > 0 ? data : [fieldName];

  let currentError = errors;

  for (const key of keys) {
    if (currentError?.[key]) {
      currentError = currentError[key];
    } else {
      return undefined;
    }
  }

  return currentError?.message || undefined;
};

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const getNextFormStage = (current) => {
  const stages = Object?.values(DetailScreenStages);
  const currentIndex = stages.indexOf(current);
  if (currentIndex !== -1 && currentIndex < stages.length - 1) {
    return stages[currentIndex + 1];
  }
  return null;
};

export const getBackFormStage = (current) => {
  const stages = Object.values(DetailScreenStages);
  const currentIndex = stages.indexOf(current);
  if (currentIndex !== -1 && currentIndex > 0) {
    return stages[currentIndex - 1];
  }
  return null;
};

export function returnStep(
  data,
  setError,
  translate,
  currentFormStage,
  nextFormHandler
) {
  const navigate = useNavigate(); // Replaces Next.js router

  if (currentFormStage === DetailScreensStages.CompanyDetails) {
    return updateProfileStep1({
      data,
      navigate,
      setError,
      translate,
      currentFormStage,
      nextFormHandler,
    });
  }
  if (currentFormStage === DetailScreensStages.LocationDetails) {
    return updateProfileStep2({
      data,
      navigate,
      setError,
      translate,
      currentFormStage,
      nextFormHandler,
    });
  }
  if (currentFormStage === DetailScreensStages.BankDetails) {
    return updateProfileStep3({
      data,
      navigate,
      setError,
      translate,
      currentFormStage,
      nextFormHandler,
    });
  }

  return updateProfileStep1({
    data,
    navigate,
    setError,
    translate,
    currentFormStage,
    nextFormHandler,
  });
}
