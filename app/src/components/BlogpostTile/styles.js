import { Box, CardActions, styled } from "@mui/material";

export const BottomContentWrapper = styled(CardActions)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const Informations = styled(Box)({
  display: "flex",
  alignItems: "center",
  margin: "0 -0.5rem",

  "& > *": {
    margin: "0 0.5rem",
  },
});
