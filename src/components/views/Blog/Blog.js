import React from 'react';
import styles from './Blog.module.scss';

import BlogLayout from '../../layout/BlogLayout/BlogLayout';

const Blog = () => (
  <div className={styles.root}>
    <BlogLayout />
  </div>
);

// Blog.propTypes = {};

export default Blog;
