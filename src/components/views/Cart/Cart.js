import React, { useEffect, useState } from 'react';
import Button from '../../common/Button/Button';
import styles from './Cart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import CartTableLine from './CartTableLine/CartTableLine';
import { checkout, getAll } from '../../../redux/cartRedux';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const cartProducts = useSelector(getAll);

  const handleClick = e => {
    e.preventDefault();
    dispatch(checkout());
  };

  useEffect(() => {
    let temporaryTotal = 0;
    let temporarySubTotal = 0;
    cartProducts.map(
      singleItem => (temporaryTotal += singleItem.price * singleItem.amount)
    );
    cartProducts.map(
      singleItem => (temporarySubTotal += singleItem.price * singleItem.amount)
    );
    setTotal(temporaryTotal);
    setSubTotal(temporarySubTotal);
  }, [cartProducts]);

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
          {cartProducts.map(singleCartItem => (
            <CartTableLine
              key={singleCartItem.id}
              id={singleCartItem.id}
              amount='1'
              name={singleCartItem.name}
              price={singleCartItem.price}
              source={singleCartItem.source}
            ></CartTableLine>
          ))}
          <div className={`row ${styles.lastRow}`}>
            <span className='col-6 justify-content-start d-flex'>
              <input className='me-2' placeholder='Coupon code' />
              <Button variant='main' type='submit' className={styles.cartButton}>
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
                <span>${subTotal.toFixed(2)}</span>
              </div>
            </div>
            <div className={`row ${styles.cartTotalsRows}`}>
              <div className='col-5'>Total</div>
              <div className={`col-7 ${styles.borderLeft} ${styles.price}`}>
                <span>${total.toFixed(2)}</span>
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

export default Cart;
