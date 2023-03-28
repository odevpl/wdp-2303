import React from 'react';

import styles from './Search.module.scss';
import NewFurniture from '../../features/NewFurniture/NewFurniture';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/categoriesRedux';
import { getAllProducts } from '../../../redux/productsRedux';

const Search = () => {
  const categories = useSelector(getAll);
  const products = useSelector(getAllProducts);

  return (
    <div className={styles.root}>
      <NewFurniture categories={categories} products={products} />
    </div>
  );
};

export default Search;
