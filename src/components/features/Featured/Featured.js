import React, { useState } from 'react';
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
import Carousel from 'react-bootstrap/Carousel';

const Featured = () => {
  const [slideInterval, setSlideInterval] = useState(3000);
  const [hotDealIndex, setHotDealIndex] = useState(0);
  const [hotProductIndex, setHotProductIndex] = useState(0);
  //const [fade, setFade] = useState(true)
  const hotDeals = useSelector(getHotDeals).slice(0, 3); // max 3 elementy ustawia obecnie

  const handleSelect = selectedIndex => {
    setHotDealIndex(selectedIndex);
  };

  const onClickHandlerHotDeals = index => {
    setHotDealIndex(index);
    setSlideInterval(7000);
    setTimeout(() => {
      setSlideInterval(3000);
    }, 7000);
  };

  const onClickHandlerHotProduct = type => {
    if (type === 'prev') {
      if (hotProductIndex === 0) {
        setHotProductIndex(hotDeals.length - 1);
      } else setHotProductIndex(hotProductIndex - 1);
    }
    if (type === 'next') {
      if (hotProductIndex === hotDeals.length - 1) {
        setHotProductIndex(0);
      } else setHotProductIndex(hotProductIndex + 1);
    }
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
              <h4 className='m-0 p-3'>HOT DEALS</h4>
              <div className={clsx(styles.icons, 'm-2')}>
                {hotDeals.map((hotDeal, i) => (
                  <FontAwesomeIcon
                    key={i}
                    className={clsx(
                      styles.icon,
                      'me-1',
                      hotDealIndex === i ? styles.active : null
                    )}
                    icon={faCircle}
                    onClick={() => onClickHandlerHotDeals(i)}
                  />
                ))}
              </div>
            </div>

            <div className={styles.productBox}>
              <Carousel
                activeIndex={hotDealIndex}
                onSelect={handleSelect}
                interval={slideInterval}
                pause={false}
                controls={false}
                fade={true}
                indicators={false}
              >
                {hotDeals.map(hotDeal => (
                  <Carousel.Item key={hotDeal.name}>
                    <div className={styles.photo}>
                      <div className={styles.image}>
                        <img
                          alt={hotDeal.name}
                          src={`${process.env.PUBLIC_URL}/images/furniture/${hotDeal.category}/${hotDeal.id}.jpg`}
                        />
                      </div>
                      <div className={styles.button}>
                        <Button variant='small'>
                          <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>{' '}
                          ADD TO CART
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
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>

          <div className='col-8'>
            <div className={styles.hotProduct}>
              <div className={clsx(styles.photoProduct)}>
                <div className={clsx(styles.carousel, 'col-12')}>
                  <Carousel
                    activeIndex={hotProductIndex}
                    interval={null}
                    pause={false}
                    controls={false}
                    indicators={false}
                    fade={true}
                  >
                    {hotDeals.map(hotDeal => (
                      <Carousel.Item key={hotDeal.name} className={styles.carouselItem}>
                        <div className={styles.image}>
                          <img
                            alt={hotDeal.name}
                            src={`${process.env.PUBLIC_URL}/images/furniture/${hotDeal.category}/${hotDeal.id}.jpg`}
                          />
                        </div>
                        <div className={`${styles.heading} col-12`}>
                          <div className={styles.text}>
                            <h2>Indoor furniture</h2>
                            <h3>Save up to 50% of all furnitures</h3>
                          </div>
                        </div>
                        <Button className={styles.shopNow}>Shop now</Button>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>
                <div className={clsx(styles.slider, 'col-12')}>
                  <button
                    className={`${styles.arrow} col-6 text-center p-0`}
                    onClick={() => onClickHandlerHotProduct('prev')}
                  >
                    <FontAwesomeIcon className='text-white' icon={faChevronLeft} />
                  </button>
                  <button
                    className={`${styles.arrow} col-6 text-center p-0`}
                    onClick={() => onClickHandlerHotProduct('next')}
                  >
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
