import { createSelector } from 'reselect';

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
    assets.push({ database: asset.databasename });
    return assets;
  }, []);

/**
 * === GOVERNANCE SELECTORS ===
 *    setSelectedRemoveRowId,
 *    domain, owneremail
 * === GOVERNANCE SELECTORS ===
 */
export const getDomainOwners = state => state.governance.domainOwners;
export const getGovernors = state => state.governance.governors;
export const getSelectedRemoveRowId = state =>
  state.governance.setSelectedRemoveRowId;

const getSelected = (getDomainOwners, getSelectedRemoveRowId) =>
  getDomainOwners.filter(governor => governor.Id === getSelectedRemoveRowId);
export const getDomainOwner = createSelector(
  getDomainOwners,
  getSelectedRemoveRowId,
  getSelected
);

const getSelectedEmail = (getGovernors, getSelectedRemoveRowId) =>
  getGovernors.filter(governor => governor.Id === getSelectedRemoveRowId);
export const getUserEmail = createSelector(
  getGovernors,
  getSelectedRemoveRowId,
  getSelectedEmail
);
