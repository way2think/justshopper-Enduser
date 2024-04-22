import {
  getMultiObjectParallellyByIds,
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
        return await updateObjectByParam(collectionId, docId, dataObject);
      },
    }),
    updateFavourites: build.mutation({
      queryFn: async ({ docId, dataObject }) => {
        return await updateObjectByParam(collectionId, docId, dataObject);
      },
    }),
    getAllFavourites: build.query({
      queryFn: async ({ favourites }) => {
        return await getMultiObjectParallellyByIds(collectionId, favourites);
      },
    }),
  }),
});

export const {
  useAddNewShippingAddressMutation,
  useUpdateFavouritesMutation,
  useGetAllFavouritesQuery,
} = user;
