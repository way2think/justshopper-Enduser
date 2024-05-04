// CRUD
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../config/firebase";

// Create
const createObject = async (
  collectionId,
  dataObject,
  metaData = "createObject"
) => {
  try {
    const docRef = collection(db, collectionId);
    const result = await addDoc(docRef, dataObject);
    console.log(`${metaData}: ${result.id} - success`);
    return {
      data: {
        id: result.id,
        ...dataObject,
      },
      error: null,
    };
  } catch (e) {
    console.log(`error-${metaData}-${collectionId}: `, e);
    return {
      data: null,
      error: e,
    };
  }
};

const createObjectByParam = async (
  collectionId,
  docId,
  dataObject,
  metaData = "createObjectByParam"
) => {
  try {
    const docRef = doc(db, collectionId, docId);
    await setDoc(docRef, dataObject);
    console.log(`${metaData}: ${docId} - success`);
    return {
      data: { id: docId, ...dataObject },
      error: null,
    };
  } catch (e) {
    console.log(`error-${metaData}-${collectionId}: `, e);
    return {
      data: null,
      error: e,
    };
  }
};

// Read
const getAllObjects = async (
  collectionId,
  conditions = [],
  metaData = "getAllObjects"
) => {
  // const conditions = [
  //   { type: "where", field: "capital", operator: "==", value: true },
  //   { type: "where", field: "population", operator: ">", value: 1000000 },
  //   { type: "orderBy", field: "population", order: "asc | desc" },
  //   { type: "limit", value: 5 },
  // ];
  try {
    const collectionRef = collection(db, collectionId);
    let querySnapshot;

    if (conditions.length > 0) {
      const queryParameters = [];

      conditions.forEach((condition) => {
        switch (condition.type) {
          case "where":
            queryParameters.push(
              where(condition.field, condition.operator, condition.value)
            );
            break;
          case "orderBy":
            queryParameters.push(orderBy(condition.field, condition.order));
            break;
          case "limit":
            queryParameters.push(limit(condition.value));
            break;
          default:
            break;
        }
      });

      const queryRef = query(collectionRef, ...queryParameters);
      querySnapshot = await getDocs(queryRef);
    } else {
      querySnapshot = await getDocs(collectionRef);
    }

    const resultList = [];
    querySnapshot.forEach((doc) => {
      const data = {
        id: doc.id,
        ...doc.data(),
      };
      resultList.push(data);
    });
    // console.log(`${metaData} - success`, resultList);
    console.log(`${metaData} - success`);
    return {
      data: [...resultList],
      error: null,
    };
  } catch (e) {
    console.log("getAllObjects: ", e);
    return {
      data: null,
      error: e,
    };
  }
};

const getObjectByParam = async (
  collectionId,
  docId,
  metaData = "getObjectByParam"
) => {
  const docRef = doc(db, collectionId, docId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const result = docSnap.data();
    console.log(`${metaData}: ${docId} - success`);
    return {
      data: { id: docSnap.id, ...result },
      error: null,
    };
  } else {
    // docSnap.data() will be undefined in this case
    console.log(`${metaData}: ${docId} - No Such Document`);
    return {
      data: null,
      error: `${metaData}: ${docId} - No Such Document`,
    };
  }
};

const getMultiObjectParallellyByIds = async (
  collectionId,
  objects,
  metaData = "getMultiObjectParallelly"
) => {
  try {
    // console.log("objectIds: ", objects, collectionId);

    // create promise array with collection id

    const promises = [];
    objects.forEach((obj) => {
      const docRef = doc(db, collectionId, obj.id);
      promises.push(getDoc(docRef));
    });

    const promiseResult = await Promise.all(promises);
    const resultData = promiseResult.map((docSnap) => ({
      id: docSnap.id,
      ...docSnap.data(),
    }));
    // console.log("resultData: ", resultData);
    return {
      data: resultData,
      error: null,
    };
  } catch (e) {
    console.log(`error-${metaData}: `, e);
    return {
      data: null,
      error: e,
    };
  }
};

// Update
const updateObjectByParam = async (
  collectionId,
  docId,
  dataObject,
  metaData = "updateObjectByParam"
) => {
  // console.log("updateObjectByParam: ", collectionId, docId, dataObject);
  try {
    const docRef = doc(db, collectionId, docId);
    await updateDoc(docRef, dataObject);

    console.log(`${metaData}: ${docId} - success`);
    return {
      data: { id: docId, ...dataObject },
      error: null,
    };
  } catch (e) {
    console.log(`error-${metaData}-${collectionId}: `, e);
    return {
      data: null,
      error: e,
    };
  }
};

const updateAllObjectByParam = async (
  collectionId,
  docId,
  dataObject,
  metaData = "updateAllObjectByParam"
) => {
  // dataObject - should have all fields in the document with the updated value, this will overwrite the document
  try {
    // we are using setDoc, to update all the values
    return await createObjectByParam(collectionId, docId, dataObject, metaData);
  } catch (e) {
    console.log(`error-${metaData}-${collectionId}: `, e);
    return {
      data: null,
      error: e,
    };
  }
};

// Delete
const deleteObjectByParam = async (
  collectionId,
  docId,
  metaData = "deleteObjectByParam"
) => {
  try {
    await deleteDoc(doc(db, collectionId, docId));

    console.log(`${metaData}: ${docId} - success`);
    return {
      data: { isDone: true },
      error: null,
    };
  } catch (e) {
    console.log(`error-${metaData}-${collectionId}: `, e);
    return {
      data: null,
      error: e,
    };
  }
};

export {
  createObject,
  createObjectByParam,
  getAllObjects,
  getObjectByParam,
  updateObjectByParam,
  updateAllObjectByParam,
  deleteObjectByParam,
  getMultiObjectParallellyByIds,
};
