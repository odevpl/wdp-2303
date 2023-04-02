import React, { useState } from 'react';
import styles from './FilterByPrice.module.scss';
import ReactSlider from 'react-slider';
import Button from '../Button/Button';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../../../redux/filterRedux';

const FilterByPrice = () => {
  const dispatch = useDispatch();
  const [actualPrice, setActualPrice] = useState([0, 200]);
  const handleClick = e => {
    e.preventDefault();
    dispatch(updateFilter({ name: 'priceFilter', value: actualPrice }));
  };

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
              defaultValue={[0, 200]}
              max={200}
              min={0}
              pearling
              minDistance={2}
              onChange={value => setActualPrice(value)}
            />
          </div>
          <div className={clsx('row p-3', styles.confirm)}>
            <Button
              variant='main'
              className={clsx('col-4 p-1', styles.button)}
              onClick={handleClick}
            >
              Filter
            </Button>
            <div className={clsx('col-5 p-0', styles.rangeDisplay)}>
              <p>
                ${actualPrice[0]} - ${actualPrice[1]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterByPrice;
