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
        // console.log("conf: ", conditions);
        return await getAllObjects(collectionId, conditions);
      },
    }),
    getAllNewProductArrivals: build.query({
      queryFn: async () => {
        const conditions = [
          {
            type: "where",
            field: "status",
            operator: "==",
            value: "published",
          },
          {
            type: "where",
            field: "is_new_arrival",
            operator: "==",
            value: true,
          },
          {
            type: "where",
            field: "total_quantity",
            operator: ">",
            value: 0,
          },
          { type: "orderBy", field: "timestamp", order: "desc" },
          { type: "limit", value: 15 }, // max newArrivals only 15
        ];

        return await getAllObjects(collectionId, conditions);
      },
    }),
    getMultiProductByIds: build.query({
      queryFn: async (items) => {
        return await getMultiObjectParallellyByIds(collectionId, items);
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
  useGetMultiProductByIdsQuery,
  useLazyGetMultiProductByIdsQuery,
  useLazyGetProductByIdQuery,
} = product;
