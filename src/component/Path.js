import React from "react";
import { Stack } from "@mui/material";
import "./Path.css";

const Path = (props) => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        className="mainpath container"
      >
        <a href={props.link} className="pathhome">
          {props.pathhome}/
        </a>
        <a href="" className="pathdetails">
          {props.pathdetails}
        </a>
      </Stack>
    </>
  );
};

export default Path;
