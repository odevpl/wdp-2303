export const getSearchText = (state) => state['searchText'];

const CHANGE_SEARCH_TEXT = 'app/searchText/CHANGE_SEARCH_TEXT';

export const changeSearchText = payload => ({ type: CHANGE_SEARCH_TEXT, payload});

const searchTextReducer = (statePart = '', action) => {
  switch(action.type) {
    case CHANGE_SEARCH_TEXT:
      return action.payload;
    default:
      return statePart;
  }
};

export default searchTextReducer;