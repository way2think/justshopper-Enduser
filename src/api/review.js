import { increment } from "firebase/firestore";
import {
  createObject,
  getAllObjects,
  updateObjectByParam,
} from "../services/firestore-http";
import { api } from "./api";

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
    updateReview: build.mutation({
      queryFn: async ({ dataObject }) => {
        const { old: oldReview, new: newReview } = dataObject;

        console.log("updateReview: ", oldReview, newReview);

        const updatedReviewObject = {
          rating: newReview.rating,
          review: newReview.review,
        };

        const updatedProductObject = {
          ["rating." + oldReview.rating]: increment(-1),
          ["rating." + newReview.rating]: increment(1),
        };

        const promises = [
          updateObjectByParam(collectionId, oldReview.id, updatedReviewObject),
        ];

        if (newReview.rating !== oldReview.rating) {
          promises.push(
            updateObjectByParam(
              "product",
              oldReview.product_id,
              updatedProductObject
            )
          );
        }

        try {
          const result = await Promise.all(promises);
          // console.log("result: ", result[0].data);
          return {
            data: {
              ...oldReview,
              ...result[0].data,
            },
            error: null,
          };
        } catch (e) {
          return {
            data: null,
            error: {
              data: e,
              message: "Network error",
            },
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
  useUpdateReviewMutation,
} = review;
