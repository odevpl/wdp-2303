import React from 'react';
import styles from './RecentPosts.module.scss';

const RecentPosts = () => {
  return (
    <div className={styles.recentPostsContainer}>
      <h5 className={styles.recentPostsTitle}>Recent Posts</h5>
      <ul className={styles.postList}>
        <li>
          <a>Post 12</a>
        </li>
        <li>
          <a>Post 12</a>
        </li>
        <li>
          <a>Post 12</a>
        </li>
        <li>
          <a>Post 12</a>
        </li>
      </ul>
    </div>
  );
};

export default RecentPosts;
