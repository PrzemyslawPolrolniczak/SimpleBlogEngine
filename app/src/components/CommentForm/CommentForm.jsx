import React from "react";
import {
  Box,
  Button,
  CircularProgress,
  Rating,
  TextField,
} from "@mui/material";

import * as S from "./styles";

export const CommentForm = ({
  isSubmitting,
  onSubmit,
  onRatingClick,
  userRating,
}) => {
  return (
    <Box>
      <form onSubmit={onSubmit}>
        <S.FlexWrapper>
          <TextField
            required
            disabled={isSubmitting}
            id="author"
            label="Author"
            variant="outlined"
          />
          <S.RatingWrapper>
            <Rating
              disabled={isSubmitting}
              name="rating"
              value={userRating}
              precision={0.5}
              onChange={onRatingClick}
            />
          </S.RatingWrapper>
        </S.FlexWrapper>
        <TextField
          required
          fullWidth
          multiline
          disabled={isSubmitting}
          margin="normal"
          rows={6}
          id="text"
          label="Comment"
          variant="outlined"
        />
        <Button disabled={isSubmitting} type="submit">
          {isSubmitting ? <CircularProgress size={14} /> : "Submit"}
        </Button>
      </form>
    </Box>
  );
};
