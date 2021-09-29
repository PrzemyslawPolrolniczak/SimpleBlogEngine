import React from "react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

import * as S from "./styles";

export const LikeIndicator = ({ isLiked, onClick }) => {
  return (
    <S.LikedButton size="small" onClick={onClick}>
      {isLiked ? <Favorite color="error" /> : <FavoriteBorder />}
    </S.LikedButton>
  );
};
