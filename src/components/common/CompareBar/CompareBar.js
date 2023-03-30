import React from 'react';
import styles from './CompareBar.module.scss';
import Button from '../../common/Button/Button';
import { useSelector } from 'react-redux';
import { getProductsToCompare } from '../../../redux/productsRedux';
import { faWindowClose, faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toggleProductCompare } from '../../../redux/productsRedux';
import { useDispatch } from 'react-redux';

const CompareBar = () => {
  const dispatch = useDispatch();
  const compare = useSelector(state => getProductsToCompare(state));

  const handleClick = id => {
    dispatch(toggleProductCompare(id));
  };

  if (!compare.length) return null;

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.compareBar}>
          <p className={styles.title}>Products to compare:</p>
          {compare.map(item => (
            <div key={item.name} className='col-1'>
              <div className={styles.comparedItem} onClick={() => handleClick(item.id)}>
                <div className={styles.name}>{item.name}</div>
                <img
                  alt={item.name}
                  src={`${process.env.PUBLIC_URL}/images/furniture/${item.category}/${item.id}.jpg`}
                />
                <div className={styles.price}>{item.price}$</div>
                {item.favourite ? (
                  <div className={styles.fav}>
                    <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                  </div>
                ) : null}
                <FontAwesomeIcon className={styles.closeIcon} icon={faWindowClose}>
                  Add to compare
                </FontAwesomeIcon>
              </div>
            </div>
          ))}
          <Button variant='small' className={styles.button}>
            Compare
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompareBar;
