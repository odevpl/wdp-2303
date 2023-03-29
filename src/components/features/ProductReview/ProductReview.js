import React from 'react';
import styles from './ProductReview.module.scss';
import StarsReview from '../../common/StarsReview/StarsReview';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const ProductReview = props => {
  const { id, stars, myStars, name } = props;

  return (
    <div className={styles.root}>
      <div className={'container ' + styles.container}>
        <div className={styles.box}>
          <div className={'row ' + styles.menu}>
            <div className={'col-2 ' + styles.menuText}>
              <p>description</p>
            </div>
            <div className={clsx('col-2 ' + styles.menuText, styles.active)}>
              <p>reviews(0)</p>
            </div>
            <div className={'col-2 ' + styles.menuText}>
              <p>specification</p>
            </div>
            <div className={'col-2 ' + styles.menuText}>
              <p>custom tab</p>
            </div>
          </div>
          <div className={styles.review}>
            <p className={styles.opinion}>There are no reviews for this product.</p>
            <h3>Add a review</h3>
            <div className={styles.reviewBox}>
              <p>Your rating</p>
              <div className={'row ' + styles.ratingBox}>
                <p className={'col-1 ' + styles.rate}>Bad</p>
                <div className={'col-2 ' + styles.rateStars}>
                  <StarsReview id={id} stars={stars} myStars={myStars} name={name} />
                </div>
                <p className={'col-1 ' + styles.rate}>Good</p>
              </div>
              <form className={'row ' + styles.form}>
                <p>Your review</p>
                <textarea
                  className={'col-12 form-control mb-3 ' + styles.textarea}
                  rows='3'
                  type='text'
                ></textarea>
                <div className={'col-5 ' + styles.input}>
                  <input
                    className='form control'
                    type='text'
                    placeholder='Name*'
                  ></input>
                </div>
                <div className={'col-5 ' + styles.input}>
                  <input
                    className='form control'
                    type='text'
                    placeholder='Email*'
                  ></input>
                </div>
                <button className={'col-2 ' + styles.button} type='submit'>
                  Continue
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductReview.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  stars: PropTypes.number,
  myStars: PropTypes.number,
};

export default ProductReview;
