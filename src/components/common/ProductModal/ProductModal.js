import React from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import styles from './ProductModal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const ProductModal = ({ closeModal, productData }) => {
  return (
    <div className={styles.root}>
      <div className={styles.modalWindow}>
        <div className={styles.quitButton}>
          <Button onClick={() => closeModal(false)}>
            <FontAwesomeIcon icon={faXmark} />
          </Button>
        </div>
        <div className={`row ${styles.modalData}`}>
          <div className={`col-6 ${styles.photo}`}>
            <img
              alt={productData.name}
              src={`${process.env.PUBLIC_URL}/images/furniture/${productData.category}/${productData.id}.jpg`}
            />
          </div>
          <div className={`col-6 ${styles.productParams}`}>
            <div className={styles.title}>
              <h5>{productData.name}</h5>
            </div>
            <div className={styles.stars}>
              {[1, 2, 3, 4, 5].map(i => (
                <a key={i} href='#'>
                  {i <= productData.stars ? (
                    <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                  ) : (
                    <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
                  )}
                </a>
              ))}
            </div>
            {productData.oldPrice && (
              <div className={styles.oldPrice}>$ {productData.oldPrice}</div>
            )}
            <div className={styles.price}>
              <Button variant='small'>$ {productData.price}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductModal.propTypes = {
  closeModal: PropTypes.bool,
  productData: PropTypes.object,
};

export default ProductModal;
