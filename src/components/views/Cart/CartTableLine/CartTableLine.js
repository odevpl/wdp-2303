import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import styles from './CartTableLine.module.scss';
import PropTypes from 'prop-types';
import Button from '../../../common/Button/Button';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../../../../redux/cartRedux';

const CartTableLine = ({ id, name, amount, price, source }) => {
  const dispatch = useDispatch();
  const totalForProduct = price * amount;

  const handleClick = e => {
    e.preventDefault(e);
    dispatch(removeProduct(id));
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
      <div className='col-2 text-center'>- {amount} +</div>
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
  amount: PropTypes.string,
  source: PropTypes.string,
  countSubTotal: PropTypes.func,
  countTotal: PropTypes.func,
};

export default CartTableLine;
