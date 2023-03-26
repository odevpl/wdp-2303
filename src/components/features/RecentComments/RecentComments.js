import React from 'react';
import styles from './RecentComments.module.scss';

const RecentComments = () => {
  return (
    <div className={styles.recentCommentsContainer}>
      <h5 className={styles.recentCommentsTitle}>Recent Comments</h5>
    </div>
  );
};

export default RecentComments;
