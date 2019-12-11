import { initialState as viewRequests } from '../State/ViewRequests/reducers';

const initialState = {
  // TODO: Replace Stub Data (role and EmpEmail) with Real Data
  currentUser: {
    role: {
      governance: false,
      approver: false
    },
    AccessKeyId: null,
    EmpEmail: null,
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
      'Contains',
      // prettier-ignore
      'Doesn\'t contain', // eslint-disable-line
      'Equals'
    ],
    isFilterClick: false,
    filterQueries: [],
    isFilterQueriesEmpty: false,
    filter: {
      filterBy: '',
      filterType: '',
      filterTerm: ''
    },
    isSearchClicked: false
  },
  requestAssets: {
    selectedSearchResultCopy: [],
    selectedAll: false,
    employees: [],
    selectedEmployees: [],
    openModal: false
  },
  viewRequests
};

export default initialState;
