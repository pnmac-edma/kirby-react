import { initialState as viewRequests } from '../State/ViewRequests/reducers';

const initialState = {
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
    selectedEmployees: [],
    openModal: false,
    notification: false
  },
  viewRequests
};

export default initialState;
