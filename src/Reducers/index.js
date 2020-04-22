import { combineReducers } from 'redux';
import searchResultReducer from '../State/SearchResult/reducers';
import requestAssetsReducer from './requestAssetsReducers';
import viewRequestsReducer from '../State/ViewRequests/reducers';
import currentUserReducer from '../State/AuthFlow/reducers';
import hydrationReducer from '../State/Hydration/reducers';
import jobCalendarReducer from '../State/JobCalendar/reducers';
import chromeReducer from '../State/Chrome/reducers';
import governanceReducer from '../State/Governance/reducers';

const rootReducer = combineReducers({
  searchResult: searchResultReducer,
  requestAssets: requestAssetsReducer,
  viewRequests: viewRequestsReducer,
  currentUser: currentUserReducer,
  hydration: hydrationReducer,
  jobCalendar: jobCalendarReducer,
  chrome: chromeReducer,
  governance: governanceReducer
});

export default rootReducer;
