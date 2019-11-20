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
    requestedFor: [],
    selectedOption: []
  },
  requestInboxAlert: {
    alert: []
  }
};

export default initialState;
