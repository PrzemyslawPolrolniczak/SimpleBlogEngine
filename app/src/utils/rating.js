export const getAverageRating = (comments) => {
  const ratingSum = comments.reduce((acc, curr) => acc + curr.userRating, 0);
  const commentsWithoutRating = comments.filter(
    (comment) => comment.userRating === 0
  );

  return ratingSum / (comments.length - commentsWithoutRating.length);
};
