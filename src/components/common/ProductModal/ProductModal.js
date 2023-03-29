import React from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import styles from './ProductModal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faUpRightAndDownLeftFromCenter,
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faMinus,
  faPlus,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  faFacebookF,
  faGooglePlusG,
  faTwitter,
  faPinterestP,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const ProductModal = ({ closeModal, productData }) => {
  return (
    <div className={styles.root}>
      <div className={styles.modalWindow}></div>
      <div className='container'>
        <div className={styles.productModalContainer}>
          <div className={`col-5`}>
            <div className={styles.quitButton}>
              <Button onClick={() => closeModal(false)}>
                <FontAwesomeIcon icon={faXmark} />
              </Button>
            </div>
            <div className={styles.modalData}>
              <div className={styles.mainPhoto}>
                <img
                  className={styles.mainPhoto}
                  alt={productData.name}
                  src={`${process.env.PUBLIC_URL}/images/furniture/${productData.category}/${productData.id}.jpg`}
                />
                <Button className={styles.buttonZoom} variant='outline'>
                  <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
                </Button>
              </div>
              <div className={styles.bottomImagesContainer}>
                <div className={styles.smallImages}>
                  <div className={styles.smallImage}>
                    <img
                      src='/images/furniture/bed/aenean-ru-bristique-2.jpg'
                      alt='bed'
                    />
                  </div>
                  <div className={styles.smallImage}>
                    <img
                      src='/images/furniture/bed/aenean-ru-bristique-3.jpg'
                      alt='bed'
                    />
                  </div>
                  <div className={styles.smallImage}>
                    <img
                      src='/images/furniture/bed/aenean-ru-bristique-4.jpg'
                      alt='bed'
                    />
                  </div>
                  <div className={styles.smallImage}>
                    <img
                      src='/images/furniture/bed/aenean-ru-bristique-5.jpg'
                      alt='bed'
                    />
                  </div>
                </div>
                <div className={styles.buttonsLeftRight}>
                  <Button className={styles.buttonLeft} variant='outline'>
                    <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                  </Button>
                  <Button className={styles.buttonRight} variant='outline'>
                    <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-7`}>
            <div className={styles.productHeader}>
              <div className={styles.title}>
                <h5>{productData.name}</h5>
              </div>
              <div className={styles.arrowButtons}>
                <Button
                  className={`${styles.headerButtonLeft} ${styles.buttonHoverFull}`}
                  variant='outline'
                >
                  <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                </Button>
                <Button
                  className={`${styles.headerButtonRight} ${styles.buttonHoverFull}`}
                  variant='outline'
                >
                  <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                </Button>
              </div>
            </div>
            <div className={styles.productParams}>
              <div className={styles.stars}>
                {[1, 2, 3, 4, 5].map(i => (
                  <a key={i} href='#'>
                    {i <= productData.stars ? (
                      <FontAwesomeIcon icon={faStar} className={styles.star}>
                        {i} stars
                      </FontAwesomeIcon>
                    ) : (
                      <FontAwesomeIcon icon={faStar} className={styles.star}>
                        {i} stars
                      </FontAwesomeIcon>
                    )}
                  </a>
                ))}
              </div>
              <Link className={styles.reviewLink}>(0 reviews)</Link>
              <div className={styles.verticalLine}>&#124;</div>
              <Link className={styles.reviewLink}>Add Your Review</Link>
            </div>
            <div className={styles.line}></div>
            <div className={styles.prices}>
              {productData.oldPrice && (
                <div className={styles.oldPrice}>$ {productData.oldPrice}</div>
              )}
              <div className={styles.price}>$ {productData.price}</div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.aboutProductButtons}>
              <div className={styles.actionButtons}>
                <Button className={styles.addToCartBtn} variant='small'>
                  <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO
                  CART
                </Button>
                <Button
                  className={`${styles.heartBtn} ${styles.buttonHover}`}
                  variant='outline'
                >
                  <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                </Button>
                <Button
                  className={`${styles.toggleBtn} ${styles.buttonHover}`}
                  variant='outline'
                >
                  <FontAwesomeIcon icon={faExchangeAlt}></FontAwesomeIcon>
                </Button>
                <Button
                  className={`${styles.envelopeBtn} ${styles.buttonHover}`}
                  variant='outline'
                >
                  <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                </Button>
              </div>
              <div className={styles.quantityButtons}>
                <div className={styles.quantityText}>Quantity:</div>
                <Button className={styles.quantityBtn} noHover variant='outline'>
                  2
                </Button>
                <Button
                  className={`${styles.minusBtn} ${styles.buttonHover}`}
                  variant='outline'
                >
                  <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                </Button>
                <Button
                  className={`${styles.pluBtn} ${styles.buttonHover}`}
                  variant='outline'
                >
                  <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                </Button>
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.quickOverviewContainer}>
              <h6>Quick Overview</h6>
              <div className={styles.quickOverwiew}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
                tempora molestiae natus consequatur inventore similique quas, vero
                numquam, corporis quod asperiores quae quasi explicabo. Ab eveniet amet
                et veniam quam.
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.sorage}>
              <div className={styles.availability}>
                <div>
                  <strong>Availability:</strong>
                </div>
                <div>in stock</div>
              </div>
              <div className={styles.category}>
                <div>
                  <strong>Category:</strong>
                </div>
                <div>Furniture</div>
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.socialMedia}>
              <Button
                noHover
                className={`${styles.socialMediaBtn} ${styles.facebook}`}
                variant='outline'
              >
                <FontAwesomeIcon
                  className={`${styles.socialMediaIcon} ${styles.facebookIcon}`}
                  icon={faFacebookF}
                ></FontAwesomeIcon>
                Share
              </Button>
              <Button
                noHover
                className={`${styles.socialMediaBtn} ${styles.googlePlus}`}
                variant='outline'
              >
                <FontAwesomeIcon
                  className={`${styles.socialMediaIcon} ${styles.googlePlusIcon}`}
                  icon={faGooglePlusG}
                ></FontAwesomeIcon>
                Google+
              </Button>
              <Button
                noHover
                className={`${styles.socialMediaBtn} ${styles.twitter}`}
                variant='outline'
              >
                <FontAwesomeIcon
                  className={`${styles.socialMediaIcon} ${styles.twitterIcon}`}
                  icon={faTwitter}
                ></FontAwesomeIcon>
                Tweet
              </Button>
              <Button
                noHover
                className={`${styles.socialMediaBtn} ${styles.pinterest}`}
                variant='outline'
              >
                <FontAwesomeIcon
                  className={`${styles.socialMediaIcon} ${styles.pinterestIcon}`}
                  icon={faPinterestP}
                ></FontAwesomeIcon>
                Share
              </Button>
              <Button
                noHover
                className={`${styles.socialMediaBtn} ${styles.linkedin}`}
                variant='outline'
              >
                <FontAwesomeIcon
                  className={`${styles.socialMediaIcon} ${styles.linkedInIcon}`}
                  icon={faLinkedinIn}
                ></FontAwesomeIcon>
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductModal.propTypes = {
  closeModal: PropTypes.bool,
  productData: PropTypes.object,
};

export default ProductModal;
