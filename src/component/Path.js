import React from "react";
import { Stack } from "@mui/material";
import "./Path.css";

const Path = ({ link, pathhome, pathdetails, subPath }) => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        className="mainpath container-fluid"
      >
        <a href={link} className="pathhome">
          {pathhome}/
        </a>
        <a href="" className="pathdetails">
          {pathdetails}
        </a>
        {/* <a href="" className="pathdetails">
          {subPath}
        </a> */}
      </Stack>
    </>
  );
};

export default Path;
