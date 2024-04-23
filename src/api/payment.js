import { createRazorpayOrder } from "../services/razorpay-http";
import { api } from "./api";

export const payment = api.injectEndpoints({
  endpoints: (build) => ({
    createRazorpayPaymentOrder: build.mutation({
      queryFn: async (rzpOptions) => {
        const res = await createRazorpayOrder(rzpOptions);
        // console.log("ressss: ", res);
        return res;
      },
    }),
  }),
});

export const { useCreateRazorpayPaymentOrderMutation } = payment;
