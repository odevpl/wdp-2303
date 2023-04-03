import React from 'react';
import FilterBySize from '../../common/FilterBySize/FilterBySize';
import FilterByColor from '../../common/FilterByColor/FilterByColor';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import Brands from '../../layout/Brands/Brands';
import FilterByCategory from '../../common/FilterCategory/FilteByCategory';
import FilterByPrice from '../../common/FilterByPrice/FilterByPrice';
import Banner from '../../common/Banner/Banner';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';

const ProductList = () => {

  return (
    <div className={styles.root}>
      <div className='container'>
        <Banner />
        <div className={`row ${styles.filtered}`}>
          <div className={`col-9 ${styles.productList}`}>
            <NewFurniture productsOnDesktop={12} filter={true} />
          </div>
          <div className={`col-3 ${styles.filters}`}>
            <FilterByCategory></FilterByCategory>
            <FilterByPrice />
            <FilterBySize></FilterBySize>
            <FilterByColor></FilterByColor>
          </div>
          <div className={`row ${styles.brands}`}>
            <Brands />
          </div>
        </div>
      </div>
    </div>
  );
};

// ProductList.propTypes = {};

export default ProductList;
