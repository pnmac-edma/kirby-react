// gathers all reducers, sagas, types (if needed in other ducks), and selectors if needed
import reducer from './reducers';
import * as viewRequestsSagas from './sagas';
import * as viewRequestsTypes from './types';
import * as viewRequestsSelectors from './selectors';

export { viewRequestsSagas, viewRequestsTypes, viewRequestsSelectors };

export default reducer;
