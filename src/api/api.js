import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { createObject, getObjectByParam } from "../services/firestore-http";

export const api = createApi({
  baseQuery: fakeBaseQuery(),
  endpoints: (build) => ({
    getSettings: build.query({
      queryFn: async () => {
        // try {
        //   const collection = "appMeta";
        //   const docId = "settings";
        //   const docRef = doc(db, collection, docId);
        //   const docSnap = await getDoc(docRef);
        //   if (docSnap.exists()) {
        //     // console.log("Document data:", docSnap.data());
        //     return {
        //       data: docSnap.data(),
        //     };
        //   }
        //   // docSnap.data() will be undefined in this case
        //   return {
        //     // only returns data, error, meta
        //     error: {
        //       name: "invalid_id",
        //       message: `No such document - path: ${collection}/${docId}`,
        //       data: "",
        //     },
        //   };
        // } catch (e) {
        //   return {
        //     success: false,
        //     data: null,
        //     error: {
        //       name: "getGettings",
        //       message: e?.message || "error",
        //       data: e,
        //     },
        //   };
        // }
        return await getObjectByParam("appMeta", "settings");
      },
    }),
    sendEnquiry: build.mutation({
      queryFn: async ({ name, email, phone, description }) => {
        // try {
        //   const enquiryRef = collection(db, "enquiry");
        //   await addDoc(enquiryRef, {
        //     name,
        //     email,
        //     phone,
        //     description,
        //     status: "open",
        //     user_id: "", // if logged in
        //     timestamp: new Date().getTime(),
        //   });
        //   return {
        //     data: "ok",
        //   };
        // } catch (e) {
        //   console.log("error in stock update!", e);
        //   return {
        //     success: false,
        //     data: null,
        //     error: {
        //       name: "sendEnquiry",
        //       message: e?.message || "error",
        //       data: e,
        //     },
        //   };
        // }
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
  api.endpoints.getSettings.select()(state).data;

// api.util.updateQueryData("getSettings", "12", (draft) => {
//   Object.assign(draft, updatedPost);
// });
