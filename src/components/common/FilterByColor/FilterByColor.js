import React from 'react';
import styles from './FilterByColor.module.scss';

const FilterByColor = () => {
  return (
    <>
      <div className='container'>
        <div className={styles.root}>
          <div>
            <h5>Filter by Color</h5>
            <ul>
              <li className={'d-flex align-items-center ' + styles.active}>
                <span className={styles.red}></span>
                <h4>Red</h4>
              </li>
              <li className={'d-flex align-items-center'}>
                <span className={styles.black}></span>
                <h4>Black</h4>
              </li>
              <li className={'d-flex align-items-center'}>
                <span className={styles.yellow}></span>
                <h4>Yellow</h4>
              </li>
              <li className={'d-flex align-items-center'}>
                <span className={styles.blue}></span>
                <h4>Blue</h4>
              </li>
              <li className={'d-flex align-items-center'}>
                <span className={styles.pink}></span>
                <h4>Pink</h4>
              </li>
              <li className={'d-flex align-items-center'}>
                <span className={styles.green}></span>
                <h4>Green</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterByColor;
