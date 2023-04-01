import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import ProductModal from '../ProductModal/ProductModal';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import StarsReview from '../StarsReview/StarsReview';
import ActionButton from '../ActionButton/ActionButton';
import { useDispatch, useSelector } from 'react-redux';
import { toggleProductFavourite } from '../../../redux/productsRedux';
import { addProduct } from '../../../redux/cartRedux';
import { getCurrency } from '../../../redux/currencyRedux';

const ProductBox = props => {
  const [modal, setModal] = useState(false);
  const currency = useSelector(state => getCurrency(state));
  const {
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
    source,
  } = props;
  const dispatch = useDispatch();
  const productLink = '/product/' + id;

  useEffect(() => {
    const productData = JSON.parse(localStorage.getItem('favourites')) || {};
    if (productData[id]) {
      dispatch(toggleProductFavourite(id));
    }
  }, [dispatch, id]);

  const openModal = e => {
    e.preventDefault();
    setModal(true);
  };

  const handleAddToCartClick = e => {
    e.preventDefault();
    dispatch(addProduct({ id, name, price, source }));
  };

  return (
    <div className={styles.root}>
      {modal && <ProductModal closeModal={setModal} productData={props}></ProductModal>}
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
          <Button onClick={openModal} variant='small'>
            Quick View
          </Button>
          <Button variant='small' onClick={handleAddToCartClick}>
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
        {oldPrice && <div className={styles.oldPrice}>{currency.sign} {(oldPrice * currency.multiplier).toFixed(2)}</div>}
        <div className={styles.price}>
          <Button variant='small'>{currency.sign} {(price * currency.multiplier).toFixed(2)}</Button>
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
  source: PropTypes.string,
};

export default ProductBox;
