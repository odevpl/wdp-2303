import React, { useState } from 'react';
import styles from './FilterByCategory.module.scss';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../../../redux/filterRedux';
import { getAll } from '../../../redux/categoriesRedux';
import { useSelector } from 'react-redux';

const FilterByCategory = () => {
  const dispatch = useDispatch();
  const [activeCategory, setActiveCategory] = useState(null);

  const categoryArray = useSelector(state => getAll(state));

  const handleClick = category => {
    setActiveCategory(category);
    dispatch(updateFilter({ name: 'categoryFilter', value: category }));
  };
  return (
    <>
      <div className='container'>
        <div className={styles.root}>
          <div>
            <h5>Filter by categories</h5>
            <ul>
              {categoryArray.map(category => (
                <li
                  key={category.name}
                  className={`d-flex align-items-center + ${activeCategory ===
                    category.name && styles.active}`}
                  onClick={() => handleClick(category.name)}
                >
                  <FontAwesomeIcon icon={faAngleRight} />
                  <h4>{category.name}</h4>
                  <span className={styles.number}>3</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterByCategory;
