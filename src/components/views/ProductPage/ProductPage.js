import React from 'react';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Banner from '../../common/Banner/Banner';
// import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import ProductReview from '../../features/ProductReview/ProductReview';

const ProductPage = () => {
  return (
    <div className={styles.root}>
      <Banner />
      <NewFurniture />
      <ProductReview />
    </div>
  );
};

// ProductPage.propTypes = {};

export default ProductPage;
