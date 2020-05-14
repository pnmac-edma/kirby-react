// All API calls that have to do with viewing requests
import axios from 'axios';
import { constructRequest } from '../helpers';
import config from '../../config/config';
import { HttpMethods } from '../../Models/enums';
import store from '../../setupStore';

export function getUserRequests(useremail: any) {
  const request = constructRequest(
    config.apiUrl,
    `${config.apiPath}/requests/sent`,
    HttpMethods.GET,
    {
      params: { useremail }
    }
  );

  return axios(request)
    .then(response => response.data)
    .then(error => error);
}

export function getApproverRequests(approveremail: string) {
  const request = constructRequest(
    config.apiUrl,
    `${config.apiPath}/approver/requests`,
    HttpMethods.GET,
    {
      params: { approveremail }
    }
  );

  return axios(request)
    .then(response => response.data)
    .then(error => error);
}

export function getGovernanceRequests() {
  const request = constructRequest(
    config.apiUrl,
    `${config.apiPath}/requests`,
    HttpMethods.GET,
    {
      params: { useremail: 'eric.barrow@pnmac.com' }
    }
  );

  return axios(request)
    .then(response => response.data)
    .then(error => error);
}

export function postReqDecision(decision: string, ids: Array<number>) {
  const currentUserEmail = store.getState().currentUser.EmpEmail;
  const requestBody = {
    status: decision,
    useremail: currentUserEmail,
    requestids: ids
  };

  const request = constructRequest(
    config.apiUrl,
    `${config.apiPath}/requests/decision`,
    HttpMethods.POST,
    {
      data: requestBody,
      headers: { 'Content-Type': 'application/json' }
    }
  );

  return axios(request)
    .then(response => response.data)
    .then(error => error);
}
