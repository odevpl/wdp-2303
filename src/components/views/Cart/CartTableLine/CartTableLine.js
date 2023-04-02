import React from 'react';
import { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import styles from './CartTableLine.module.scss';
import PropTypes from 'prop-types';
import Button from '../../../common/Button/Button';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../../../../redux/cartRedux';

const CartTableLine = ({ id, name, price, source }) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);

  const totalForProduct = price * amount;

  const handleClick = e => {
    e.preventDefault(e);
    dispatch(removeProduct(id));
  };

  const incrementAmount = () => {
    if (amount < 10) {
      setAmount(amount + 1);
    }
  };

  const decrementAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  return (
    <div className={`row ${styles.nextRows}`}>
      <div className='col-8 h-100'>
        <div className={`row w-100 ${styles.vertCenter}`}>
          <Button
            className={`col-1 text-center ${styles.vertCenter}`}
            onClick={handleClick}
          >
            <AiOutlineCloseCircle className={styles.tableIcon} />
          </Button>
          <div className={`col-3 text-center ${styles.vertCenter}`}>
            <div className={styles.productImage}>
              <img alt={name} src={source} />
            </div>
          </div>
          <div className={`col-8  ps-4 ${styles.vertCenter}`}>{name}</div>
        </div>
      </div>
      <div className={`col-1 text-center ${styles.price}`}>${price.toFixed(2)}</div>
      <div className='col-2 text-center'>
        <Button onClick={decrementAmount}>-</Button>
        {amount}
        <Button onClick={incrementAmount}>+</Button>
      </div>
      <div className={`col-1 text-center ${styles.price}`}>
        ${totalForProduct.toFixed(2)}
      </div>
    </div>
  );
};

CartTableLine.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  source: PropTypes.string,
  amount: PropTypes.number,
};

export default CartTableLine;
