import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Feedback from '../../features/Feedback/Feedback';
import Banner from '../../common/Banner/Banner';
import Featured from '../../features/Featured/Featured';

const Homepage = () => (
  <div className={styles.root}>
    <Banner />
    <Featured />
    <FeatureBoxes />
    <NewFurniture />
    <Feedback />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
