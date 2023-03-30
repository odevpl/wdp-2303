import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { changeSearchText } from '../../../redux/searchTextRedux';

import styles from './ProductSearch.module.scss';
import { Link } from 'react-router-dom';

const ProductSearch = () => {
  
  const [searchText, setSearchText] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeSearchText(''));
  }, [dispatch]);

  const handleSubmit = (e) => {
    if (searchText.length > 0) {
      dispatch(changeSearchText(searchText));
      setSearchText('');
    }
    else {
      e.preventDefault();
    }
  };

  return (
    <form action='' className={styles.root}>
      <div className={styles.category}>
        <ul className={styles.selectCategoryList}>
          <li>select a category</li>
          <ul className={styles.categoriesList}>
            <li>category 1</li>
            <li>category 2</li>
            <li>category 3</li>
            <li>category 4</li>
            <li>category 5</li>
          </ul>
        </ul>
      </div>
      <div className={styles.searchField}>
        <input placeholder='Search products...' type='text' value={searchText} onChange={e => setSearchText(e.target.value)} />
        <Link to='/search' onClick={e => handleSubmit(e)}>
          <button>
            <FontAwesomeIcon className={styles.icon} icon={faSearch} />
          </button>
        </Link>
      </div>
    </form>
  );
};

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
