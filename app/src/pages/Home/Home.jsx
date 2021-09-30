import React from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";

import { BlogpostTile, PageLoader } from "../../components";
import { getAverageRating } from "../../utils";

import { useAppContext } from "../../context/AppContext";

export const Home = () => {
  const { blogposts, fetchBlogposts, archiveBlogpost } = useAppContext();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const shouldRenderSmallerFont = useMediaQuery("(max-width:600px)");

  React.useEffect(() => {
    (async () => {
      try {
        !blogposts.length && (await fetchBlogposts());
      } catch (e) {
        console.log({ error: e });
      }
    })();
  }, [blogposts]);

  const handleBlogpostDelete = async (id) => {
    setIsSubmitting(true);
    await archiveBlogpost(id);
    setIsSubmitting(false);
  };

  if (!blogposts.length) {
    return <PageLoader />;
  }

  return (
    <Container maxWidth="md">
      <Box>
        <Typography pb={2} variant={shouldRenderSmallerFont ? "h2" : "h1"}>
          Blogposts
        </Typography>
        <Link to="/create">
          <Button size="large">Create a new blogpost</Button>
        </Link>
      </Box>
      {blogposts.map(
        ({ id, image, title, description, comments, isCreatedByUser }) => (
          <BlogpostTile
            key={id}
            id={id}
            image={image}
            title={title}
            description={description}
            rating={getAverageRating(comments)}
            commentsAmount={comments.length}
            isCreatedByUser={isCreatedByUser}
            onDeleteClick={handleBlogpostDelete}
          />
        )
      )}
      {isSubmitting && <PageLoader />}
    </Container>
  );
};
