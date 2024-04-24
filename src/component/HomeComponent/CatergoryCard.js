import React from "react";
import "./CatergoryCard.css";

const CatergoryCard = (props) => {
  return (
    <>
      <div className="bg-image">
        <img src={props.catergoryimage} className="category" alt="Sample" />
        <div className="mask">
          <div className="d-flex justify-content-center align-items-center h-100">
            <a href="" className="text-white mb-0 productname">
              {props.catergoryname}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CatergoryCard;
