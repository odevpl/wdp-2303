import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import styles from './CartTableLine.module.scss';
import PropTypes from 'prop-types';

const CartTableLine = props => {
  const totalForProduct = props.price * props.amount;

  return (
    <div className={`row ${styles.nextRows}`}>
      <span className='col-8 h-100'>
        <div className={`row w-100 ${styles.vertCenter}`}>
          <span className={`col-1 text-center ${styles.vertCenter}`}>
            <AiOutlineCloseCircle className={styles.tableIcon} />
          </span>
          <span className={`col-1 text-center ${styles.vertCenter}`}>
            <div className={styles.productImage}></div>
          </span>
          <span className={`col-10  ps-4 ${styles.vertCenter}`}>
            {props.productName}
          </span>
        </div>
      </span>
      <span className={`col-1 text-center ${styles.price}`}>
        ${props.price.toFixed(2)}
      </span>
      <span className='col-2 text-center'>- {props.amount} +</span>
      <span className={`col-1 text-center ${styles.price}`}>
        ${totalForProduct.toFixed(2)}
      </span>
    </div>
  );
};

CartTableLine.propTypes = {
  productName: PropTypes.string,
  price: PropTypes.number,
  amount: PropTypes.number,
  countSubTotal: PropTypes.func,
  countTotal: PropTypes.func,
};

export default CartTableLine;
