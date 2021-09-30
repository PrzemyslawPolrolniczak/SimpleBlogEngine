import React from "react";
import { getAllBlogposts, simulateVoidApiCall } from "../fakeAPI/methods";
export const AppContext = React.createContext(null);

const defaultContext = {
  blogposts: [],
  fetchBlogposts: async () => {},
  createBlogpost: async () => {},
  archiveBlogpost: async (id) => {},
  addBlogpostComment: async (comment, id) => {},
  removeBlogpostComment: async (id) => {},
};

export const AppContextProvider = ({ children }) => {
  const [contextValues, setContextValues] = React.useState(defaultContext);

  const fetchBlogposts = async () => {
    const blogposts = await getAllBlogposts();

    setContextValues((prevState) => ({ ...prevState, blogposts }));
  };

  const addBlogpostComment = async (comment, blogpostId) => {
    await simulateVoidApiCall();

    const newBlogposts = contextValues.blogposts.map((blogpost) => {
      if (!blogpost || blogpost.id !== blogpostId) return blogpost;

      return { ...blogpost, comments: [...blogpost.comments, comment] };
    });

    setContextValues((prevState) => ({
      ...prevState,
      blogposts: newBlogposts,
    }));
  };

  const removeBlogpostComment = async (blogpostId, commentId) => {
    await simulateVoidApiCall();

    const newBlogposts = contextValues.blogposts.map((blogpost) => {
      if (!blogpost || blogpost.id !== blogpostId) return blogpost;

      return {
        ...blogpost,
        comments: [
          ...blogpost.comments.filter((comment) => comment.id !== commentId),
        ],
      };
    });

    setContextValues((prevState) => ({
      ...prevState,
      blogposts: newBlogposts,
    }));
  };

  const createBlogpost = async (blogpostData) => {
    await simulateVoidApiCall();

    setContextValues((prevState) => ({
      ...prevState,
      blogposts: [blogpostData, ...prevState.blogposts],
    }));
  };

  return (
    <AppContext.Provider
      value={{
        ...contextValues,
        fetchBlogposts,
        addBlogpostComment,
        removeBlogpostComment,
        createBlogpost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext(AppContext);
