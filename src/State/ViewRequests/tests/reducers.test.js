import viewRequestsReducer from '../reducers';
import initialState from '../../../Reducers/initialState';
import {
  mockApproverRequests,
  mockUserRequests,
  mockGovernanceRequests,
  mockError
} from './mocks';

// initial state to use as the previousState
const previousState = initialState.viewRequests;

describe('ViewRequests Reducers', () => {
  // state that we manipulate to be nextState
  let nextState;
  beforeEach(() => {
    // reset to the initial state to avoid any conflicts
    nextState = {
      inboundRequests: [],
      outboundRequests: [],
      error: {},
      isLoading: false
    };
  });

  it('should give back the initial state on default', () => {
    expect(viewRequestsReducer(previousState, { type: 'FAKE_ACTION' })).toEqual(
      nextState
    );
  });

  describe('when calling the API', () => {
    it('isLoading boolean is set to true', () => {
      nextState.isLoading = true;

      expect(
        viewRequestsReducer(previousState, { type: 'APPROVER_REQUESTS_FETCH' })
      ).toEqual(nextState);

      expect(
        viewRequestsReducer(previousState, {
          type: 'GOVERNANCE_REQUESTS_FETCH'
        })
      ).toEqual(nextState);

      expect(
        viewRequestsReducer(previousState, { type: 'USER_REQUESTS_FETCH' })
      ).toEqual(nextState);
    });
  });

  describe('on a successful API call', () => {
    it("should set the outboundRequests to the user's requests", () => {
      nextState.outboundRequests = mockUserRequests;

      expect(
        viewRequestsReducer(previousState, {
          type: 'USER_REQUESTS_SUCCESS',
          payload: mockUserRequests
        })
      ).toEqual(nextState);
    });

    it("should set the inboundRequests to the approver's requests", () => {
      nextState.inboundRequests = mockApproverRequests;

      expect(
        viewRequestsReducer(previousState, {
          type: 'APPROVER_REQUESTS_SUCCESS',
          payload: mockApproverRequests
        })
      ).toEqual(nextState);
    });

    it("should set the inboundRequests to the governer's requests", () => {
      nextState.inboundRequests = mockGovernanceRequests;

      expect(
        viewRequestsReducer(previousState, {
          type: 'GOVERNANCE_REQUESTS_SUCCESS',
          payload: mockGovernanceRequests
        })
      ).toEqual(nextState);
    });
  });

  describe('on a failed API call', () => {
    it('should set the error object to the error received', () => {
      nextState.error = mockError;

      expect(
        viewRequestsReducer(previousState, {
          type: 'USER_REQUESTS_FAILURE',
          payload: mockError
        })
      ).toEqual(nextState);

      expect(
        viewRequestsReducer(previousState, {
          type: 'APPROVER_REQUESTS_FAILURE',
          payload: mockError
        })
      ).toEqual(nextState);

      expect(
        viewRequestsReducer(previousState, {
          type: 'GOVERNANCE_REQUESTS_FAILURE',
          payload: mockError
        })
      ).toEqual(nextState);
    });
  });

  describe('when wanting to view archived requests', () => {
    it('should filter inboundRequests to view archived ones only', () => {
      // add some requests in the previous state.
      previousState.inboundRequests = mockGovernanceRequests;

      // since there is no archived flag, the array should be empty
      nextState.inboundRequests = [];
      expect(
        viewRequestsReducer(previousState, { type: 'GET_ARCHIVED_REQUESTS' })
      ).toEqual(nextState);
    });
  });
});
