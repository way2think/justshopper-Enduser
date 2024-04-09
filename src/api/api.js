import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { createObject, getObjectByParam } from "../services/firestore-http";

export const api = createApi({
  baseQuery: fakeBaseQuery(),
  endpoints: (build) => ({
    getSettings: build.query({
      queryFn: async (args, queryApi) => {
        return await getObjectByParam("appMeta", "settings");
      },
    }),
    sendEnquiry: build.mutation({
      queryFn: async ({ name, email, phone, description }) => {
        return await createObject("enquiry", {
          name,
          email,
          phone,
          description,
          status: "open",
          user_id: "", // if logged in
          timestamp: new Date().getTime(),
        });
      },
    }),
  }),
});

export const { useGetSettingsQuery, useSendEnquiryMutation } = api;

export const selectStatusMessage = (state) =>
  api.endpoints.getSettings.select()(state).data?.enduser_status_message;

export const selectHomeBanner = (state) =>
  api.endpoints.getSettings.select()(state).data?.home_banner;

export const selectCategory = (state) =>
  api.endpoints.getSettings.select()(state).data?.category;

export const selectTheme = (state) =>
  api.endpoints.getSettings.select()(state).data?.theme;

// api.util.updateQueryData("getSettings", "12", (draft) => {
//   Object.assign(draft, updatedPost);
// });

// api.util.
