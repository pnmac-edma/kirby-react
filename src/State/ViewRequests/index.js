// gathers all reducers, sagas, types (if needed in other ducks), and selectors if needed
import reducer from './reducers';
import * as viewRequestSagas from './operations';
import * as viewRequestsTypes from './types';

export { viewRequestsSagas, viewRequestsTypes };

export default reducer;
