import React from 'react';
import styles from './FurnitureGallery.module.scss';
import { useState } from 'react';
import {
  getFeaturedProducts,
  getSaleOffProducts,
  getTopRatedProducts,
  getTopSellerProducts,
} from '../../../redux/productsRedux';
import { useSelector } from 'react-redux';
import StarsReview from '../StarsReview/StarsReview';
import ActionButton from '../ActionButton/ActionButton';
import { useEffect } from 'react';
import { getViewportMode } from '../../../redux/viewportModeRedux';
import { Link } from 'react-router-dom';
import Swipeable from '../Swipeable/Swipeable';
import { getCurrency } from '../../../redux/currencyRedux';

const FurnitureGallery = () => {
  const headlines = ['Featured', 'Top Seller', 'Sale Off', 'Top Rated'];
  const [fadeImage, setFadeImage] = useState(true);
  const [fadeSlider, setFadeSlider] = useState(true);
  const [activeHeadline, setActiveHeadline] = useState('Featured');
  const [activePage, setActivePage] = useState(0);
  const viewportMode = useSelector(viewportMode => getViewportMode(viewportMode));
  const currency = useSelector(getCurrency);
  const productsToDisplay = useSelector(state => {
    switch (activeHeadline) {
      case 'Featured':
        return getFeaturedProducts(state);
      case 'Sale Off':
        return getSaleOffProducts(state);
      case 'Top Seller':
        return getTopSellerProducts(state);
      case 'Top Rated':
        return getTopRatedProducts(state);
      default:
        return [];
    }
  });
  const [activeProduct, setActiveProduct] = useState(productsToDisplay[0]);
  const [activeThumbnail, setActiveThumbnail] = useState(productsToDisplay[0]);
  const handleHeadlineChange = headline => {
    setFadeImage(false);
    setFadeSlider(false);
    setTimeout(() => {
      handlePageChange(0);
      setActiveHeadline(headline);
      setActiveProduct(productsToDisplay[0]);
      setFadeImage(true);
      setFadeSlider(true);
    }, 400);
  };
  const columns = viewportMode === 'mobile' ? 4 : viewportMode === 'tablet' ? 3 : 6;
  const pagesCount = Math.ceil(productsToDisplay.length / columns);

  const handlePageChange = newPage => {
    setFadeSlider(false);
    setTimeout(() => {
      setFadeSlider(true);
      setActivePage(newPage);
    }, 400);
  };
  const handleProductChange = product => {
    setFadeImage(false);
    setActiveThumbnail(product);
    setTimeout(() => {
      setFadeImage(true);
      setActiveProduct(product);
    }, 400);
  };

  const leftAction = () => {
    handlePageChange(activePage === 0 ? pagesCount - 1 : activePage - 1);
  };
  const rightAction = () => {
    handlePageChange(activePage + 1 >= pagesCount ? 0 : activePage + 1);
  };

  useEffect(() => handlePageChange(0), [viewportMode]);
  useEffect(() => {
    setActiveProduct(productsToDisplay[0]);
    setActiveThumbnail(productsToDisplay[0]);
  }, [activeHeadline, productsToDisplay]);
  return (
    <div className={styles.root}>
      <div className={styles.panelBar}>
        <div className='row g-0'>
          <div className={'col ' + styles.heading}>
            <h3>Furniture Gallery</h3>
          </div>
        </div>
      </div>
      <div className={styles.galleryWrapper}>
        <ul className={'row g-0 ' + styles.menu}>
          {headlines.map(headline => (
            <li className='col' key={headline}>
              <a
                className={headline === activeHeadline && styles.active}
                onClick={() => handleHeadlineChange(headline)}
              >
                {headline}
              </a>
            </li>
          ))}
        </ul>
        <Link
          className={`row g-0 align-items-center ' + ${styles.photo} + ${fadeImage ? styles.fadeIn : styles.fadeOut
            }`}
          to={'/product/' + activeProduct.id}
        >
          <img alt={activeProduct.name} src={activeProduct.source} />
          <div className={styles.productInfo}>
            <div className={styles.backgroundContent}>
              <div className={styles.price}>
                <p className={styles.newPrice}>{currency.sign}{(activeProduct.price * currency.multiplier).toFixed(2)}</p>
                <p className={styles.oldPrice}>{currency.sign}{(activeProduct.oldPrice * currency.multiplier).toFixed(2)}</p>
              </div>
              <div className={styles.content}>
                <h5>{activeProduct.name}</h5>
                <StarsReview
                  id={activeProduct.id}
                  stars={activeProduct.stars}
                  myStars={activeProduct.myStars}
                  name={activeProduct.name}
                />
              </div>
            </div>
          </div>
          <div className={styles.buttons}>
            <ActionButton
              id={activeProduct.id}
              favourite={activeProduct.favourite}
              buttonType={'favourite'}
              dataTooltip='Favourite'
            />
            <ActionButton
              id={activeProduct.id}
              compare={activeProduct.compare}
              buttonType={'compare'}
              dataTooltip='Compare'
            />
            <ActionButton
              id={activeProduct.id}
              buttonType={'quickView'}
              dataTooltip='Quick View'
            />
            <ActionButton
              id={activeProduct.id}
              buttonType={'addToCart'}
              dataTooltip='Add to cart'
              name={activeProduct.name}
              price={activeProduct.price}
              source={activeProduct.source}
            />
          </div>
        </Link>
        <Swipeable leftAction={leftAction} rightAction={rightAction}>
          <div className={`row g-0 m-2 justify-content-between + ${styles.slider}`}>
            <a
              className={'col-1 ' + styles.arrowButton}
              onClick={() =>
                handlePageChange(activePage === 0 ? pagesCount - 1 : activePage - 1)
              }
            >
              &#60;
            </a>
            <div
              className={`col mx-3 + ${fadeSlider ? styles.fadeIn : styles.fadeOut}`}
            >
              <div className={'row'}>
                {productsToDisplay
                  .slice(activePage * columns, (activePage + 1) * columns)
                  .map(product => (
                    <div
                      key={product.name}
                      className={'col-lg-2 col-md-4 col-3 px-1 ' + styles.thumbnail}
                      onClick={() => handleProductChange(product)}
                    >
                      <img
                        alt={product.name}
                        src={`${process.env.PUBLIC_URL}/images/furniture/${product.category}/${product.id}.jpg`}
                        className={
                          product.id === activeThumbnail.id ? styles.active : null
                        }
                      />
                    </div>
                  ))}
              </div>
            </div>
            <a
              className={'col-1 ' + styles.arrowButton}
              onClick={() =>
                handlePageChange(activePage + 1 >= pagesCount ? 0 : activePage + 1)
              }
            >
              <span>&#62;</span>
            </a>
          </div>
        </Swipeable>
      </div>
    </div>
  );
};
export default FurnitureGallery;
