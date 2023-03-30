import React from 'react';
import styles from './FilterByPrice.module.scss';
import ReactSlider from 'react-slider';
import Button from '../Button/Button';
import clsx from 'clsx';

const FilterByPrice = () => {
  return (
    <>
      <div className='container'>
        <div className={styles.root}>
          <div className={styles.title}>
            <h5>Filter by price</h5>
          </div>
          <div className={clsx('row', styles.range)}>
            <ReactSlider
              className={styles.horizontalSlider}
              thumbClassName={styles.thumb}
              trackClassName={styles.track}
              defaultValue={[0, 150]}
              max={200}
              min={0}
              pearling
              minDistance={10}
            />
          </div>
          <div className={clsx('row p-3', styles.confirm)}>
            <Button variant='main' className={clsx('col-4 p-1', styles.button)}>
              Filter
            </Button>
            <div className={clsx('col-5 p-0', styles.rangeDisplay)}>
              <p>$0 - $200</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterByPrice;
