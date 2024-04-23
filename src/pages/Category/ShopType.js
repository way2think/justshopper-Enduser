import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Path from "../../component/Path";
import WorkDetailBlack from "../../component/HomeComponent/WorkDetailBlack";
import Category from "../../component/ShopCategory/Category";
import { useGetSettingsQuery } from "../../api/api";
const ShopType = ({ path, pathName, type }) => {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(search);
  const productType = searchParams.get(type);

  const { data } = useGetSettingsQuery();
  // console.log("searchParams: ", pathname, productType, type, data);

  useEffect(() => {
    if (productType === null && data?.[type]) {
      navigate(`/shop-by-${type}?${type}=${data?.[type][0].name}`);
    }
  }, [data, navigate, productType, type]);

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
