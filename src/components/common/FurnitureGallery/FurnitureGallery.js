import React from 'react';
import styles from './FurnitureGallery.module.scss';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingBasket,
  faExchangeAlt,
  faHeart,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import {
  getFeaturedProducts,
  toggleProductFavourite,
  toggleProductCompare,
  getProductsToCompare,
} from '../../../redux/productsRedux';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';
import StarsReview from '../StarsReview/StarsReview';

const FurnitureGallery = () => {
  const dispatch = useDispatch();
  const headlines = ['Featured', 'Top Seller', 'Sale Off', 'Top Rated'];
  const [activeHeadline, setActiveHeadline] = useState('Featured');
  const handleHeadlineChange = headline => setActiveHeadline(headline);
  const productsToDisplay = useSelector(state => getFeaturedProducts(state)); //zrobione przykładowo, zeby komponent zaciagal dane z reduxa,
  //przy pisalniu funkcjonalnosci konieczne dodanie koejnych 3 funkcji w ProductRedux + dodanie funkcji określającej z którego headlinu pobrać produkty
  const testProduct = productsToDisplay[0]; //na potrzeby stylowania - do zmiany przy dodwaaniu funkcjonalnosci

  const handleFavouriteClick = e => {
    e.preventDefault();
    dispatch(toggleProductFavourite(testProduct.id));
  };

  const compareList = useSelector(state => getProductsToCompare(state));
  const handleCompareClick = e => {
    e.preventDefault();
    const checkIfItemIsCompared = compareList.find(item => item.id === testProduct.id);
    if (compareList.length < 4 || !!checkIfItemIsCompared) {
      dispatch(toggleProductCompare(testProduct.id));
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.panelBar}>
        <div className='row no-gutters align-items-end'>
          <div className={'col ' + styles.heading}>
            <h3>Furniture Gallery</h3>
          </div>
        </div>
      </div>
      <div className={styles.menu}>
        <ul>
          {headlines.map(headline => (
            <li key={headline}>
              <a
                className={headline === activeHeadline && styles.active}
                onClick={() => handleHeadlineChange(headline)}
              >
                {headline}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.photo}>
        <img
          alt='Aenean Ru Bristique 14'
          src='/images/furniture/chair/aenean-ru-bristique-14.jpg'
        />
        <div className={styles.productInfo}>
          <div className={styles.price}>
            <p className={styles.newPrice}>${testProduct.price}</p>
            <p className={styles.oldPrice}>${testProduct.oldPrice}</p>
          </div>
          <div className={styles.backgroundContent}>
            <div className={styles.content}>
              <h5>{testProduct.name}</h5>
              <StarsReview
                id={testProduct.id}
                stars={testProduct.stars}
                myStars={testProduct.myStars}
                name={testProduct.name}
              />
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <Button
            variant='outline'
            className={clsx(
              styles.button,
              testProduct.favourite ? styles.active : null
            )}
            onClick={handleFavouriteClick}
            data-tooltip='Favourite'
          >
            <FontAwesomeIcon icon={testProduct.favourite ? faHeart : farHeart}>
              Favorite
            </FontAwesomeIcon>
          </Button>
          <Button
            variant='outline'
            className={clsx(styles.button, testProduct.compare ? styles.active : null)}
            onClick={handleCompareClick}
            data-tooltip='Compare'
          >
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
          <Button variant='outline' className={styles.button} data-tooltip='Quick View'>
            <FontAwesomeIcon icon={faEye}>Quick view</FontAwesomeIcon>
          </Button>
          <Button
            variant='outline'
            className={styles.button}
            data-tooltip='Add to cart'
          >
            <FontAwesomeIcon icon={faShoppingBasket}>Add To Cart</FontAwesomeIcon>
          </Button>
        </div>
      </div>
      <div>
        <div className={styles.slider}>
          <div className={styles.thumbnailContainer}>
            <Button className={styles.arrowButton}>&#60;</Button>
            {productsToDisplay.map(product => (
              <div key={product.name} className={styles.thumbnail}>
                <img
                  alt={product.name}
                  src={`${process.env.PUBLIC_URL}/images/furniture/${product.category}/${product.id}.jpg`}
                  className={product.id === testProduct.id ? styles.active : null}
                />
              </div>
            ))}
            <Button className={styles.arrowButton}>&#62;</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FurnitureGallery;
