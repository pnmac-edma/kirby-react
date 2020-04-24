import * as types from './types';

export const domainOwnersRequestFetch = (): DomainOwnersRequestFetchAction => ({
  type: types.DOMAIN_OWNERS_REQUEST_FETCH
});
interface DomainOwnersRequestFetchAction {
  type: typeof types.DOMAIN_OWNERS_REQUEST_FETCH;
}

export const domainOwnersRequestSuccess = (): DomainOwnersRequestSuccessAction => ({
  type: types.DOMAIN_OWNERS_REQUEST_SUCCESS
});
interface DomainOwnersRequestSuccessAction {
  type: typeof types.DOMAIN_OWNERS_REQUEST_SUCCESS;
}

export const sensitivityLevelsRequestFetch = (): SensitivityLevelsRequestFetchAction => ({
  type: types.SENSITIVITY_LEVELS_REQUEST_FETCH
});
interface SensitivityLevelsRequestFetchAction {
  type: typeof types.SENSITIVITY_LEVELS_REQUEST_FETCH;
}

export const sensitivityLevelsRequestSuccess = (): SensitivityLevelsRequestSuccessAction => ({
  type: types.SENSITIVITY_LEVELS_REQUEST_SUCCESS
});
interface SensitivityLevelsRequestSuccessAction {
  type: typeof types.SENSITIVITY_LEVELS_REQUEST_SUCCESS;
}

export const setRemoveSelectedRow = (Id: number): SetRemoveSelectedRow => ({
  type: types.SET_REMOVE_SELECTED_ROW,
  Id
});
interface SetRemoveSelectedRow {
  type: typeof types.SET_REMOVE_SELECTED_ROW;
  Id: number;
}

export const setRemoveGovernor = () => ({
  type: types.SET_REMOVE_GOVERNOR
});

export const setRemoveSensitivityLevels = () => ({
  type: types.SET_REMOVE_SENSITIVITY_LEVELS
});

export const setRemoveDomainManagers = () => ({
  type: types.SET_REMOVE_DOMAIN_MANAGERS
});
