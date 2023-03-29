import React from 'react';
import FilterBySize from '../../common/FilterBySize/FilterBySize';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import Brands from '../../layout/Brands/Brands';
import FilterByCategory from '../../common/FilterCategory/FilteByCategory';

const ProductList = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className={`row ${styles.banner}`}>This is banner</div>
      <div className={`row ${styles.filtered}`}>
        <div className={`col-9 ${styles.productList}`}>This is Product List</div>
        <div className={`col-3 ${styles.filters}`}>
          These are filters
          <FilterByCategory></FilterByCategory>
          <FilterBySize></FilterBySize>
        </div>
      </div>
      <div className={`row ${styles.brands}`}>This is Brands</div>
    </div>
    <Brands />
  </div>
);

// ProductList.propTypes = {};

export default ProductList;
