import { createRazorpayOrder } from "../services/razorpay-http";
import { api } from "./api";

export const payment = api.injectEndpoints({
  endpoints: (build) => ({
    createRazorpayPaymentOrder: build.mutation({
      queryFn: async ({ rzpOptions, restOptions }) => {
        const res = await createRazorpayOrder(rzpOptions, restOptions);
        // console.log("ressss: ", res);
        return res;
      },
    }),
  }),
});

export const { useCreateRazorpayPaymentOrderMutation } = payment;
