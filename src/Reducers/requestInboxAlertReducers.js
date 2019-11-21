import initialState from './initialState';

const requestInboxAlertReducers = (
  state = initialState.requestInboxAlert,
  action
) => {
  switch (action.type) {
    case 'REQUEST_INBOX_ALERT': {
      return { ...state };
    }
    case 'REQUEST_INBOX_ALERT_SUCCESS': {
      const newAlerts = action.payload.filter(
        alerts => alerts.govstatus === 'Pending'
      ).length;

      return { ...state, alert: newAlerts };
    }
    default:
      return state;
  }
};

export default requestInboxAlertReducers;
