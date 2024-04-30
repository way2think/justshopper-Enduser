import { useDispatch } from "react-redux";

const useRTKLocalUpdate = () => {
  const dispatch = useDispatch();

  const handleLocalRTKUpdate = (
    apiObjectRef,
    endpoint,
    args = undefined,
    updateReceipe,
    field = undefined,
    isArray = false
  ) => {
    // console.log("handleLocalUpdate", apiObjectRef, endpoint, updateReceipe, args, field);
    dispatch(
      apiObjectRef.util.updateQueryData(endpoint, args, (draft) => {
        if (field) {
          draft[field] = updateReceipe;
          // write for multi fields
        } else {
          Object.assign(draft, updateReceipe);
        }
      })
    );
  };

  return [handleLocalRTKUpdate];
};

export { useRTKLocalUpdate };
