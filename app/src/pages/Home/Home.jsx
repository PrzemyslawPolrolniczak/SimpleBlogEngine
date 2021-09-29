import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { BlogpostTile, PageLoader } from "../../components";
import { getAverageRating } from "../../utils";

import { useAppContext } from "../../context/AppContext";

export const Home = () => {
  const { blogposts, fetchBlogposts } = useAppContext();

  React.useEffect(() => {
    (async () => {
      try {
        !blogposts.length && (await fetchBlogposts());
      } catch (e) {
        console.log({ error: e });
      }
    })();
  }, [blogposts]);

  if (!blogposts.length) {
    return <PageLoader />;
  }

  return (
    <Container maxWidth="md">
      <Box>
        <Typography pb={2} variant="h1">
          Blogposts
        </Typography>
        <Link to="/create">
          <Button size="large">Create a new blogpost</Button>
        </Link>
      </Box>
      {blogposts.map(({ id, image, title, description, comments }) => (
        <BlogpostTile
          key={id}
          id={id}
          image={image}
          title={title}
          description={description}
          rating={getAverageRating(comments)}
          commentsAmount={comments.length}
        />
      ))}
    </Container>
  );
};
