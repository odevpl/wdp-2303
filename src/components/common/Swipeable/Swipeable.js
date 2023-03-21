import { useSwipeable } from 'react-swipeable';
import React from 'react';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './Swipeable.module.scss';
import PropTypes from 'prop-types';

const Swipeable = ({ children, leftAction, rightAction }) => {
  const handlers = useSwipeable({
    onSwipedLeft: eventData => console.log('User Swiped Left!', eventData),
    onSwipedRight: eventData => console.log('User Swiped Right!', eventData),
  });
  return (
    <div className={styles.swipeable}>
      <div className='swiper'>
        <Button onClick={leftAction}>
          <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
        </Button>
      </div>
      <div {...handlers}> {children} </div>
      <div className='swiper'>
        <Button onClick={rightAction}>
          <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </Button>
      </div>
    </div>
  );
};

Swipeable.propTypes = {
  children: PropTypes.node,
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
};
export default Swipeable;
