import * as types from './types';

export const initialState = {
  domains: null,
  setSelectedDomainValues: null
};

const sharedReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_DOMAINS_REQUEST_FETCH:
      return { ...state };
    case types.GET_DOMAINS_REQUEST_SUCCESS: {
      const newDomains = action.domains.reduce(
        (acc: any, domain: types.GetDomains) => {
          acc.push({ ...domain, value: domain.domain, label: domain.domain });
          return acc;
        },
        []
      );
      return { ...state, domains: newDomains };
    }
    case types.SET_SELECTED_DOMAIN_VALUES:
      return { ...state, setSelectedDomainValues: action.domainValue };
    default:
      return state;
  }
};

export default sharedReducer;
