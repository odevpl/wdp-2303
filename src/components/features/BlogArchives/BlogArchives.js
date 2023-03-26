import React from 'react';
import styles from './BlogArchives.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';

const BlogArchives = () => {
  return (
    <div className={styles.blogArchivesContainer}>
      <h5 className={styles.blogArchivesTitle}>Archives</h5>
      <a className={styles.blogArchive}>
        <FontAwesomeIcon icon={faBoxOpen} />
        June 2015
      </a>
    </div>
  );
};

export default BlogArchives;
