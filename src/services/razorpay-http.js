import axios from "axios";

const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

const displayRazorpay = async (options) => {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    alert("Razropay failed to load!!");
    return;
  }

  // const data = await fetch(
  //   "http://127.0.0.1:5001/justshopper-dev/us-central1/payment/create-order",
  //   {
  //     method: "POST",
  //     body: JSON.stringify(),
  //   }
  // ).then((t) => t.json());

  // console.log(data);

  // const options = {
  //   key: process.env.REACT_APP_RAZORPAY_KEY_ID,
  //   amount: "100",
  //   currency: "INR",
  //   name: "Just Shopper",
  //   description: "Test Transaction",
  //   image: "https://example.com/your_logo",
  //   order_id: "order_IluGWxBm9U8zJ8", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
  //   handler: function (response) {
  //     alert(response.razorpay_payment_id);
  //     alert(response.razorpay_order_id);
  //     alert(response.razorpay_signature);
  //   },
  //   prefill: {
  //     name: "Gaurav Kumar",
  //     email: "gaurav.kumar@example.com",
  //     contact: "9000090000",
  //   },
  //   notes: {
  //     address: "Razorpay Corporate Office",
  //   },
  //   theme: {
  //     color: "#dc3237",
  //   },
  // };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};

const createRazorpayOrder = async (dataObject, options) => {
  try {
    // const result = await fetch(
    //   `${process.env.REACT_APP_API_URL}/payment/create-order`,
    //   {
    //     method: "POST",
    //     body: dataObject,
    //   }
    // ).then((t) => t.json());
    // console.log(
    //   "http: createRazorpayOrder: ",
    //   process.env.REACT_APP_API_URL,
    //   dataObject,
    //   options
    // );

    const result = await axios.post(
      `${process.env.REACT_APP_API_URL}/payment/create-order`,
      dataObject,
      options
    );

    // console.log("createRazorpayOrder try: ", result.data);
    if (result.data) {
      return {
        data: result.data.data,
        error: null,
      };
    } else {
      // some error in 3rd party integration
      console.log("result.error: ", result.error);
      return {
        data: null,
        error: result.error,
      };
    }
  } catch (e) {
    console.log("createRazorpayOrder catch: ", e, e.response.data);
    return {
      data: null,
      error: e.response.data.error,
    };
  }
};

export { createRazorpayOrder, displayRazorpay };
