import React from "react";
import { Box, IconButton, Paper, Rating, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";

import * as S from "./styles";

export const Comment = ({
  id,
  author,
  text,
  userRating,
  isCreatedByUser,
  onDeleteClick,
}) => {
  return (
    <Box my={2}>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
        }}
        elevation={1}
      >
        <Box>
          <Typography variant="body2">{author}</Typography>
          <Typography pt={1} variant="body1">
            {text}
          </Typography>
        </Box>
        <S.Actions>
          {isCreatedByUser && (
            <IconButton onClick={() => onDeleteClick(id)}>
              <Delete color="error" />
            </IconButton>
          )}
          <Rating readOnly value={userRating} precision={0.5} />
        </S.Actions>
      </Paper>
    </Box>
  );
};
