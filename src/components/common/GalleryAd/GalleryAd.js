import React from 'react';
import styles from './GalleryAd.module.scss';
import Button from '../Button/Button';

const GalleryAd = () => (
  <div className={styles.root}>
    <div className={styles.photo}>
      <img
        alt='Aenean Ru Bristique 20'
        src='/images/furniture/chair/aenean-ru-bristique-20.jpg'
      />
    </div>
    <div className={styles.promoText}>
      <p className={styles.text}>
        From <span className={styles.price}>$100.00</span>
      </p>
      <p className={styles.title}>Dining Chair</p>
      <Button variant='main' className={styles.button}>
        Shop Now
      </Button>
    </div>
  </div>
);

export default GalleryAd;
