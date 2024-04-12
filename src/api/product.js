import { getAllObjects } from "../services/firestore-http";
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
  }),
});

export const { useGetAllProductsQuery, useGetAllNewProductArrivalsQuery } =
  product;
