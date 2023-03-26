import React from 'react';
import { useSelector } from 'react-redux';
import { getHotDeals } from '../../../redux/productsRedux';
import styles from './Featured.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import StarsReview from '../../common/StarsReview/StarsReview';

import {
  faShoppingBasket,
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import ActionButton from '../../common/ActionButton/ActionButton';

const Featured = () => {
  const hotDeals = useSelector(getHotDeals);
  const hotDeal = hotDeals[0];

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
              <h4 className='m-0 p-3'>HOT DEALS</h4>
              <div className={clsx(styles.icons, 'm-2')}>
                <FontAwesomeIcon
                  className={clsx(styles.icon, 'me-1')}
                  icon={faCircle}
                />
                <FontAwesomeIcon
                  className={clsx(styles.icon, 'me-1')}
                  icon={faCircle}
                />
                <FontAwesomeIcon
                  className={clsx(styles.icon, 'me-1')}
                  icon={faCircle}
                />
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
                      className={`${styles.iconTimer} me-1`}
                      icon={faCircle}
                    />
                    <p>
                      25
                      <br />
                      DAYS
                    </p>
                  </li>
                  <li className='col'>
                    <FontAwesomeIcon
                      className={`${styles.iconTimer} me-1`}
                      icon={faCircle}
                    />
                    <p>
                      10<br></br>HRS
                    </p>
                  </li>
                  <li className='col'>
                    <FontAwesomeIcon
                      className={`${styles.iconTimer} me-1`}
                      icon={faCircle}
                    />
                    <p>
                      45<br></br>MIN
                    </p>
                  </li>
                  <li className='col'>
                    <FontAwesomeIcon
                      className={`${styles.iconTimer} me-1`}
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
                <StarsReview
                  id={hotDeal.id}
                  stars={hotDeal.stars}
                  myStars={hotDeal.myStars}
                  name={hotDeal.name}
                />
              </div>
              <div className={styles.line}></div>
              <div className={styles.actions}>
                <div className={styles.outlines}>
                  <ActionButton
                    id={hotDeal.id}
                    favourite={hotDeal.favourite}
                    buttonType={'favourite'}
                  />
                  <ActionButton
                    id={hotDeal.id}
                    compare={hotDeal.compare}
                    buttonType={'compare'}
                  />
                  <ActionButton id={hotDeal.id} buttonType={'quickView'} />
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
                <div className={`${styles.heading} col-12`}>
                  <div className={styles.text}>
                    <h2>Indoor furniture</h2>
                    <h3>Save up to 50% of all furnitures</h3>
                  </div>
                </div>
                <Button className={styles.shopNow}>Shop now</Button>
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
