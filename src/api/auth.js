import { api } from "./api";

export const auth = api.injectEndpoints({
  endpoints: (build) => ({
    createUserWithEmailAndPassword: build.mutation({
      queryFn: () => {},
    }),
    signInWithEmailAndPassword: build.mutation({
      queryFn: () => {},
    }),
    sendPasswordResetEMail: build.mutation({
      queryFn: () => {},
    }),
  }),
});
