import { fakeBlogposts } from "./blogposts";

export const getBlogpostById = async (id) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(fakeBlogposts.find((post) => post.id === id));
    }, 1000);
  });

export const getAllBlogposts = async () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(fakeBlogposts);
    }, 1000);
  });

export const simulateVoidApiCall = async () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
