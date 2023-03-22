/* selectors */
export const getAllBlogPosts = ({ blogPosts }) => blogPosts;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
