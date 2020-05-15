import * as types from './types';

export const getDomainsRequestFetch = (): GetDomainsRequestFetchAction => ({
  type: types.GET_DOMAINS_REQUEST_FETCH
});
interface GetDomainsRequestFetchAction {
  type: typeof types.GET_DOMAINS_REQUEST_FETCH;
}

export const getDomainsRequestSuccess = (
  domains: types.GetDomainsResponse
): GetDomainsRequestSuccessAction => ({
  type: types.GET_DOMAINS_REQUEST_SUCCESS,
  domains
});
interface GetDomainsRequestSuccessAction {
  type: typeof types.GET_DOMAINS_REQUEST_SUCCESS;
  domains: types.GetDomainsResponse;
}

export const getDomainOwnersRequestFailure = (
  message: string
): GetDomainsRequestFailureAction => ({
  type: types.GET_DOMAINS_REQUEST_FAILURE,
  message
});
interface GetDomainsRequestFailureAction {
  type: typeof types.GET_DOMAINS_REQUEST_FAILURE;
  message: string;
}
