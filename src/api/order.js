import { createObject, getAllObjects } from "../services/firestore-http";
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
    getAllOrdersByUserId: build.query({
      providesTags: ["orders"],
      queryFn: async ({ conditions }) => {
        // console.log("cond: ", conditions);
        return await getAllObjects(collectionId, conditions);
      },
    }),
  }),
});

export const { useCreateOrderMutation, useGetAllOrdersByUserIdQuery } = order;
