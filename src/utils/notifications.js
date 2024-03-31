import { toast } from "react-toastify";

const successNotification = (message) => {
  toast.success(message, {
    position: "top-right",
  });
};

const errorNotification = (message) => {
  toast.error(message, {
    position: "top-right",
  });
};

const infoNotification = (message) => {
  toast.info(message, {
    position: "top-right",
  });
};

const warningNotification = (message) => {
  toast.warning(message, {
    position: "top-right",
  });
};

export {
  successNotification,
  errorNotification,
  infoNotification,
  warningNotification,
};
