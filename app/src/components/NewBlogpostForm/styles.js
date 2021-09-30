import { Box, styled } from "@mui/material";

export const Actions = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  margin: "0.5rem -0.5rem",

  "& > *": {
    margin: "0 0.5rem",
  },
});
