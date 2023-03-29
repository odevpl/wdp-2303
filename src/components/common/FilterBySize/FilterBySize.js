import React from 'react';
import styles from './FilterBySize.module.scss';

const FilterBySize = () => {
  return (
    <>
      <div className='container'>
        <div className={styles.root}>
          <div>
            <h5>Filter by sizes</h5>
            <ul>
              <li className={'d-flex align-items-center ' + styles.active}>
                <label>
                  <input className={styles.active} type='checkbox' />
                </label>
                <h4>S</h4>
                <span className={styles.number}>1</span>
              </li>
              <li className={'d-flex align-items-center'}>
                <label>
                  <input className={styles.active} type='checkbox' />
                </label>
                <h4>M</h4>
                <span className={styles.number}>4</span>
              </li>
              <li className={'d-flex align-items-center'}>
                <label>
                  <input className={styles.active} type='checkbox' />
                </label>
                <h4>L</h4>
                <span className={styles.number}>3</span>
              </li>
              <li className={'d-flex align-items-center'}>
                <label>
                  <input className={styles.active} type='checkbox' />
                </label>
                <h4>XL</h4>
                <span className={styles.number}>3</span>
              </li>
              <li className={'d-flex align-items-center'}>
                <label>
                  <input className={styles.active} type='checkbox' />
                </label>
                <h4>XXL</h4>
                <span className={styles.number}>3</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterBySize;
