import { combineReducers } from 'redux';
import searchResultReducer from './searchResultReducer';
import requestAssetsReducer from './requestAssetsReducers';

const rootReducer = combineReducers({
  searchResult: searchResultReducer,
  requestAssets: requestAssetsReducer
});

export default rootReducer;
