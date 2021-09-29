import { IconButton, styled } from "@mui/material";

export const LikedButton = styled(IconButton)(({ theme }) => ({
  "&:hover > svg": {
    fill: theme.palette.error.main,
  },
}));
