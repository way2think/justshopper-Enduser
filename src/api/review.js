import { increment } from "firebase/firestore";
import {
  createObject,
  getAllObjects,
  updateObjectByParam,
} from "../services/firestore-http";
import { api } from "./api";
import { numberToWord } from "../utils";

const collectionId = "reviews";

export const review = api.injectEndpoints({
  endpoints: (build) => ({
    getReviewByUserAndProduct: build.query({
      queryFn: async ({ conditions }) => {
        return await getAllObjects(collectionId, conditions);
      },
    }),
    getReviews: build.query({
      queryFn: async ({ conditions }) => {
        return await getAllObjects(collectionId, conditions);
      },
    }),
    createReview: build.mutation({
      queryFn: async (dataObject) => {
        // console.log("createAPi: ", dataObject);
        const updateObject = {
          no_of_reviews: increment(1),
          ["rating." + dataObject.rating]: increment(1),
        };

        const promises = [
          createObject(collectionId, dataObject),
          updateObjectByParam("product", dataObject.product_id, updateObject),
        ];

        try {
          const result = await Promise.all(promises);
          // console.log("result: ", result);
          return {
            data: result[0].data,
            error: null,
          };
        } catch (e) {
          return {
            data: null,
            error: "Network error",
          };
        }
      },
    }),
  }),
});

export const {
  useLazyGetReviewByUserAndProductQuery,
  useLazyGetReviewsQuery,
  useCreateReviewMutation,
} = review;
