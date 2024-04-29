import { useDispatch } from "react-redux";

const useRTKLocalUpdate = () => {
  const dispatch = useDispatch();

  const handleLocalRTKUpdate = (apiObjectRef, endpoint, args, field) => {
    // console.log("handleLocalUpdate", apiObjectRef, endpoint, args, field);
    dispatch(
      apiObjectRef.util.updateQueryData(endpoint, undefined, (draft) => {
        if (field) {
          draft[field] = args;
          // write for multi fields
        } else {
          Object.assign(draft, args);
        }
      })
    );
  };

  return [handleLocalRTKUpdate];
};

export { useRTKLocalUpdate };
