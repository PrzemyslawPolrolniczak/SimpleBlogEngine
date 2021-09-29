import React from "react";
import { Container, Typography } from "@mui/material";

import { BlogPostTile } from "../../components";

export const Home = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h1" textAlign="center">
        Blogposts
      </Typography>
      <BlogPostTile image="https://picsum.photos/id/1/850/300" />
      <BlogPostTile image="https://picsum.photos/id/2/850/300" />
      <BlogPostTile image="https://picsum.photos/id/3/850/300" />
    </Container>
  );
};
