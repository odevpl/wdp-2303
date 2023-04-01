/* selectors */
export const getCurrency = ({ currency }) => currency;

/* action name creator */
const reducerName = 'currency';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_CURRENCY = createActionName('ADD_CURRENCY');

/* action creators */
export const addCurrency = payload => ({ payload, type: ADD_CURRENCY });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_CURRENCY: {
      return action.payload;
    }
    default:
      return statePart;
  }
}
