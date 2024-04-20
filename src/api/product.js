import {
  getAllObjects,
  getMultiObjectParallellyByIds,
  getObjectByParam,
} from "../services/firestore-http";
import { api } from "./api";

const collectionId = "product";

export const product = api.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query({
      queryFn: async ({ conditions }) => {
        console.log("conf: ", conditions);
        return await getAllObjects(collectionId, conditions);
      },
    }),
    getAllNewProductArrivals: build.query({
      queryFn: async ({ conditions }) => {
        return await getAllObjects(collectionId, conditions);
      },
    }),
    getMultiProductByIds: build.query({
      queryFn: async (cartItems) => {
        return await getMultiObjectParallellyByIds(collectionId, cartItems);
      },
    }),
    getProductById: build.query({
      queryFn: async (id) => {
        return await getObjectByParam(collectionId, id);
      },
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetAllNewProductArrivalsQuery,
  useLazyGetMultiProductByIdsQuery,
  useLazyGetProductByIdQuery,
} = product;
