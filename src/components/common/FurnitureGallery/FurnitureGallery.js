import React from 'react';
import styles from './FurnitureGallery.module.scss';
import Button from '../Button/Button';
import { useState } from 'react';
import { getFeaturedProducts } from '../../../redux/productsRedux';
import { useSelector } from 'react-redux';
import StarsReview from '../StarsReview/StarsReview';
import ActionButton from '../ActionButton/ActionButton';
import { useEffect } from 'react';
import { getViewportMode } from '../../../redux/viewportModeRedux';

const FurnitureGallery = () => {
  const [activePage, setActivePage] = useState(0);
  const viewportMode = useSelector(viewportMode => getViewportMode(viewportMode));
  const headlines = ['Featured', 'Top Seller', 'Sale Off', 'Top Rated'];
  const [activeHeadline, setActiveHeadline] = useState('Featured');
  const handleHeadlineChange = headline => setActiveHeadline(headline);
  const productsToDisplay = useSelector(state => getFeaturedProducts(state)); //zrobione przykładowo, zeby komponent zaciagal dane z reduxa,
  console.log(productsToDisplay);
  //przy pisalniu funkcjonalnosci konieczne dodanie koejnych 3 funkcji w ProductRedux + dodanie funkcji określającej z którego headlinu pobrać produkty
  const testProduct = productsToDisplay[0]; //na potrzeby stylowania - do zmiany przy dodwaaniu funkcjonalnosci
  const columns = viewportMode === 'mobile' ? 3 : viewportMode === 'tablet' ? 4 : 6;
  const handlePageChange = newPage => {
    setActivePage(newPage);
  };
  useEffect(() => handlePageChange(0), [viewportMode]);
  return (
    <div className={styles.root}>
      <div className={styles.panelBar}>
        <div className='row g-0 '>
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

        <div className={'row g-0 align-items-center ' + styles.photo}>
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
            <ActionButton
              id={testProduct.id}
              favourite={testProduct.favourite}
              buttonType={'favourite'}
              dataTooltip='Favourite'
            />
            <ActionButton
              id={testProduct.id}
              compare={testProduct.compare}
              buttonType={'compare'}
              dataTooltip='Compare'
            />
            <ActionButton
              id={testProduct.id}
              buttonType={'quickView'}
              dataTooltip='Quick View'
            />
            <ActionButton
              id={testProduct.id}
              buttonType={'addToCart'}
              dataTooltip='Add to cart'
            />
          </div>
        </div>
        <div className={'row g-0 p-2 justify-content-between ' + styles.slider}>
          <Button className={'col-1 ' + styles.arrowButton}>&#60;</Button>
          <div className={'col-10'}>
            <div className={'row'}>
              {productsToDisplay
                .slice(activePage * columns, (activePage + 1) * columns)
                .map(product => (
                  <div key={product.name} className={'col px-1 ' + styles.thumbnail}>
                    <img
                      alt={product.name}
                      src={`${process.env.PUBLIC_URL}/images/furniture/${product.category}/${product.id}.jpg`}
                      className={product.id === testProduct.id ? styles.active : null}
                    />
                  </div>
                ))}
            </div>
          </div>
          <Button className={'col-1 ' + styles.arrowButton}>
            <span>&#62;</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default FurnitureGallery;
