import { initialState as viewRequests } from '../State/ViewRequests/reducers';
import { initialState as hydration } from '../State/Hydration/reducers';

const initialState = {
  // TODO: Replace Stub Data (role and EmpEmail) with Real Data
  currentUser: {
    role: {
      governance: true,
      approver: true
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
    searchedInput: '',
    isLoading: false,
    displaySearchResult: false,
    searchResult: [],
    searchResultCopy: [],
    selected: [],
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
    isSearchClicked: false,
    rowsPerPage: 10,
    rowsPerPageOptions: [10, 25, 50],
    selectedIds: []
  },
  requestAssets: {
    selectedSearchResultCopy: [],
    selected: [],
    selectedAll: false,
    employees: [],
    selectedEmployees: [],
    openModal: false,
    notificationMessage: '',
    isLoading: false,
    justification: ''
  },
  viewRequests,
  hydration
};

export default initialState;
