import { runSaga } from 'redux-saga';
import * as api from '../api.js';
import {
  handleUserRequests,
  handleApproverRequests,
  handleGovernanceRequests
} from '../sagas';
import {
  userRequestsSuccess,
  userRequestsFailure,
  approverRequestsSuccess,
  approverRequestsFailure,
  governanceRequestsSuccess,
  governanceRequestsFailure
} from '../actions';
import {
  mockGovernanceRequests,
  mockApproverRequests,
  mockUserRequests,
  mockError
} from './mocks';

// runs the specific saga with an initial payload
// and returns an array of actions that are triggered with that saga
export async function recordSaga(saga, initialAction) {
  const dispatched = [];
  await runSaga(
    {
      dispatch: action => dispatched.push(action)
    },
    saga,
    initialAction
  ).done;

  return dispatched;
}

describe('ViewRequests Sagas', () => {
  const mockEmail = 'some.user@pnmac.com';

  api.getUserRequests = jest.fn();
  api.getApproverRequests = jest.fn();
  api.getGovernanceRequests = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('handleUserRequests', () => {
    it('should handle successful calls', async () => {
      api.getUserRequests.mockImplementation(() =>
        Promise.resolve(mockUserRequests)
      );

      const dispatched = await recordSaga(handleUserRequests, mockEmail);

      expect(api.getUserRequests).toHaveBeenCalled();
      expect(dispatched).toContainEqual(userRequestsSuccess(mockUserRequests));
    });

    it('should handle errors on unsuccessful attempts', async () => {
      api.getUserRequests.mockImplementation(() => Promise.reject(mockError));
      const dispatched = await recordSaga(handleUserRequests, mockEmail);

      expect(api.getUserRequests).toHaveBeenCalled();
      expect(dispatched).toContainEqual(userRequestsFailure(mockError));
    });
  });

  describe('handleApproverRequests', () => {
    it('should handle successful calls', async () => {
      api.getApproverRequests.mockImplementation(() =>
        Promise.resolve(mockApproverRequests)
      );

      const dispatched = await recordSaga(handleApproverRequests, mockEmail);

      expect(api.getApproverRequests).toHaveBeenCalled();
      expect(dispatched).toContainEqual(
        approverRequestsSuccess(mockApproverRequests)
      );
    });

    it('should handle errors on unsuccessful attempts', async () => {
      api.getApproverRequests.mockImplementation(() =>
        Promise.reject(mockError)
      );
      const dispatched = await recordSaga(handleApproverRequests, mockEmail);

      expect(api.getApproverRequests).toHaveBeenCalled();
      expect(dispatched).toContainEqual(approverRequestsFailure(mockError));
    });
  });

  describe('handleGovernanceRequests', () => {
    it('should handle successful calls', async () => {
      api.getGovernanceRequests.mockImplementation(() =>
        Promise.resolve(mockGovernanceRequests)
      );

      const dispatched = await recordSaga(handleGovernanceRequests, 4, 200);

      expect(api.getGovernanceRequests).toHaveBeenCalled();
      expect(dispatched).toContainEqual(
        governanceRequestsSuccess(mockGovernanceRequests)
      );
    });

    it('should handle errors on unsuccessful attempts', async () => {
      api.getGovernanceRequests.mockImplementation(() =>
        Promise.reject(mockError)
      );
      const dispatched = await recordSaga(handleGovernanceRequests, 4, 200);

      expect(api.getGovernanceRequests).toHaveBeenCalled();
      expect(dispatched).toContainEqual(governanceRequestsFailure(mockError));
    });
  });
});
