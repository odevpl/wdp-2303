import React, { useState } from 'react';
import styles from './FilterBySize.module.scss';
import { useDispatch } from 'react-redux';
import { removeFilter, updateFilter } from '../../../redux/filterRedux';

const FilterBySize = () => {
  const dispatch = useDispatch();
  const [activeSize, setActiveSize] = useState([]);

  const sizeArray = ['s', 'm', 'l', 'xl', 'xxl'];

  const handleClick = size => {
    let newSize = [...activeSize];
    if (newSize.includes(size)) {
      newSize = newSize.filter(item => item !== size);
      setActiveSize(newSize);
    } else {
      newSize.push(size);
      setActiveSize(newSize);
    }
    if (newSize.length > 0) {
      dispatch(updateFilter({ name: 'sizeFilter', value: newSize }));
    } else {
      dispatch(removeFilter({ name: 'sizeFilter' }));
    }
  };

  return (
    <>
      <div className='container'>
        <div className={styles.root}>
          <div>
            <h5>Filter by sizes</h5>
            <ul>
              {sizeArray.map(size => (
                <li
                  key={size}
                  className={`d-flex align-items-center + ${activeSize.includes(size) &&
                    styles.active}`}
                >
                  <label>
                    <input
                      className={styles.active}
                      type='checkbox'
                      onClick={() => handleClick(size)}
                    />
                  </label>
                  <h4>{size}</h4>
                  <span className={styles.number}>1</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterBySize;
