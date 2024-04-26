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
    updateShippingAddress: build.mutation({
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
      queryFn: async ({ collectionId, favourites }) => {
        return await getMultiObjectParallellyByIds(collectionId, favourites);
      },
    }),
    updateProfileDetail: build.mutation({
      queryFn: async ({ docId, dataObject }) => {
        return await updateObjectByParam(collectionId, docId, dataObject);
      },
    }),
  }),
});

export const {
  useUpdateShippingAddressMutation,
  useUpdateFavouritesMutation,
  useGetAllFavouritesQuery,
  useUpdateProfileDetailMutation,
} = user;
