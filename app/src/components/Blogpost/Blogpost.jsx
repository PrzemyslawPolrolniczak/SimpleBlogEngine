import React from "react";
import { Box, Typography } from "@mui/material";

import * as S from "./styles";

export const Blogpost = ({
  image,
  title,
  description,
  content,
  shouldRenderSmallerFont,
}) => {
  return (
    <>
      <Box>
        <S.Image src={image} alt={title} />
      </Box>
      <Typography mt={2} variant={shouldRenderSmallerFont ? "h2" : "h1"}>
        {title}
      </Typography>
      <Typography my={4} variant="h4">
        {description}
      </Typography>
      <Typography variant="body1">{content}</Typography>
    </>
  );
};
