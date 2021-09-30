import React from "react";
import { Link } from "react-router-dom";
import { Alert, Box } from "@mui/material";

export const BlogpostSuccessScreen = ({ newPageId }) => {
  return (
    <Box>
      <Alert sx={{ mb: 2 }}>
        Blogpost added successfully! Now you can go to{" "}
        <Link to={`/blogpost/${newPageId}`}>your new blogpost</Link> or go back
        to <Link to="/"> home page</Link>
      </Alert>
    </Box>
  );
};
