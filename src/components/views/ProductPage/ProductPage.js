import React from 'react';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
// import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import ProductReview from '../../features/ProductReview/ProductReview';

const ProductPage = () => {
  return (
    <div className={styles.root}>
      <NewFurniture />  
      <ProductReview />
    </div>
  );
};

// ProductPage.propTypes = {};

export default ProductPage;
