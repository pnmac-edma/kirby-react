import { runSaga } from 'redux-saga';
import {
  handleUserRequests,
  handleApproverRequests,
  handleGovernanceRequests
} from './sagas.js';
import * as api from './api.js';
import {
  userRequestsSuccess,
  userRequestsFailure,
  approverRequestsSuccess,
  approverRequestsFailure,
  governanceRequestsSuccess,
  governanceRequestsFailure
} from './actions.js';

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
  const mockUserRequests = [
    {
      Id: 123,
      createddate: '2019-09-30 21:50:02',
      createdbyemail: 'some.user@pnmac.com',
      databasename: 'test',
      requesttype: 'Access',
      requestaction: 'Grant',
      requeststatus: 'Pending',
      updateddate: null,
      updatedbyemail: null,
      approver: 'some.otheremail@pnmac.com',
      requestdata:
        '{"access": [{"asset": "test", "createdbyemail": "{{user_email}}", "domain": "retail", "sensitivity": "non-sensitive", "justification": "I need this for some reason", "useremail": "some.email@pnmac.com"}]}'
    }
  ];

  const mockApproverRequests = [
    {
      Id: 456,
      createddate: '2019-10-04 15:29:13',
      createdbyemail: 'some.otheremail@pnmac.com',
      databasename: 'testDB2',
      requesttype: 'Database',
      requestaction: 'Create',
      requeststatus: 'Approved',
      updateddate: '2019-10-04 15:43:50',
      updatedbyemail: null,
      approver: 'some.user@pnmac.com',
      requestdata:
        '{"owner": "eric.barrow@pnmac.com", "kw": {}, "mod_id": null, "gov": true, "updatedbyemail": "eric.barrow@pnmac.com", "updateddate": null, "sensitivity": "sensitive", "justification": "test dups", "description": "test dups", "domain": "demo", "databasename": "DupTestDB", "createdbyemail": "some.user@pnmac.com"}'
    }
  ];

  const mockGovernanceRequests = [
    {
      Id: 789,
      createddate: '2019-11-20 16:52:28',
      createdbyemail: 'some.user@pnmac.com',
      requestid: 149,
      govstatus: 'Pending',
      reason: 'Testing Inbox Alerts',
      requestdata:
        '{"access": [{"asset": "testDB2", "createdbyemail": "some.user@pnmac.com", "domain": "demo_jon", "sensitivity": "confidential", "justification": "hello", "useremail": "some.otheruser@pnmac.com"}, {"asset": "testDB2", "createdbyemail": "eric.barrow@pnmac.com", "domain": "demo_jon", "sensitivity": "confidential", "justification": "hello", "useremail": "scott.fowles@pnmac.com"}, {"asset": "elephant", "createdbyemail": "some.user@pnmac.com", "domain": "demo_jon", "sensitivity": "confidential", "justification": "hello", "useremail": "some.otheruser@pnmac.com"}]}',
      requesttype: 'Access',
      databasename: 'testDB2'
    }
  ];

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
      const error = new Error('Something unexpected occured');
      api.getUserRequests.mockImplementation(() => Promise.reject(error));
      const dispatched = await recordSaga(handleUserRequests, mockEmail);

      expect(api.getUserRequests).toHaveBeenCalled();
      expect(dispatched).toContainEqual(userRequestsFailure(error));
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
      const error = new Error('Something unexpected occured');
      api.getApproverRequests.mockImplementation(() => Promise.reject(error));
      const dispatched = await recordSaga(handleApproverRequests, mockEmail);

      expect(api.getApproverRequests).toHaveBeenCalled();
      expect(dispatched).toContainEqual(approverRequestsFailure(error));
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
      const error = new Error('Something unexpected occured');
      api.getGovernanceRequests.mockImplementation(() => Promise.reject(error));
      const dispatched = await recordSaga(handleGovernanceRequests, 4, 200);

      expect(api.getGovernanceRequests).toHaveBeenCalled();
      expect(dispatched).toContainEqual(governanceRequestsFailure(error));
    });
  });
});
