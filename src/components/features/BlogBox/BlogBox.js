import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styles from './BlogBox.module.scss';
import BlogPostBox from '../../common/BlogPostBox/BlogPostBox';
import { getAllBlogPosts } from '../../../redux/blogPostsRedux';
import { useState } from 'react';
import { getViewportMode } from '../../../redux/viewportModeRedux';
import { useEffect } from 'react';
const BlogBox = () => {
  const [activePage, setActivePage] = useState(0);
  const handlePageChange = newPage => {
    setActivePage(newPage);
  };
  const blogPosts = useSelector(state => getAllBlogPosts(state));
  const viewportMode = useSelector(viewportMode => getViewportMode(viewportMode));
  useEffect(() => handlePageChange(0), [viewportMode]);
  const rows = viewportMode === 'mobile' ? 1 : viewportMode === 'tablet' ? 2 : 3;
  const pagesCount = Math.ceil(blogPosts.length / rows);

  const dots = [];
  for (let i = 0; i < pagesCount; i++) {
    dots.push(
      <li key={i}>
        <a
          onClick={() => handlePageChange(i)}
          className={i === activePage && styles.active}
        >
          page {i}
        </a>
      </li>
    );
  }

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className='row g-0'>
            <div className={'col-md-auto col-12  mb-md-0 ' + styles.heading}>
              <h3>Latest Blog</h3>
            </div>
            <div className={'col-lg-auto col-12 text-center ' + styles.dots}>
              <ul>{dots}</ul>
            </div>
          </div>
        </div>

        <div className='row'>
          {blogPosts.slice(activePage * rows, (activePage + 1) * rows).map(post => (
            <div key={post.id} className='col-lg-4 col-md-6 col-12'>
              <BlogPostBox {...post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

BlogBox.propTypes = {
  blogPosts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      date: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

export default BlogBox;
