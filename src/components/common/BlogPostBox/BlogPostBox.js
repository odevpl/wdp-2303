import React from 'react';
import PropTypes from 'prop-types';
import styles from './BlogPostBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';

const BlogPostBox = ({ id, date, text, title }) => {
  return (
    <div className={'col ' + styles.root}>
      <div className={'row ' + styles.photo}>
        <div className={styles.image}>
          <img alt={id} src={`${process.env.PUBLIC_URL}/images/blog/${id}.jpg`} />
        </div>
      </div>
      <div className='row'>
        <div className={'col'}>
          <div className={'col m-4 ' + styles.description}>
            <div className='row text-center mb-3'>
              <div className={'col-6 ' + styles.text}>
                <FontAwesomeIcon icon={faCalendar} /> {date}
              </div>
              <div className={'col-6 ' + styles.text}>
                <FontAwesomeIcon icon={faComment} /> {id}
                {id == 1 ? ' Comment' : ' Comments'}
              </div>
            </div>
            <a href='#' className={'row mb-3 ' + styles.title}>
              {title}
            </a>
            <p className={'row ' + styles.text}>
              {text
                .split(' ')
                .slice(0, 25)
                .join(' ')}
              {'...'}
            </p>
          </div>
        </div>
      </div>
      <div className={'text-center ' + styles.button}>
        <Button variant='main'>Read More</Button>
      </div>
    </div>
  );
};

BlogPostBox.propTypes = {
  text: PropTypes.string,
  id: PropTypes.number,
  title: PropTypes.string,
  date: PropTypes.string,
};

export default BlogPostBox;
