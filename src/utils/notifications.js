import { toast } from "react-toastify";

const successNotification = (message) => {
  // toast.success(message, {
  //   position: "top-right",
  // });
  if (message) {
    alert(message);
  } else {
    toast.success(message, {
      position: "top-right",
    });
  }
};

const errorNotification = (message) => {
  // toast.error(message, {
  //   position: "bottom-center",
  // });
  alert(message);
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
