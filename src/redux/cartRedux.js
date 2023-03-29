/* selectors */
export const getAll = ({ cart }) => cart.products;
export const getCount = ({ cart }) => cart.products.length;

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');
const CHECKOUT = createActionName('CHECKOUT');

/* action creators */
export const addProduct = payload => ({ payload, type: ADD_PRODUCT });
export const removeProduct = payload => ({ payload, type: REMOVE_PRODUCT });
export const checkout = payload => ({ payload, type: CHECKOUT });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_PRODUCT: {
      if (statePart.products.some(product => product.id === action.payload.id)) {
        return statePart;
      } else {
        return {
          ...statePart,
          products: [...statePart.products, action.payload],
        };
      }
    }
    case REMOVE_PRODUCT: {
      return {
        ...statePart,
        products: statePart.products.filter(product => product.id !== action.payload),
      };
    }
    case CHECKOUT: {
      return {
        ...statePart,
        products: [],
      };
    }
    default:
      return statePart;
  }
}
