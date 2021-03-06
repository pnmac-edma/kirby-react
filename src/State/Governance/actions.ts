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

export const deleteDomainOwnersRequestFetch = (): DeleteDomainOwnersRequestFetchAction => ({
  type: types.DELETE_DOMAIN_OWNERS_REQUEST_FETCH
});
interface DeleteDomainOwnersRequestFetchAction {
  type: typeof types.DELETE_DOMAIN_OWNERS_REQUEST_FETCH;
}

export const deleteDomainOwnersRequestSuccess = (
  message: string
): DeleteDomainOwnersRequestSuccessAction => ({
  type: types.DELETE_DOMAIN_OWNERS_REQUEST_SUCCESS,
  message
});
interface DeleteDomainOwnersRequestSuccessAction {
  type: typeof types.DELETE_DOMAIN_OWNERS_REQUEST_SUCCESS;
  message: string;
}

export const deleteDomainOwnersRequestFailure = (
  message: any
): DeleteDomainOwnersFailureAction => ({
  type: types.DELETE_DOMAIN_OWNERS_REQUEST_FAILURE,
  message
});
interface DeleteDomainOwnersFailureAction {
  type: typeof types.DELETE_DOMAIN_OWNERS_REQUEST_FAILURE;
  message: any;
}

export const addDomainOwnersRequestFetch = (
  domain: string
): AddDomainOwnersRequestFetchAction => ({
  type: types.ADD_DOMAIN_OWNERS_REQUEST_FETCH,
  domain
});
interface AddDomainOwnersRequestFetchAction {
  type: typeof types.ADD_DOMAIN_OWNERS_REQUEST_FETCH;
  domain: string;
}
export const addDomainOwnersRequestSuccess = (
  message: string
): AddDomainOwnersRequestSuccessAction => ({
  type: types.ADD_DOMAIN_OWNERS_REQUEST_SUCCESS,
  message
});
interface AddDomainOwnersRequestSuccessAction {
  type: typeof types.ADD_DOMAIN_OWNERS_REQUEST_SUCCESS;
  message: string;
}
export const addDomainOwnersRequestFailure = (
  message: string
): AddDomainOwnersRequestFailureAction => ({
  type: types.ADD_DOMAIN_OWNERS_REQUEST_FAILURE,
  message
});
interface AddDomainOwnersRequestFailureAction {
  type: typeof types.ADD_DOMAIN_OWNERS_REQUEST_FAILURE;
  message: string;
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

export const deleteSensitivityRequestFetch = (): DeleteSensitivityRequestFetchAction => ({
  type: types.DELETE_SENSITIVITY_LEVELS_REQUEST_FETCH
});
interface DeleteSensitivityRequestFetchAction {
  type: typeof types.DELETE_SENSITIVITY_LEVELS_REQUEST_FETCH;
}

export const deleteSensitivityLevelsRequestSuccess = (
  message: string
): DeleteSensitivityLevelsRequestSuccessAction => ({
  type: types.DELETE_SENSITIVITY_LEVELS_REQUEST_SUCCESS,
  message
});
interface DeleteSensitivityLevelsRequestSuccessAction {
  type: typeof types.DELETE_SENSITIVITY_LEVELS_REQUEST_SUCCESS;
  message: string;
}

export const deleteSensitivityLevelsRequestFailure = (
  message: any
): DeleteSensitivityLevelsFailureAction => ({
  type: types.DELETE_SENSITIVITY_LEVELS_REQUEST_FAILURE,
  message
});
interface DeleteSensitivityLevelsFailureAction {
  type: typeof types.DELETE_SENSITIVITY_LEVELS_REQUEST_FAILURE;
  message: any;
}

export const addSensitivityLevelsRequestFetch = (
  sensitive: string,
  description: string
): AddSensitivityLevelsRequestFetchAction => ({
  type: types.ADD_SENSITIVITY_LEVELS_REQUEST_FETCH,
  sensitive,
  description
});
interface AddSensitivityLevelsRequestFetchAction {
  type: typeof types.ADD_SENSITIVITY_LEVELS_REQUEST_FETCH;
  sensitive: string;
  description: string;
}
export const addSensitivityLevelsRequestSuccess = (
  message: string
): AddSensitivityLevelsRequestSuccessAction => ({
  type: types.ADD_SENSITIVITY_LEVELS_REQUEST_SUCCESS,
  message
});
interface AddSensitivityLevelsRequestSuccessAction {
  type: typeof types.ADD_SENSITIVITY_LEVELS_REQUEST_SUCCESS;
  message: string;
}
export const addSensitivityLevelsRequestFailure = (
  message: any
): AddSensitivityLevelsRequestFailureAction => ({
  type: types.ADD_SENSITIVITY_LEVELS_REQUEST_FAILURE,
  message
});
interface AddSensitivityLevelsRequestFailureAction {
  type: typeof types.ADD_SENSITIVITY_LEVELS_REQUEST_FAILURE;
  message: any;
}

export const governorsRequestFetch = (): GovernorsRequestFetchAction => ({
  type: types.GOVERNORS_REQUEST_FETCH
});
interface GovernorsRequestFetchAction {
  type: typeof types.GOVERNORS_REQUEST_FETCH;
}

export const governorsRequestSuccess = (
  governors: types.Governor
): GovernorsRequestSuccessAction => ({
  type: types.GOVERNORS_REQUEST_SUCCESS,
  governors: governors
});
interface GovernorsRequestSuccessAction {
  type: typeof types.GOVERNORS_REQUEST_SUCCESS;
  governors: types.Governor;
}

export const deleteGovernorsRequestFetch = (): DeleteGovernorsRequestFetchAction => ({
  type: types.DELETE_GOVERNORS_REQUEST_FETCH
});
interface DeleteGovernorsRequestFetchAction {
  type: typeof types.DELETE_GOVERNORS_REQUEST_FETCH;
}
export const deleteGovernorsRequestSuccess = (
  message: any
): DeleteGovernorsRequestSuccessAction => ({
  type: types.DELETE_GOVERNORS_REQUEST_SUCCESS,
  message
});
interface DeleteGovernorsRequestSuccessAction {
  type: typeof types.DELETE_GOVERNORS_REQUEST_SUCCESS;
  message: any;
}
export const deleteGovernorsRequestFailure = (
  message: any
): DeleteGovernorsRequestFailureAction => ({
  type: types.DELETE_GOVERNORS_REQUEST_FAILURE,
  message
});
interface DeleteGovernorsRequestFailureAction {
  type: typeof types.DELETE_GOVERNORS_REQUEST_FAILURE;
  message: any;
}

export const addGovernorsRequestFetch = (): AddGovernorsRequestFetchAction => ({
  type: types.ADD_GOVERNORS_REQUEST_FETCH
});
interface AddGovernorsRequestFetchAction {
  type: typeof types.ADD_GOVERNORS_REQUEST_FETCH;
}
export const addGovernorsRequestSuccess = (
  message: string
): AddGovernorsRequestSuccessAction => ({
  type: types.ADD_GOVERNORS_REQUEST_SUCCESS,
  message
});
interface AddGovernorsRequestSuccessAction {
  type: typeof types.ADD_GOVERNORS_REQUEST_SUCCESS;
  message: string;
}
export const addGovernorsRequestFailure = (
  message: string
): AddGovernorsRequestFailureAction => ({
  type: types.ADD_GOVERNORS_REQUEST_FAILURE,
  message
});
interface AddGovernorsRequestFailureAction {
  type: typeof types.ADD_GOVERNORS_REQUEST_FAILURE;
  message: string;
}

export const setRemoveSelectedRow = (Id: number): SetRemoveSelectedRow => ({
  type: types.SET_REMOVE_SELECTED_ROW,
  Id
});
interface SetRemoveSelectedRow {
  type: typeof types.SET_REMOVE_SELECTED_ROW;
  Id: number;
}

export const setSelectedGovernor = (
  governorValue: any
): SetSelectedGovernorAction => ({
  type: types.SET_SELECTED_GOVERNOR,
  governorValue
});
interface SetSelectedGovernorAction {
  type: typeof types.SET_SELECTED_GOVERNOR;
  governorValue: any;
}
