import React from 'react';
import { useSelector } from 'react-redux';
import { getPromotion } from '../../../redux/promotionRedux';
import styles from './PromotionBox.module.scss';

const PromotionBox = () => {
  const promo = useSelector(state => getPromotion(state));

  return (
    <div className={`container ${styles.root}`}>
      <div className='row'>
        <div className={`col-md-6 mb-4 ${styles.height}`}>
          <div className={`${styles.box} ${styles.first}`}>
            <div className={styles.shadow}>
              <div className={styles.content}>
                <h4>{promo.firstTitle}</h4>
                <h1>
                  <strong>{promo.firstTitleStrong}</strong>
                </h1>
                <div className={styles.discount}>
                  <h2>{promo.firstDiscountBox}</h2>
                </div>
              </div>
            </div>
            <img src={promo.firstImage} alt={promo.firstAltName}></img>
          </div>
        </div>
        <div className={`col-md-6 mb-4 ${styles.height}`}>
          <div className={`${styles.box} ${styles.second}`}>
            <div className={styles.content}>
              <h5>
                <strong>{promo.secondTitleStrong}</strong> {promo.secondTitle}
              </h5>
              <h6>{promo.secondSubtitle}</h6>
              <h5 className={styles.color}>
                <strong>{promo.secondPrice}</strong>
              </h5>
            </div>
            <img src={promo.secondImage} alt={promo.secondAltName}></img>
          </div>
          <div className={`${styles.box} ${styles.third}`}>
            <div className={styles.content}>
              <h6>
                <strong className={styles.color}>{promo.thirdTitleStrong}</strong>{' '}
                {promo.thirdTitle}
              </h6>
              <p>{promo.thirdSubtitle}</p>
            </div>
            <img src={promo.thirdImage} alt={promo.thirdAltName}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionBox;
