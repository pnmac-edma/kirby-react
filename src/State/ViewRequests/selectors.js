// This would be the way to get outbound requests, however, archived functionality is not yet implemented
export const getArchivedRequests = state =>
  state.viewRequests.inboundRequests.filter(request => request.archived);
