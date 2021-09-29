import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
  Rating,
  Typography,
} from "@mui/material";

import { CommentsIndicator } from "..";

import * as S from "./styles";

export const BlogpostTile = ({
  id,
  image,
  title,
  description,
  commentsAmount = 0,
  rating = 0,
  userRatingValue,
}) => {
  const [userRating, setUserRating] = React.useState(userRatingValue);

  const handleRatingClick = (_, newValue) => {
    setUserRating(newValue);
  };

  return (
    <Box my={2}>
      <Card>
        <CardMedia component="img" height="300" alt={title} src={image} />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {title || "No title"}
            <Typography variant="h4" color="text.disabled" component="span">
              {" "}
              #{id}
            </Typography>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description || "No description"}
          </Typography>
        </CardContent>

        <S.BottomContentWrapper>
          <S.Informations>
            <Rating
              readOnly
              value={userRating || rating}
              precision={0.5}
              onChange={handleRatingClick}
            />
            <CommentsIndicator commentsAmount={commentsAmount} />
          </S.Informations>
          <Link to={`blogpost/${id}`}>
            <Button size="small">Read more</Button>
          </Link>
        </S.BottomContentWrapper>
      </Card>
    </Box>
  );
};
