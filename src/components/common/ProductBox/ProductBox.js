import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import StarsReview from '../StarsReview/StarsReview';
import ActionButton from '../ActionButton/ActionButton';

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
          <ActionButton {...{ id, favourite }} buttonType={'favourite'} />
          <ActionButton {...{ id, compare }} buttonType={'compare'} />
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
