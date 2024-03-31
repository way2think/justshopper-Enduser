import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { db } from "../services/firebase";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";

export const apiSlice = createApi({
  baseQuery: fakeBaseQuery(),
  endpoints: (build) => ({
    getSettings: build.query({
      queryFn: async () => {
        try {
          const collection = "appMeta";
          const docId = "settings";
          const docRef = doc(db, collection, docId);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            // console.log("Document data:", docSnap.data());
            return {
              data: docSnap.data(),
            };
          }
          // docSnap.data() will be undefined in this case
          return {
            // only returns data, error, meta
            error: {
              name: "invalid_id",
              message: `No such document - path: ${collection}/${docId}`,
              data: "",
            },
          };
        } catch (e) {
          return {
            success: false,
            data: null,
            error: {
              name: "getGettings",
              message: e?.message || "error",
              data: e,
            },
          };
        }
      },
    }),
    sendEnquiry: build.mutation({
      queryFn: async ({ name, email, phone, description }) => {
        try {
          console.log("sendQ: ", name, email, phone, description);
          const enquiryRef = collection(db, "enquiry");

          await addDoc(enquiryRef, {
            name,
            email,
            phone,
            description,
            status: "open",
            userId: "", // if logged in
          });

          return {
            data: "ok",
          };
        } catch (e) {
          console.log("error in stock update!", e);
          return {
            success: false,
            data: null,
            error: {
              name: "sendEnquiry",
              message: e?.message || "error",
              data: e,
            },
          };
        }
      },
    }),
  }),
});

export const { useGetSettingsQuery, useSendEnquiryMutation } = apiSlice;
