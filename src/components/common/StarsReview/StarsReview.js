import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addMyStars } from '../../../redux/productsRedux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import styles from './StarsReview.module.scss';

const StarsReview = props => {
  const [myStars, setMyStars] = useState(props.myStars ? props.myStars : 0);
  const [hoverStars, setHoverStars] = useState(undefined);

  const dispatch = useDispatch();
  const id = props.id;

  const handleClick = (e, clickedStars) => {
    e.preventDefault();
    if (myStars === 0) {
      setMyStars(clickedStars);
      dispatch(addMyStars({ id, clickedStars }));
    }
  };

  const handleMouseOver = i => {
    if (myStars === 0) {
      setHoverStars(i);
    }
  };

  const handleMouseLeave = () => {
    setHoverStars(undefined);
  };

  const drawProperStar = i => {
    if (myStars !== 0) {
      return myStars < i ? farStar : faStar;
    } else if (hoverStars) {
      return hoverStars < i ? farStar : faStar;
    } else {
      return i <= props.stars ? faStar : farStar;
    }
  };

  const drawStarStyle = i => {
    if (myStars !== 0) {
      return styles.hoverStars;
    } else if (hoverStars) {
      return hoverStars < i ? styles.stars : styles.hoverStars;
    } else {
      return styles.stars;
    }
  };

  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map(i => (
        <a key={i} href='#'>
          <FontAwesomeIcon
            key={i}
            className={drawStarStyle(i)}
            icon={drawProperStar(i)}
            onClick={e => handleClick(e, i)}
            onMouseOver={() => handleMouseOver(i)}
            onMouseLeave={handleMouseLeave}
          >
            {i} stars
          </FontAwesomeIcon>
        </a>
      ))}
    </div>
  );
};

StarsReview.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  stars: PropTypes.number,
  myStars: PropTypes.number,
};

export default StarsReview;
