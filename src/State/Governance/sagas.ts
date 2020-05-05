import * as types from './types';
import { takeEvery, put, call, select } from 'redux-saga/effects';
import {
  getDomainOwners,
  getSensitivityLevels,
  getGovernors,
  deleteDomainOwners,
  deleteSensitivityLevels,
  deleteGovernors,
  addGovernors,
  addDomainOwners,
  addSensitivityLevels
} from './api';
import { getDomainOwner, getUserEmail } from '../../Selectors/sagaSelectors';

export function* workDomainOwners() {
  try {
    const response = yield call(getDomainOwners);
    yield put({
      type: types.DOMAIN_OWNERS_REQUEST_SUCCESS,
      domainOwners: response
    });
  } catch (error) {
    yield put({ type: types.DOMAIN_OWNERS_REQUEST_FAILURE, message: error });
  }
}

export function* workDeleteDomainOwners() {
  const domain = yield select(getDomainOwner);
  try {
    const response = yield call(
      deleteDomainOwners,
      domain[0].domain,
      domain[0].owneremail
    );
    const responseForGetDomainOwners = yield call(getDomainOwners);
    yield put({
      type: types.DELETE_DOMAIN_OWNERS_REQUEST_SUCCESS,
      message: response
    });
    yield put({
      type: types.DOMAIN_OWNERS_REQUEST_SUCCESS,
      domainOwners: responseForGetDomainOwners
    });
  } catch (error) {
    yield put({
      type: types.DELETE_DOMAIN_OWNERS_REQUEST_FAILURE,
      message: error
    });
  }
}

export function* workAddDomainOwners(action: any) {
  const { domain, createdByEmail, ownerEmail } = action;
  try {
    const response = yield call(
      addDomainOwners,
      domain,
      createdByEmail,
      ownerEmail
    );
    const responseForGetDomainOwners = yield call(getDomainOwners);
    yield put({
      type: types.ADD_DOMAIN_OWNERS_REQUEST_SUCCESS,
      message: response
    });
    yield put({
      type: types.DOMAIN_OWNERS_REQUEST_SUCCESS,
      domainOwners: responseForGetDomainOwners
    });
  } catch (error) {
    yield put({
      type: types.ADD_DOMAIN_OWNERS_REQUEST_FAILURE,
      message: error
    });
  }
}

export function* worksensitivityLevels() {
  try {
    const response = yield call(getSensitivityLevels);
    yield put({
      type: types.SENSITIVITY_LEVELS_REQUEST_SUCCESS,
      sensitivity: response
    });
  } catch (error) {
    yield put({
      type: types.SENSITIVITY_LEVELS_REQUEST_FAILURE,
      message: error
    });
  }
}

export function* workDeleteSensitivityLevels() {
  try {
    const response = yield call(deleteSensitivityLevels);
    const responseForGetSensitivityLevel = yield call(getSensitivityLevels);
    yield put({
      type: types.DELETE_SENSITIVITY_LEVELS_REQUEST_SUCCESS,
      message: response
    });
    yield put({
      type: types.SENSITIVITY_LEVELS_REQUEST_SUCCESS,
      sensitivity: responseForGetSensitivityLevel
    });
  } catch (error) {
    yield put({
      type: types.DELETE_DOMAIN_OWNERS_REQUEST_FAILURE,
      message: error
    });
  }
}

export function* workAddSensitivityLevels(action: any) {
  const { sensitive, createdByEmail, description } = action;
  try {
    const response = yield call(
      addSensitivityLevels,
      sensitive,
      createdByEmail,
      description
    );
    const responseForGetSensitivityLevel = yield call(getSensitivityLevels);
    yield put({
      type: types.ADD_SENSITIVITY_LEVELS_REQUEST_SUCCESS,
      message: response
    });
    yield put({
      type: types.SENSITIVITY_LEVELS_REQUEST_SUCCESS,
      sensitivity: responseForGetSensitivityLevel
    });
  } catch (error) {
    yield put({
      type: types.ADD_SENSITIVITY_LEVELS_REQUEST_FAILURE,
      message: error
    });
  }
}

export function* workGovernors() {
  try {
    const response = yield call(getGovernors);
    yield put({ type: types.GOVERNORS_REQUEST_SUCCESS, governors: response });
  } catch (error) {
    yield put({ type: types.GOVERNORS_REQUEST_FAILURE, message: error });
  }
}

export function* workDeleteGovernors() {
  const userEmail = yield select(getUserEmail);
  try {
    const response = yield call(deleteGovernors, userEmail[0].useremail);
    const responseForGetGovernors = yield call(getGovernors);
    yield put({
      type: types.DELETE_GOVERNORS_REQUEST_SUCCESS,
      message: response
    });
    yield put({
      type: types.GOVERNORS_REQUEST_FETCH,
      governors: responseForGetGovernors
    });
  } catch (error) {
    yield put({ type: types.DELETE_GOVERNORS_REQUEST_FAILURE, message: error });
  }
}

export function* workAddGovernors(action: any) {
  const { userEmail, userName, createdByEmail } = action;
  try {
    const response = yield call(
      addGovernors,
      userEmail,
      userName,
      createdByEmail
    );
    const responseForGetGovernors = yield call(getGovernors);
    yield put({ type: types.ADD_GOVERNORS_REQUEST_SUCCESS, message: response });
    yield put({
      type: types.GOVERNORS_REQUEST_FETCH,
      governors: responseForGetGovernors
    });
  } catch (error) {
    yield put({ type: types.ADD_GOVERNORS_REQUEST_FAILURE, message: error });
  }
}

export default function* watchDomainOwners() {
  yield takeEvery(types.DOMAIN_OWNERS_REQUEST_FETCH, workDomainOwners);
  yield takeEvery(
    types.SENSITIVITY_LEVELS_REQUEST_FETCH,
    worksensitivityLevels
  );
  yield takeEvery(types.GOVERNORS_REQUEST_FETCH, workGovernors);
  yield takeEvery(
    types.DELETE_DOMAIN_OWNERS_REQUEST_FETCH,
    workDeleteDomainOwners
  );
  yield takeEvery(
    types.DELETE_SENSITIVITY_LEVELS_REQUEST_FETCH,
    workDeleteSensitivityLevels
  );
  yield takeEvery(types.DELETE_GOVERNORS_REQUEST_FETCH, workDeleteGovernors);
  yield takeEvery(types.ADD_GOVERNORS_REQUEST_FETCH, workAddGovernors);
  yield takeEvery(types.ADD_DOMAIN_OWNERS_REQUEST_FETCH, workAddDomainOwners);
  yield takeEvery(
    types.ADD_SENSITIVITY_LEVELS_REQUEST_FETCH,
    workAddSensitivityLevels
  );
}
