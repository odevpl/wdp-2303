import React, { useState } from 'react';
import styles from './FilterByColor.module.scss';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../../../redux/filterRedux';

const FilterByColor = () => {
  const dispatch = useDispatch();
  const [activeColor, setActiveColor] = useState(null);

  const colorsArray = ['red', 'black', 'yellow', 'blue', 'pink', 'green'];

  const handleClick = color => {
    setActiveColor(color);
    dispatch(updateFilter({ name: 'colorFilter', value: color }));
  };

  return (
    <>
      <div className='container'>
        <div className={styles.root}>
          <div>
            <h5>Filter by Color</h5>
            <ul>
              {colorsArray.map(color => (
                <li
                  key={color}
                  className={`d-flex align-items-center + ${activeColor === color &&
                    styles.active}`}
                  onClick={() => handleClick(color)}
                >
                  <span className={styles[color]}></span>
                  <h4>{color}</h4>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterByColor;
