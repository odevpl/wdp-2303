import React from 'react';
import styles from './Gallery.module.scss';
import FurnitureGallery from '../../common/FurnitureGallery/FurnitureGallery';
import GalleryAd from '../../common/GalleryAd/GalleryAd';

const Gallery = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6 col-12 mt-3'>
          <FurnitureGallery />
        </div>
        <div className='col-lg-6 col-12 mt-3'>
          <GalleryAd />
        </div>
      </div>
    </div>
  </div>
);

export default Gallery;
