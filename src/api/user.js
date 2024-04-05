import { getObjectByParam } from "../services/firestore-http";
import { api } from "./api";

const collectionId = "user";

export const user = api.injectEndpoints({
  endpoints: (build) => ({
    getUserById: build.query({
      queryFn: async ({ userId }) => {
        return await getObjectByParam(collectionId, userId);
      },
    }),
  }),
});
