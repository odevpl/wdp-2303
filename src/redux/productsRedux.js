/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getProductsToCompare = ({ products }) =>
  products.filter(item => item.compare === true);
/* actions */
const createActionName = actionName => `app/products/${actionName}`;
const TOGGLE_PRODUCT_FAVOURITE = createActionName('TOGGLE_PRODUCT_FAVOURITE');
const TOGGLE_PRODUCT_COMPARE = createActionName('TOGGLE_PRODUCT_COMPARE');

/* action creators */
export const toggleProductFavourite = payload => ({
  type: TOGGLE_PRODUCT_FAVOURITE,
  payload,
});

export const toggleProductCompare = payload => ({
  type: TOGGLE_PRODUCT_COMPARE,
  payload,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TOGGLE_PRODUCT_FAVOURITE:
      return statePart.map(product =>
        product.id === action.payload
          ? {
              ...product,
              favourite: !product.favourite,
            }
          : product
      );
    case TOGGLE_PRODUCT_COMPARE:
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, compare: !product.compare }
          : product
      );
    default:
      return statePart;
  }
}
