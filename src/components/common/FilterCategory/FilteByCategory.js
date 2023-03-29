import React from 'react';
import styles from './FilterByCategory.module.scss';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FilterByCategory = () => {
  return (
    <>
      <div className='container'>
        <div className={styles.root}>
          <div>
            <h5>Filter by categories</h5>
            <ul>
              <li className={'d-flex align-items-center ' + styles.active}>
                <FontAwesomeIcon icon={faAngleRight} />
                <h4>Furniture</h4>
                <span className={styles.number}>3</span>
              </li>
              <li className={'d-flex align-items-center'}>
                <FontAwesomeIcon icon={faAngleRight} />
                <h4>Sofa</h4>
                <span className={styles.number}>3</span>
              </li>
              <li className={'d-flex align-items-center'}>
                <FontAwesomeIcon icon={faAngleRight} />
                <h4>Chair</h4>
                <span className={styles.number}>3</span>
              </li>
              <li className={'d-flex align-items-center'}>
                <FontAwesomeIcon icon={faAngleRight} />
                <h4>Table</h4>
                <span className={styles.number}>3</span>
              </li>
              <li className={'d-flex align-items-center'}>
                <FontAwesomeIcon icon={faAngleRight} />
                <h4>Bedroom</h4>
                <span className={styles.number}>3</span>
              </li>
              <li className={'d-flex align-items-center'}>
                <FontAwesomeIcon icon={faAngleRight} />
                <h4>Furniture</h4>
                <span className={styles.number}>3</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterByCategory;
