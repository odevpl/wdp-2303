import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import {
  toggleProductFavourite,
  toggleProductCompare,
  getProductsToCompare,
} from '../../../redux/productsRedux';
import { useSelector } from 'react-redux';
import StarsReview from '../StarsReview/StarsReview';

const ProductBox = ({
  id,
  category,
  name,
  price,
  promo,
  stars,
  myStars,
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

  const compareList = useSelector(state => getProductsToCompare(state));
  const handleCompareClick = e => {
    const checkIfItemIsCompared = compareList.find(item => item.id === id); //check if item is already selected to compare
    e.preventDefault();
    if (compareList.length < 4 || !!checkIfItemIsCompared) {
      //!!checkIfItemIsCompared --> converts result to boolean -> true if item was already selected, and false otherwise
      dispatch(toggleProductCompare(id));
    }
  };
  const productLink = '/product/' + id;

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        {promo && <div className={styles.sale}>{promo}</div>}
        <NavLink to={productLink}>
          <div className={styles.image}>
            <img
              alt={name}
              src={`${process.env.PUBLIC_URL}/images/furniture/${category}/${id}.jpg`}
            />
          </div>
        </NavLink>
        <div className={styles.buttons}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <NavLink to={productLink}>
          <h5>{name}</h5>
        </NavLink>
        <StarsReview id={id} stars={stars} myStars={myStars} name={name} />
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
          <Button
            variant='outline'
            className={compare ? styles.active : null}
            onClick={handleCompareClick}
          >
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
  myStars: PropTypes.number,
  oldPrice: PropTypes.number,
  favourite: PropTypes.bool,
  compare: PropTypes.bool,
};

export default ProductBox;
