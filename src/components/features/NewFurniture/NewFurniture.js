import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import CompareBar from '../../common/CompareBar/CompareBar';
import Swipeable from '../../common/Swipeable/Swipeable';
import { useParams } from 'react-router';

const NewFurniture = ({ categories, products, viewportMode }) => {
  const [activePage, setActivePage] = useState(0);
  const [activeCategory, setActiveCategory] = useState('bed');
  const [fade, setFade] = useState(true);

  const pageAddress = useParams();
  
  const handlePageChange = newPage => {
    setFade(false);
    setTimeout(() => {
      setActivePage(newPage);
      setFade(true);
    }, 400);
  };

  const handleCategoryChange = newCategory => {
    setFade(false);
    setTimeout(() => {
      setActiveCategory(newCategory);
      setFade(true);
    }, 600);
  };

  const rows = viewportMode === 'mobile' ? 1 : viewportMode === 'tablet' ? 2 : 8;
  useEffect(() => handlePageChange(0), [viewportMode]);

  const leftAction = () => {
    if (activePage > 0) {
      let page = activePage - 1;
      handlePageChange(page);
    }
  };
  const rightAction = () => {
    let page = activePage + 1;
    if (page < dots.length) handlePageChange(page);
  };

  
  let categoryProducts = products.filter(item => item.category === activeCategory);
  let pagesCount = Math.ceil(categoryProducts.length / rows);

  if (pageAddress.productId) {
    categoryProducts = categoryProducts.filter((item, index) => index < 4 );
    pagesCount = 0;
  }

  const dots = [];
  for (let i = 0; i < pagesCount; i++) {
    dots.push(
      <li key={i}>
        <a
          onClick={() => handlePageChange(i)}
          className={i === activePage && styles.active}
        >
          page {i}
        </a>
      </li>
    );
  }

  return (
    <div className={styles.root}>
      <Swipeable leftAction={leftAction} rightAction={rightAction}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row g-0 align-items-end'>
              <div className={'col-md-auto col-12 mb-3 mb-md-0 ' + styles.heading}>
                <h3>New furniture</h3>
              </div>
              <div className={'col-md col-12 ' + styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <a
                        className={item.id === activeCategory && styles.active}
                        onClick={() => handleCategoryChange(item.id)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={'col-lg-auto col-12 text-center ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <div className={`row + ${fade ? styles.fadeIn : styles.fadeOut}`}>
            {categoryProducts
              .slice(activePage * rows, (activePage + 1) * rows)
              .map(item => (
                <div key={item.id} className='col-lg-3 col-md-6 col-12'>
                  <ProductBox {...item} />
                </div>
              ))}
          </div>
        </div>
      </Swipeable>
      <CompareBar />
    </div>
  );
};

NewFurniture.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
  viewportMode: PropTypes.string,
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
