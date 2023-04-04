import React, { useEffect, useState } from 'react';
import Button from '../../common/Button/Button';
import styles from './Cart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import CartTableLine from './CartTableLine/CartTableLine';
import { checkout, getAll } from '../../../redux/cartRedux';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Cart = () => {
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const [subTotalPrice, setSubTotalPrice] = useState(0);
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const cartProducts = useSelector(getAll);

  const handleClick = e => {
    e.preventDefault();
    dispatch(checkout());
  };

  const calculateCartTotal = (cartProducts, couponCode, discount) => {
    let subTotal = 0;
    for (let i = 0; i < cartProducts.length; i++) {
      subTotal += cartProducts[i].price * cartProducts[i].amount;
    }

    if (couponCode === 'blackfriday') {
      subTotal *= 0.5;
    }
    subTotal *= 1 - discount / 100;

    const deliveryFeeCalculation = () => {
      if (couponCode === 'bluemonday') {
        return 0;
      }
      if (subTotal) {
        return 20;
      }
      return 0;
    };
    let total = subTotal + deliveryFeeCalculation();

    return { subTotal, total };
  };

  const handleCouponCodeChange = e => {
    setCouponCode(e.target.value.toLowerCase());
  };

  const handleApplyCoupon = e => {
    e.preventDefault();
    const { subTotal, total } = calculateCartTotal(cartProducts, couponCode, discount);
    setSubTotalPrice(subTotal);
    setTotalPrice(total);
    if (couponCode === 'blackfriday') {
      setDiscount(50);
    } else {
      setDiscount(0);
    }
  };

  useEffect(() => {
    const { subTotal, total } = calculateCartTotal(cartProducts, couponCode, discount);
    setSubTotalPrice(subTotal);
    setTotalPrice(total);
  }, [cartProducts, couponCode, discount]);
  return (
    <div className={styles.root}>
      <div className={styles.cartBar}>
        <div className='container'>
          <span className='col-6 d-inline-flex justify-content-start ps-1'>Cart</span>
          <span className='col-6 d-inline-flex justify-content-end pe-1'>
            <span className={styles.cartIcon}>
              <FontAwesomeIcon icon={faHome} className={styles.icon} />
              &gt; Cart
            </span>
          </span>
        </div>
      </div>
      <div className='container'>
        <div className={styles.cartTable}>
          <div className={`row ${styles.firstRow}`}>
            <span className='col-8'>
              <div className='row'>
                <span className='col-2'></span>
                <span className={`col-10 ps-4 ${styles.left}`}>PRODUCT</span>
              </div>
            </span>
            <span className='col-1'>PRICE</span>
            <span className='col-2'>QUANTITY</span>
            <span className='col-1'>TOTAL</span>
          </div>
          {cartProducts.map(singleItem => (
            <CartTableLine
              key={singleItem.id}
              id={singleItem.id}
              amount={singleItem.amount}
              name={singleItem.name}
              price={singleItem.price}
              source={singleItem.source}
            ></CartTableLine>
          ))}
          <div className={`row ${styles.lastRow}`}>
            <span className='col-6 justify-content-start d-flex'>
              <input
                className='me-2'
                onChange={handleCouponCodeChange}
                placeholder='Coupon code'
              />
              <Button
                variant='main'
                onClick={handleApplyCoupon}
                type='submit'
                className={styles.cartButton}
              >
                APPLY COUPON
              </Button>
            </span>
            <span className='col-6 d-flex justify-content-end'>
              <Button
                variant='main'
                type='submit'
                className={`${styles.cartButton} ${styles.cartButtonTransp}`}
              >
                UPDATE CART
              </Button>
            </span>
          </div>
        </div>
        <div className='row mx-0'>
          <div className='col-6'></div>
          <div className='col-6 mb-4'>
            <div className={`row ${styles.cartTotalsTop}`}>
              <div className='col-5'></div>
              <div className='col-7'>
                <span>Cart totals</span>
              </div>
            </div>
            <div className={`row ${styles.cartTotalsRows}`}>
              <div className='col-5'>Subtotal</div>
              <div className={`col-7 ${styles.borderLeft} ${styles.price}`}>
                <span>${subTotalPrice}</span>
              </div>
            </div>
            <div className={`row ${styles.cartTotalsRows}`}>
              <div className='col-5'>Total</div>
              <div className={`col-7 ${styles.borderLeft} ${styles.price}`}>
                <span>${totalPrice}</span>
              </div>
            </div>
            <div className={`row ${styles.cartTotalsBottom}`}>
              <div className='col-12'>
                <Button
                  variant='main'
                  type='submit'
                  className={styles.proceedButton}
                  onClick={handleClick}
                >
                  PROCEED TO CHECKOUT
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Cart.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  source: PropTypes.string,
};

export default Cart;
