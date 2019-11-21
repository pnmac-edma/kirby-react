import { combineReducers } from 'redux';
import searchResultReducer from './searchResultReducer';
import requestAssetsReducer from './requestAssetsReducers';
import viewRequestsReducer from '../State/ViewRequests/index';

const rootReducer = combineReducers({
  searchResult: searchResultReducer,
  requestAssets: requestAssetsReducer,
  viewRequests: viewRequestsReducer
});

export default rootReducer;
