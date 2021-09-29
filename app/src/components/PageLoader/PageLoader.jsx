import React from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import { common } from "@mui/material/colors";

export const PageLoader = () => {
  return (
    <Backdrop open>
      <CircularProgress sx={{ color: common.white }} />
    </Backdrop>
  );
};
