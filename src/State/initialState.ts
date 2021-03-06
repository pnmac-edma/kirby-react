import { initialState as viewRequests } from './ViewRequests/reducers';
import { initialState as hydration } from './Hydration/reducers';
import { initialState as jobCalendar } from './JobCalendar/reducers';
import { initialState as chrome } from './Chrome/reducers';
import { initialState as governance } from './Governance/reducers';
import { initialState as shared } from './Shared/reducers';

const initialState = {
  // TODO: Replace Stub Data (role and EmpEmail) with Real Data
  currentUser: {
    role: {
      isGovernor: true,
      isApprover: true
    },
    AccessKeyId: null,
    EmpEmail: null,
    SamlHash: null,
    SecretKey: null,
    SessionToken: null,
    UserKey: null
  },
  searchResult: {
    searchInput: {
      value: '',
      isError: false,
      isTouched: false
    },
    searchedInput: '',
    isLoading: false,
    searchResult: {
      results: []
    },
    selected: []
  },
  requestAssets: {
    employees: [],
    isLoading: false,
    justification: '',
    notificationMessage: '',
    openModal: false,
    selectedAssets: [],
    selectedEmployees: []
  },
  viewRequests,
  hydration,
  jobCalendar,
  chrome,
  governance,
  shared
};

export default initialState;
