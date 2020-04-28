export const getSearchInput = state => state.searchResult.searchInput.value;
export const getSortBy = state => state.searchResult.sortBy;
export const getFilterBy = state => state.searchResult.filter.filterBy;
export const getContain = state => state.searchResult.filter.contain;
export const getFilterTerm = state => state.searchResult.filter.filterTerm;
export const getFilterQueries = state => state.searchResult.filterQueries;
/**
 * === REQUEST ASSETS SELECTORS ===
 *    Table, Justification
 *    Requested For, Requesting For
 * === REQUEST ASSETS SELECTORS ===
 */
export const getRequestedFor = state =>
  state.requestAssets.selectedEmployees.map(employee => employee.email);
export const getJustification = state => state.requestAssets.justification;
export const getCreatedByEmail = state => state.currentUser.EmpEmail;
export const getRequestAssets = state =>
  state.requestAssets.selectedSearchResultCopy.reduce((assets, asset) => {
    assets.push({ [asset.requesttype]: asset.name });
    return assets;
  }, []);
