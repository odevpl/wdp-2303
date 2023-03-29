import { useSwipeable } from 'react-swipeable';
import React from 'react';
import styles from './Swipeable.module.scss';
import PropTypes from 'prop-types';

const Swipeable = ({ children, leftAction, rightAction }) => {
  const handlers = useSwipeable({
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: true,
    rotationAngle: 0,
    onSwipedLeft: () => leftAction(),
    onSwipedRight: () => rightAction(),
  });
  return (
    <div className={styles.swipeable}>
      <div {...handlers}> {children} </div>
    </div>
  );
};

Swipeable.propTypes = {
  children: PropTypes.node,
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
};
export default Swipeable;
