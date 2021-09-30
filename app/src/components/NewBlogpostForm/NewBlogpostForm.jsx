import React from "react";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";

import * as S from "./styles";

export const NewBlogpostForm = ({ isSubmitting, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <TextField
        fullWidth
        disabled={isSubmitting}
        id="image"
        label="Image URL"
        variant="outlined"
        margin="dense"
      />
      <TextField
        fullWidth
        required
        disabled={isSubmitting}
        id="author"
        label="Author"
        variant="outlined"
        margin="dense"
      />
      <TextField
        fullWidth
        required
        disabled={isSubmitting}
        id="title"
        label="Title"
        variant="outlined"
        margin="dense"
      />
      <TextField
        multiline
        fullWidth
        required
        rows={4}
        disabled={isSubmitting}
        id="description"
        label="Description"
        variant="outlined"
        margin="dense"
      />
      <TextField
        multiline
        fullWidth
        required
        rows={10}
        disabled={isSubmitting}
        id="content"
        label="Content"
        variant="outlined"
        margin="dense"
      />
      <S.Actions>
        <Link to="/">
          <Button type="submit" size="large">
            Cancel
          </Button>
        </Link>

        <Button type="submit" size="large" variant="contained">
          Submit
        </Button>
      </S.Actions>
    </form>
  );
};
