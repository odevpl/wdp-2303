import React, { useEffect, useState } from 'react';
import Button from '../../common/Button/Button';
import { Link } from 'react-router-dom';
import styles from './Cart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import CartTableLine from './CartTableLine/CartTableLine';
import shortid from 'shortid';

const Cart = () => {
  const [total, setTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);

  const cartData = [
    {
      productName: 'Placeholder Product 7',
      amount: 1,
      price: 5,
    },
    {
      productName: 'Placeholder Product 4',
      amount: 1,
      price: 67,
    },
    {
      productName: 'Placeholder Product 8 - Black, Amber 65',
      amount: 1,
      price: 20,
    },
  ];

  useEffect(() => {
    let temporaryTotal = 0;
    let temporarySubTotal = 0;
    cartData.map(
      singleItem => (temporaryTotal += singleItem.price * singleItem.amount)
    );
    cartData.map(
      singleItem => (temporarySubTotal += singleItem.price * singleItem.amount)
    );
    setTotal(temporaryTotal);
    setSubTotal(temporarySubTotal);
  }, [cartData]);

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
          {cartData.map(singleCartItem => (
            <CartTableLine
              key={shortid()}
              productName={singleCartItem.productName}
              amount={singleCartItem.amount}
              price={singleCartItem.price}
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
                <Link to='/' className={styles.proceedButton}>
                  <Button variant='main' type='submit' className={styles.proceedButton}>
                    PROCEED TO CHECKOUT
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;