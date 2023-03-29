import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styles from './Feedback.module.scss';
import { useState } from 'react';
import { getAllFeedbacks } from '../../../redux/feedbacksRedux';
import Swipeable from '../../common/Swipeable/Swipeable';

const Feedback = () => {
  const [activePage, setActivePage] = useState(0);
  const feedbacks = useSelector(state => getAllFeedbacks(state));
  const handlePageChange = newPage => {
    setActivePage(newPage);
  };

  const leftAction = () => {
    if (activePage > 0) {
      let page = activePage - 1;
      handlePageChange(page);
    }
  };

  const rightAction = () => {
    let page = activePage + 1;
    if (page < feedbacks.length) {
      handlePageChange(page);
    }
  };

  return (
    <>
      <Swipeable leftAction={leftAction} rightAction={rightAction}>
        <div className={styles.root}>
          <div className='container'>
            <div className={styles.panelBar}>
              <div className='row g-0 align-items-end'>
                <div className={'col-10 ' + styles.heading}>
                  <h3>Client Feedback</h3>
                </div>
                <div className={'col-auto ' + styles.dots}>
                  <ul>
                    {feedbacks.map(feedback => (
                      <li key={feedback.id}>
                        <a
                          onClick={() => handlePageChange(feedback.id)}
                          className={feedback.id === activePage && styles.active}
                        ></a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className='row justify-content-center'>
              {feedbacks.slice(activePage, activePage + 1).map(feedback => (
                <div
                  key={feedback.id}
                  className='row justify-content-center text-center'
                >
                  <div className={'row justify-content-center ' + styles.header}>
                    &rdquo;
                  </div>
                  <div className='row justify-content-center mx-5 mb-2'>
                    <p>{feedback.description}</p>
                  </div>
                  <div className='row mb-4'>
                    <div className={'col-6 ' + styles.photo}>
                      <div className={styles.image}>
                        <img
                          alt={feedback.author}
                          src={`${process.env.PUBLIC_URL}/images/feedback/${feedback.id}.jpg`}
                        />
                      </div>
                    </div>
                    <div className={'col-6 text-nowrap ' + styles.author}>
                      <b className='p-0'>{feedback.author}</b>
                      <p className='p-0'>{feedback.status}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Swipeable>
    </>
  );
};

Feedback.propTypes = {
  feedbacks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      author: PropTypes.string,
      status: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

export default Feedback;
