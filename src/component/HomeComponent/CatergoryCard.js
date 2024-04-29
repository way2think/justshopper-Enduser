import React from "react";
import "./CatergoryCard.css";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../../utils";

const CatergoryCard = ({ catergoryname, catergoryimage, type }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-image"
      onClick={() => {
        navigate(`/shop-by-${type}?${type}=${catergoryname}`);
        scrollToTop();
      }}
    >
      <img src={catergoryimage} className="category" alt="Sample" />
      <div className="mask">
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white mb-0 productname">{catergoryname}</div>
        </div>
      </div>
    </div>
  );
};

export default CatergoryCard;
