import React from "react";
import { Container, Typography } from "@mui/material";

import {
  NewBlogpostForm,
  PageLoader,
  BlogpostSuccessScreen,
} from "../../components";
import { useAppContext } from "../../context/AppContext";

import NoImage from "../../assets/images/no-image.png";

export const Create = () => {
  const { blogposts, fetchBlogposts, createBlogpost } = useAppContext();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [newBlogpostId, setNewBlogpostId] = React.useState(undefined);

  React.useEffect(() => {
    (async () => {
      if (!blogposts.length) {
        try {
          await fetchBlogposts;
        } catch (e) {
          console.log({ error: e });
        }
      }
    })();
  });

  const handleSubmit = async (e) => {
    setIsSubmitting(true);
    e.preventDefault();
    const {
      image: { value: image },
      author: { value: author },
      title: { value: title },
      description: { value: description },
      content: { value: content },
    } = e.target;

    const randomId = Math.round(Math.random() * 1000);

    const dataToSend = {
      id: randomId,
      image: image || NoImage,
      author,
      title,
      description,
      content,
      comments: [],
      isCreatedByUser: true,
    };

    await createBlogpost(dataToSend);
    setNewBlogpostId(randomId);
    setIsSubmitting(false);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h2" mt={4} mb={2} textAlign="center">
        Create a new blogpost
      </Typography>
      {newBlogpostId ? (
        <BlogpostSuccessScreen newPageId={newBlogpostId} />
      ) : (
        <NewBlogpostForm isSubmitting={isSubmitting} onSubmit={handleSubmit} />
      )}
      {isSubmitting && <PageLoader />}
    </Container>
  );
};
