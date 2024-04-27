import { getAllObjects } from "../services/firestore-http";
import { api } from "./api";

const collectionId = "reviews";

export const review = api.injectEndpoints({
  endpoints: (build) => ({
    getReviewByUserAndProduct: build.query({
      queryFn: async ({ conditions }) => {
        return await getAllObjects(collectionId, conditions);
      },
    }),
  }),
});

export const { useLazyGetReviewByUserAndProductQuery } = review;
