/* selectors */
export const getAllFilter = ({ filters }) => filters;

/* actions */
const createActionName = actionName => `app/filters/${actionName}`;
const ADD_FILTER = createActionName('ADD_FILTER');

/* action creators */
export const addFilter = payload => ({
  type: ADD_FILTER,
  payload,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    /*     case ADD_FILTER: {
          if (statePart.some(product => product.id === action.payload.id)) {
            return statePart;
          } else {
            return {
              ...statePart,
              products: [...statePart.products, action.payload],
            };
          }
        } */
    default:
      return statePart;
  }
}
