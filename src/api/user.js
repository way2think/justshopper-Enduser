import {
  getObjectByParam,
  updateObjectByParam,
} from "../services/firestore-http";
import { api } from "./api";

const collectionId = "user";

export const user = api.injectEndpoints({
  endpoints: (build) => ({
    getUserById: build.query({
      queryFn: async ({ userId }) => {
        return await getObjectByParam(collectionId, userId);
      },
    }),
    addNewShippingAddress: build.mutation({
      queryFn: async ({ docId, dataObject }) => {
        console.log("docid and dataObject", docId, dataObject);
        return await updateObjectByParam(collectionId, docId, dataObject);
      },
    }),
  }),
});

export const { useAddNewShippingAddressMutation } = user;
