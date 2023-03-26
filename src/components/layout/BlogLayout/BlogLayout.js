import React from 'react';
import styles from './BlogLayout.module.scss';

import BlogPosts from '../../features/BlogPosts/BlogPosts';
import RecentPosts from '../../features/RecentPosts/RecentPosts';
import RecentComments from '../../features/RecentComments/RecentComments';
import BlogArchives from '../../features/BlogArchives/BlogArchives';
import BlogCategories from '../../features/BlogCategories/BlogCategories';

const BlogLayout = () => {
  return (
    <div className={styles.root}>
      <div className={`container ${styles.mainContainer}`}>
        <div className='row'>
          <div className='col-9'>
            <BlogPosts />
          </div>
          <div className='col-3'>
            <div className={styles.inputContainer}>
              <input placeholder='Search...' type={'text'}></input>
            </div>
            <RecentPosts />
            <RecentComments />
            <BlogArchives />
            <BlogCategories />
            <div>
              <h5 className={styles.meta}>Meta</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
