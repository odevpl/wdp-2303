import React from 'react';
import styles from './ProductPage.module.scss';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import ProductReview from '../../features/ProductReview/ProductReview';

const ProductPage = () => {
  return (
    <div className={styles.root}>
      <ProductReview />
      <NewFurniture productsOnDesktop={8} />
    </div>
  );
};

// ProductPage.propTypes = {};

export default ProductPage;