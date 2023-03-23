import React from 'react';
import { useSelector } from 'react-redux';
import { getHotDeals} from '../../../redux/productsRedux';
import styles from './Featured.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { toggleProductFavourite } from '../../../redux/productsRedux';
import clsx from 'clsx';

import {
  faHeart,
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import {
  faStar as farStar,
  faHeart as farHeart,
} from '@fortawesome/free-regular-svg-icons';
import Button from '../../common/Button/Button';

const Featured = () => {
  const hotDeals = useSelector(getHotDeals);
  const hotDeal = hotDeals[0];
  const dispatch = useDispatch();

  const handleClick = e => {
    e.preventDefault();
    dispatch(toggleProductFavourite(hotDeal.id));
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <div
              className='col 
            bg-dark 
            text-white 
            d-flex 
            align-items-center
            justify-content-between'
            >
              <h4 className='m-0 py-3'>HOT DEALS</h4>
              <div className={styles.icons}>
                <FontAwesomeIcon className={`${styles.icon} mr-1`} icon={faCircle} />
                <FontAwesomeIcon className={`${styles.icon} mr-1`} icon={faCircle} />
                <FontAwesomeIcon className={`${styles.icon} mr-1`} icon={faCircle} />
              </div>
            </div>

            <div className={styles.productBox}>
              <div className={styles.photo}>
                <div className={styles.image}>
                  <img
                    alt={hotDeal.name}
                    src={`${process.env.PUBLIC_URL}/images/furniture/${hotDeal.category}/${hotDeal.id}.jpg`}
                  />
                </div>

                <div className={styles.button}>
                  <Button variant='small'>
                    <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO
                    CART
                  </Button>
                </div>
                <div className={`${styles.timer} row`}>
                  <li className='col'>
                    <FontAwesomeIcon
                      className={`${styles.iconTimer} mr-1`}
                      icon={faCircle}
                    />
                    <p>
                      25<br></br>DAYS
                    </p>
                  </li>
                  <li className='col'>
                    <FontAwesomeIcon
                      className={`${styles.iconTimer} mr-1`}
                      icon={faCircle}
                    />
                    <p>
                      10<br></br>HRS
                    </p>
                  </li>
                  <li className='col'>
                    <FontAwesomeIcon
                      className={`${styles.iconTimer} mr-1`}
                      icon={faCircle}
                    />
                    <p>
                      45<br></br>MIN
                    </p>
                  </li>
                  <li className='col'>
                    <FontAwesomeIcon
                      className={`${styles.iconTimer} mr-1`}
                      icon={faCircle}
                    />
                    <p>
                      30<br></br>SEC
                    </p>
                  </li>
                </div>
              </div>
              <div className={styles.content}>
                <h5>{hotDeal.name}</h5>
                <div className={styles.stars}>
                  {[1, 2, 3, 4, 5].map(i => (
                    <a key={i} href='#'>
                      {i <= hotDeal.stars ? (
                        <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                      ) : (
                        <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
                      )}
                    </a>
                  ))}
                </div>
              </div>
              <div className={styles.line}></div>
              <div className={styles.actions}>
                <div className={styles.outlines}>
                  <Button
                    variant='outline'
                    className={hotDeal.compare ? styles.active : null}
                  >
                    <FontAwesomeIcon icon={faEye} />
                  </Button>
                  <Button
                    variant='outline'
                    onClick={handleClick}
                    className={clsx(
                      styles.buttonActive,
                      hotDeal.favourite ? styles.active : null
                    )}
                  >
                    <FontAwesomeIcon icon={hotDeal.favourite ? faHeart : farHeart}>
                      Favorite
                    </FontAwesomeIcon>
                  </Button>
                  <Button
                    variant='outline'
                    className={hotDeal.compare ? styles.active : null}
                  >
                    <FontAwesomeIcon icon={faExchangeAlt}>
                      Add to compare
                    </FontAwesomeIcon>
                  </Button>
                </div>
                <div className={styles.prices}>
                  {hotDeal.oldPrice && (
                    <div className={styles.oldPrice}>$ {hotDeal.oldPrice}</div>
                  )}
                  <div className={styles.price}>
                    <Button variant='small'>$ {hotDeal.price}</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-8'>
            <div className={styles.hotProduct}>
              <div className={styles.photoProduct}>
                <img
                  className={styles.imageProduct}
                  alt={hotDeals[1].name}
                  src={`${process.env.PUBLIC_URL}/images/furniture/${hotDeals[1].category}/${hotDeals[1].id}.jpg`}
                ></img>
                <div className={`${styles.heading} col`}>
                  <div className={styles.text}>
                    <h2>INDOOR FURNITURE</h2>
                    <h3>SAVE UP TO 50% OF ALL FURNITURE</h3>
                  </div>
                </div>
                <button className={styles.shopNow}>SHOP NOW</button>
                <div className={`${styles.slider} row`}>
                  <button className={`${styles.arrow} col-6 text-center p-0`}>
                    <FontAwesomeIcon className='text-white' icon={faChevronLeft} />
                  </button>
                  <button className={`${styles.arrow} col-6 text-center p-0`}>
                    <FontAwesomeIcon className='text-white' icon={faChevronRight} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
