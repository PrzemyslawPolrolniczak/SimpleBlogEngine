import React from "react";
import { Typography } from "@mui/material";
import { Comment } from "@mui/icons-material";

import * as S from "./styles";

export const CommentsIndicator = ({ commentsAmount }) => (
  <S.Comments>
    <Typography mr={0.5} variant="body1">
      {commentsAmount}
    </Typography>
    <Comment />
  </S.Comments>
);
