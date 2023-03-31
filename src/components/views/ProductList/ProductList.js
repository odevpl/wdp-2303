import React from 'react';
import FilterBySize from '../../common/FilterBySize/FilterBySize';
import FilterByColor from '../../common/FilterByColor/FilterByColor';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import Brands from '../../layout/Brands/Brands';
import FilterByCategory from '../../common/FilterCategory/FilteByCategory';
import FilterByPrice from '../../common/FilterByPrice/FilterByPrice';
import Banner from '../../common/Banner/Banner';

const ProductList = () => (
  <div className={styles.root}>
    <div className='container'>
      <Banner />
      <div className={`row ${styles.filtered}`}>
        <div className={`col-9 ${styles.productList}`}>This is Product List</div>
        <div className={`col-3 ${styles.filters}`}>
          <FilterByCategory></FilterByCategory>
          <FilterByPrice />
          <FilterBySize></FilterBySize>
          <FilterByColor></FilterByColor>
        </div>
      </div>
    </div>
    <Brands />
  </div>
);

// ProductList.propTypes = {};

export default ProductList;
