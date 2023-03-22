import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Feedback from '../../features/Feedback/Feedback';
import Gallery from '../../features/Gallery/Gallery';
import Banner from '../../common/Banner/Banner';

const Homepage = () => (
  <div className={styles.root}>
    <Banner />
    <FeatureBoxes />
    <NewFurniture />
    <Feedback />
    <Gallery />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
