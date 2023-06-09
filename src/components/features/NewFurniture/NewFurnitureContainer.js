import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';
import { getViewportMode } from '../../../redux/viewportModeRedux';
const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  viewportMode: getViewportMode(state),
});

export default connect(mapStateToProps)(NewFurniture);
