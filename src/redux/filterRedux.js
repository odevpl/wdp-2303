/* selectors */
export const getAllFilters = ({ productFilters }) => productFilters;

/* actions */
const createActionName = actionName => `app/filters/${actionName}`;
const UPDATE_FILTER = createActionName('UPDATE_FILTER');
const REMOVE_FILTER = createActionName('REMOVE_FILTER');

/* action creators */
export const updateFilter = payload => ({
  type: UPDATE_FILTER,
  payload,
});

export const removeFilter = payload => ({
  type: REMOVE_FILTER,
  payload,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case UPDATE_FILTER: {
      const index = statePart.findIndex(filter => filter.name === action.payload.name);
      if (index !== -1) {
        return statePart.map((filter, i) =>
          i === index ? { ...action.payload } : filter
        );
      } else {
        return [...statePart, action.payload];
      }
    }
    case REMOVE_FILTER: {
      return statePart.filter(filter => filter.name !== action.payload.name);

    }
    default:
      return statePart;
  }
}
