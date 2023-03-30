import React from 'react';
import styles from './Search.module.scss';
import NewFurniture from '../../features/NewFurniture/NewFurniture';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/categoriesRedux';
import { getAllProducts } from '../../../redux/productsRedux';
import { getSearchText } from '../../../redux/searchTextRedux';

const Search = () => {
  const categories = useSelector(getAll);
  const products = useSelector(getAllProducts);
  const searchedText = useSelector(getSearchText);

  return (
    <div className={styles.root}>
      <NewFurniture categories={categories} products={products} searchedText={searchedText} productsOnDesktop={8} />
    </div>
  );
};

export default Search;
