import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { createObject, getObjectByParam } from "../services/firestore-http";
import { selectUser } from "../store/userSlice";

export const api = createApi({
  baseQuery: fakeBaseQuery(),
  endpoints: (build) => ({
    getSettings: build.query({
      queryFn: async (args, queryApi) => {
        return await getObjectByParam("appMeta", "settings");
      },
    }),
    sendEnquiry: build.mutation({
      queryFn: async ({ name, email, phone, description }, queryApi) => {
        const user = selectUser(queryApi.getState());

        return await createObject("enquiry", {
          name,
          email,
          phone,
          description,
          status: "open",
          user_id: user.id, // if logged in
          timestamp: new Date().getTime(),
        });
      },
    }),
    sendNotification: build.mutation({
      queryFn: async ({ id, body, title, type }) => {
        return await createObject("notification", {
          body,
          is_read: false,
          item_id: id,
          timestamp: Date.now(),
          title,
          type,
        });
      },
    }),
  }),
});

export const {
  useGetSettingsQuery,
  useSendEnquiryMutation,
  useSendNotificationMutation,
} = api;

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
