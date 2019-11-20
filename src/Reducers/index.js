import { combineReducers } from 'redux';
import searchResultReducer from './searchResultReducer';
import requestAssetsReducer from './requestAssetsReducers';
import requestInboxAlertReducer from './requestInboxAlertReducers';

const rootReducer = combineReducers({
  searchResult: searchResultReducer,
  requestAssets: requestAssetsReducer,
  requestInboxAlert: requestInboxAlertReducer
});

export default rootReducer;
