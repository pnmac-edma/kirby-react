import { combineReducers } from 'redux';
import searchResultReducer from './searchResultReducer';
import requestAssetsReducer from './requestAssetsReducers';
import viewRequestsReducer from '../State/ViewRequests/reducers';
import currentUserReducer from '../State/AuthFlow/reducers';

const rootReducer = combineReducers({
  searchResult: searchResultReducer,
  requestAssets: requestAssetsReducer,
  viewRequests: viewRequestsReducer,
  currentUser: currentUserReducer
});

export default rootReducer;
