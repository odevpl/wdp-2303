import React from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import styles from './ProductModal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const ProductModal = ({ closeModal, productData }) => {
  return (
    <div className={styles.root}>
      <div className={styles.modalWindow}>
        <div className={styles.quitButton}>
          <Button onClick={() => closeModal(false)}>
            <FontAwesomeIcon icon={faXmark} />
          </Button>
        </div>
        <img
          alt={productData.name}
          src={`${process.env.PUBLIC_URL}/images/furniture/${productData.category}/${productData.id}.jpg`}
        />
      </div>
    </div>
  );
};

ProductModal.propTypes = {
  closeModal: PropTypes.bool,
  productData: PropTypes.object,
};

export default ProductModal;
