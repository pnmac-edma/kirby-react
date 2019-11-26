// mocks that are used within the ViewRequests tests
export const mockUserRequests = [
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

export const mockApproverRequests = [
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

export const mockGovernanceRequests = [
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

export const mockError = new Error('Something unexpected happened!');
