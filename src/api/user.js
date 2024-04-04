import { api } from "./api";

export const user = api.injectEndpoints({
  endpoints: (build) => ({
    getUserById: build.query({
      queryFn: () => {},
    }),
  }),
});
