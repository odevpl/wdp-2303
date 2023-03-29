import React from 'react';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
// import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';

const ProductPage = () => (
  <div className={styles.root}>
    <NewFurniture />
  </div>
);

// ProductPage.propTypes = {};

export default ProductPage;
