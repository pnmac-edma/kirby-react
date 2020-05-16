import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import handleSearchSagas from './SearchResult/sagas';
import requestAssetSagas from './RequestAsset/sagas';
import viewRequestsSagas from './ViewRequests/sagas';
import authFlowSagas from './AuthFlow/sagas';
import hydrationSagas from './Hydration/sagas';
import governaceSagas from './Governance/sagas';
import sharedSagas from './Shared/sagas';
import searchResultReducer from './SearchResult/reducers';
import requestAssetsReducer from './RequestAsset/reducers';
import viewRequestsReducer from './ViewRequests/reducers';
import currentUserReducer from './AuthFlow/reducers';
import hydrationReducer from './Hydration/reducers';
import jobCalendarReducer from './JobCalendar/reducers';
import chromeReducer from './Chrome/reducers';
import governanceReducer from './Governance/reducers';
import sharedReducer from './Shared/reducers';

function* rootSaga() {
  yield all([
    handleSearchSagas(),
    requestAssetSagas(),
    viewRequestsSagas(),
    authFlowSagas(),
    hydrationSagas(),
    governaceSagas(),
    sharedSagas()
  ]);
}

const rootReducer = combineReducers({
  searchResult: searchResultReducer,
  requestAssets: requestAssetsReducer,
  viewRequests: viewRequestsReducer,
  currentUser: currentUserReducer,
  hydration: hydrationReducer,
  jobCalendar: jobCalendarReducer,
  chrome: chromeReducer,
  governance: governanceReducer,
  shared: sharedReducer
});

export { rootReducer, rootSaga };
