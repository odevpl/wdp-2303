import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Feedback from '../../features/Feedback/Feedback';
import BlogBox from '../../features/BlogBox/BlogBox';
import Gallery from '../../features/Gallery/Gallery';
import Banner from '../../common/Banner/Banner';
import Featured from '../../features/Featured/Featured';
import PromotionBox from '../../layout/PromotionBox/PromotionBox';

const Homepage = () => (
  <div className={styles.root}>
    <Banner />
    <Featured />
    <FeatureBoxes />
    <PromotionBox />
    <NewFurniture />
    <BlogBox />
    <Feedback />
    <Gallery />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
