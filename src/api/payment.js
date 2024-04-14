import { createRazorpayOrder } from "../services/razorpay-http";
import { api } from "./api";

export const payment = api.injectEndpoints({
  endpoints: (build) => ({
    createRazorpayPaymentOrder: build.mutation({
      queryFn: async (rzpOptions) => {
        return await createRazorpayOrder(rzpOptions);
      },
    }),
  }),
});

export const { useCreateRazorpayPaymentOrderMutation } = payment;
