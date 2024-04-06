import { useLocation, useSearchParams } from "react-router-dom";
import Path from "../../component/Path";
import WorkDetailBlack from "../../component/HomeComponent/WorkDetailBlack";
import Category from "../../component/ShopCategory/Category";

const ShopType = ({ path, pathName, type }) => {
  const { pathname, search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const productType = searchParams.get(type);

  console.log("searchParams: ", pathname, productType);

  return (
    <>
      <Path
        link="/"
        pathhome="Home"
        pathdetails={pathName}
        subPath={productType}
      />
      <Category type={type} productType={productType} />
      <WorkDetailBlack />
    </>
  );
};

export default ShopType;
