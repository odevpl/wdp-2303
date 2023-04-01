import { combineReducers, createStore } from 'redux';
import initialState from './initialState';

import cartReducer from './cartRedux';
import categoriesReducer from './categoriesRedux';
import productsReducer from './productsRedux';
import viewportModeReducer from './viewportModeRedux';
import feedbacksReducer from './feedbacksRedux';
import blogPostsReducer from './blogPostsRedux';
import promotionReducer from './promotionRedux';
import brandsReducer from './brandsRedux';
import filtersReducer from './filterRedux';
import searchTextReducer from './searchTextRedux';
import currencyReducer from './currencyRedux';

// define reducers
const reducers = {
  cart: cartReducer,
  categories: categoriesReducer,
  products: productsReducer,
  viewportMode: viewportModeReducer,
  feedbacks: feedbacksReducer,
  blogPosts: blogPostsReducer,
  promotions: promotionReducer,
  brands: brandsReducer,
  productFilters: filtersReducer,
  searchText: searchTextReducer,
  currency: currencyReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
