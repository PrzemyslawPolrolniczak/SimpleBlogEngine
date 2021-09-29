import React from "react";
import { useParams } from "react-router-dom";
import { Box, Container, IconButton } from "@mui/material";
import { AddComment } from "@mui/icons-material";

import { Blogpost, PageLoader, CommentForm } from "../../components";

import { useAppContext } from "../../context/AppContext";
import { Comment } from "../../components/Comment";

export const BlogpostView = () => {
  const {
    blogposts,
    addBlogpostComment,
    fetchBlogposts,
    removeBlogpostComment,
  } = useAppContext();
  const [blogpostData, setBlogpostData] = React.useState(undefined);
  const [userRating, setUserRating] = React.useState(null);
  const [isCommenting, setIsCommenting] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { id: stringId } = useParams();
  const id = Number(stringId);

  const fetchBlogpostData = async () => {
    if (blogposts.length) {
      console.log({ blogposts });
      setBlogpostData(blogposts.find((blogpost) => blogpost.id === id));

      return;
    }

    try {
      await fetchBlogposts();

      setBlogpostData(blogposts.find((blogpost) => blogpost.id === id));
    } catch (e) {
      console.log({ error: e });
    }
  };

  React.useEffect(() => {
    (async () => {
      await fetchBlogpostData();
    })();
  }, [blogposts]);

  const handleCommentIconClick = () => {
    setIsCommenting((prevState) => !prevState);
  };

  const handleCommentSubmit = async (e) => {
    setIsSubmitting(true);
    e.preventDefault();
    const {
      author: { value: author },
      text: { value: text },
      rating: { value: rating },
    } = e.target;

    const dataToSend = {
      id: Math.round(Math.random() * 1000),
      author,
      text,
      userRating: Number(rating),
      isCreatedByUser: true,
    };

    await addBlogpostComment(dataToSend, id);
    await fetchBlogpostData();
    setUserRating(null);
    setIsCommenting(false);
    setIsSubmitting(false);
  };

  const handleRatingClick = (_, value) => {
    setUserRating(value);
  };

  const handleCommentDeleteClick = async (commentId) => {
    setIsSubmitting(true);
    await removeBlogpostComment(id, commentId);
    await fetchBlogpostData();
    setIsSubmitting(false);
  };

  if (!blogpostData) {
    return <PageLoader />;
  }

  return (
    <Container maxWidth="lg">
      <Blogpost {...blogpostData} />
      <Box>
        {blogpostData.comments.map(({ id, ...props }) => (
          <Comment
            key={id}
            id={id}
            onDeleteClick={handleCommentDeleteClick}
            {...props}
          />
        ))}
      </Box>
      <Box>
        <IconButton onClick={handleCommentIconClick}>
          <AddComment
            color={isCommenting ? "primary" : "inherit"}
            size="large"
          />
        </IconButton>
      </Box>

      <Box mb={3}>
        {isCommenting && (
          <CommentForm
            isSubmitting={isSubmitting}
            onSubmit={handleCommentSubmit}
            onRatingClick={handleRatingClick}
            userRating={userRating}
          />
        )}
      </Box>
      {isSubmitting && <PageLoader />}
    </Container>
  );
};
