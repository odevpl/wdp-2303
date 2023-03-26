import React from 'react';
import styles from './BlogCategories.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';

const BlogCategories = () => {
  return (
    <div className={styles.blogCategoriesContainer}>
      <h5 className={styles.blogCategoriesTitle}>Categories</h5>
      <a className={styles.blogCategory}>
        <FontAwesomeIcon icon={faFolder} />
        Just Usual
      </a>
    </div>
  );
};

export default BlogCategories;
