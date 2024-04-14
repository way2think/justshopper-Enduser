import { createObject } from "../services/firestore-http";
import { api } from "./api";

const collectionId = "order";

export const order = api.injectEndpoints({
  endpoints: (build) => ({
    createOrder: build.mutation({
      queryFn: async (order) => {
        // auto-create order id, if needed we can generate the order id
        return await createObject(collectionId, order);
      },
    }),
  }),
});

export const { useCreateOrderMutation } = order;
