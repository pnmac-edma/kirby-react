import { initialState as viewRequests } from '../State/ViewRequests/reducers';

const initialState = {
  // TODO: Replace Stub Data (role and EmpEmail) with Real Data
  currentUser: {
    role: {
      governance: true,
      approver: true
    },
    // Authorization: initial state, based off of SAML token
    AccessKeyId: null,
    EmpEmail: 'jonathan.delarosa@pnmac.com',
    SamlHash: null,
    SecretKey: null,
    SessionToken: null,
    UserKey: null
  },
  searchResult: {
    searchInput: '',
    isLoading: false,
    displaySearchResult: false,
    searchResult: [],
    searchResultCopy: [],
    selectedAll: false,
    sortBy: {
      name: 'asc',
      domain: 'asc',
      owner: 'asc',
      createddate: 'asc'
    },
    selecters: [
      'Name',
      'Description',
      'Domain',
      'Owner',
      'Contain',
      'Not Contain',
      'Equal'
    ],
    isFilterClick: false,
    filterQueries: [],
    isFilterQueriesEmpty: false,
    filter: {
      filterBy: '',
      contain: '',
      filterTerm: ''
    },
    isSearchClicked: false
  },
  requestAssets: {
    selectedSearchResultCopy: [],
    selectedAll: false,
    employees: [],
    selectedEmployees: []
  },
  viewRequests
};

export default initialState;
