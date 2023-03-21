/* selectors */
export const getViewportMode = state => state.viewportMode;

/* actions */
const createActionName = actionName => `app/viewportMode/${actionName}`;
const TOGGLE_VIEWPORTMODE = createActionName('TOGGLE_VIEWPORTMODE');

/* action creators */
export const toggleViewportMode = payload => ({
  type: TOGGLE_VIEWPORTMODE,
  payload,
});
/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TOGGLE_VIEWPORTMODE:
      return (statePart =
        action.payload < 768 ? 'mobile' : action.payload < 992 ? 'tablet' : 'desktop');
    default:
      return statePart;
  }
}
