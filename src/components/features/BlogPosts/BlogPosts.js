import React from 'react';
import styles from './BlogPosts.module.scss';

import { useSelector } from 'react-redux';
import { getAllBlogPosts } from '../../../redux/blogPostsRedux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faFolder, faUser } from '@fortawesome/free-solid-svg-icons';

const BlogPosts = () => {
  const posts = useSelector(state => getAllBlogPosts(state));

  return (
    <div className={styles.blogPosts}>
      {posts.map(post => (
        <div key={post.id}>
          <h2 className={styles.postTitle}>Post {post.id}</h2>
          <div className={styles.imageContainer}>
            <img src={post.source} alt='postImage1' className={styles.postImage}></img>
          </div>
          <p className={styles.postText}>{post.text}</p>
          <div className={`row ${styles.blogInfoContainer}`}>
            <div className='col-8 p-0'>
              <a>
                <FontAwesomeIcon
                  icon={faUser}
                  className={styles.icon}
                ></FontAwesomeIcon>
                {post.author}
              </a>
              <a>
                <FontAwesomeIcon
                  icon={faCalendar}
                  className={styles.icon}
                ></FontAwesomeIcon>
                {post.date}
              </a>
              <a>
                <FontAwesomeIcon
                  icon={faFolder}
                  className={styles.icon}
                ></FontAwesomeIcon>
                {post.category}
              </a>
            </div>
            <div className={`col-4 p-0 ${styles.readMoreColumn}`}>
              <a>Read More...</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
