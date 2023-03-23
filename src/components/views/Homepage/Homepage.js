import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Feedback from '../../features/Feedback/Feedback';
import BlogBox from '../../features/BlogBox/BlogBox';
import Banner from '../../common/Banner/Banner';

const Homepage = () => (
  <div className={styles.root}>
    <Banner />
    <FeatureBoxes />
    <NewFurniture />
    <BlogBox />
    <Feedback />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
