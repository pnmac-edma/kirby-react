// gathers all actions, reducers, sagas, types (if needed in other ducks), and selectors if needed
import * as actions from './actions';
import reducer from './reducers';
import * as hydrationTypes from './types';

export { actions, hydrationTypes };

export default reducer;
