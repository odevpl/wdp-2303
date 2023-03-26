import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';

const ProductList = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className={`row ${styles.banner}`}>This is banner</div>
      <div className={`row ${styles.filtered}`}>
        <div className={`col-9 ${styles.productList}`}>This is Product List</div>
        <div className={`col-3 ${styles.filters}`}>These are filters</div>
      </div>
      <div className={`row ${styles.brands}`}>This is Brands</div>
    </div>
  </div>
);

// ProductList.propTypes = {};

export default ProductList;
