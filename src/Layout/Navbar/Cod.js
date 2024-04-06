import React from "react";
import "./Cod.css";
import { selectStatusMessage } from "../../api/api";
import { useSelector } from "react-redux";

const Cod = () => {
  const enduser_status_message = useSelector(selectStatusMessage);

  console.log("settings: ", enduser_status_message);

  return (
    <>
      {enduser_status_message ? (
        <div className="cod">
          <p className="time">{enduser_status_message}</p>
        </div>
      ) : null}
    </>
  );
};

export default Cod;
