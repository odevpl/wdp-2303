import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import {
  faStar as farStar,
  faHeart as farHeart,
} from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { toggleProductFavourite } from '../../../redux/productsRedux';

const ProductBox = ({
  id,
  category,
  name,
  price,
  promo,
  stars,
  oldPrice,
  favourite,
  compare,
}) => {
  const dispatch = useDispatch();
  const productId = id;
  const handleClick = e => {
    e.preventDefault();
    dispatch(toggleProductFavourite(productId));
  };

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.image}>
          <img
            alt={name}
            src={`${process.env.PUBLIC_URL}/images/furniture/${category}/${id}.jpg`}
          />
        </div>

        <div className={styles.buttons}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map(i => (
            <a key={i} href='#'>
              {i <= stars ? (
                <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
              )}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            variant='outline'
            onClick={handleClick}
            className={clsx(styles.buttonActive, favourite ? styles.active : null)}
          >
            <FontAwesomeIcon icon={favourite ? faHeart : farHeart}>
              Favorite
            </FontAwesomeIcon>
          </Button>
          <Button variant='outline' className={compare ? styles.active : null}>
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        {oldPrice && <div className={styles.oldPrice}>$ {oldPrice}</div>}
        <div className={styles.price}>
          <Button variant='small'>$ {price}</Button>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  id: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  oldPrice: PropTypes.number,
  favourite: PropTypes.bool,
  compare: PropTypes.bool,
};

export default ProductBox;
