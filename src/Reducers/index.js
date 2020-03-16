import { combineReducers } from 'redux';
import searchResultReducer from './searchResultReducer';
import requestAssetsReducer from './requestAssetsReducers';
import viewRequestsReducer from '../State/ViewRequests/reducers';
import currentUserReducer from '../State/AuthFlow/reducers';
import hydrationReducer from '../State/Hydration/reducers';
import chromeReducer from '../State/Chrome/reducers';

const rootReducer = combineReducers({
  searchResult: searchResultReducer,
  requestAssets: requestAssetsReducer,
  viewRequests: viewRequestsReducer,
  currentUser: currentUserReducer,
  hydration: hydrationReducer,
  chrome: chromeReducer
});

export default rootReducer;
