// This would be the way to get inbound requests, however, archived functionality is not yet implemented
export const getArchivedRequests = state =>
  state.viewRequests.inboundRequests.filter(request => request.archived);

// TODO: wanna figure out if we should generalize getPendingRequests to getGovernanceRequests
export const getRequestsByStatus = (state, status) =>
  state.viewRequests.inboundRequests.filter(
    request => request.requeststatus === status
  );
