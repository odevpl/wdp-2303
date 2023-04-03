import React from 'react';
import { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import styles from './CartTableLine.module.scss';
import PropTypes from 'prop-types';
import Button from '../../../common/Button/Button';
import { useDispatch } from 'react-redux';
import { removeProduct, updateProduct } from '../../../../redux/cartRedux';

const CartTableLine = ({ id, name, price, source, amount }) => {
  const dispatch = useDispatch();
  const [itemAmount, setAmount] = useState(amount);

  const totalForProduct = price * itemAmount;

  const handleClick = e => {
    e.preventDefault(e);
    dispatch(removeProduct(id));
  };

  const incrementAmount = () => {
    if (itemAmount < 10) {
      setAmount(itemAmount + 1);
      dispatch(updateProduct({ id, amount: itemAmount + 1 }));
    }
  };

  const decrementAmount = () => {
    if (itemAmount > 1) {
      setAmount(itemAmount - 1);
      dispatch(updateProduct({ id, amount: itemAmount - 1 }));
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
        {itemAmount}
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
  countSubTotal: PropTypes.func,
  totalForProduct: PropTypes.func,
};
export default CartTableLine;
