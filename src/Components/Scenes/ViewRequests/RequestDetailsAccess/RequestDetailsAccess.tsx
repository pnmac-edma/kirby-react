import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, useLocation, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Divider, Typography } from '@material-ui/core';
import { WarningRounded } from '@material-ui/icons';
import { color, font, fontSize } from '@edma/design-tokens';
import { transformRequests } from '../../../../State/helpers';
import {
  setIsRequestInboxNotification,
  reqDecisionRequestFetch
} from '../../../../State/ViewRequests/actions';

const useStyles = makeStyles(theme => ({
  button: {
    textTransform: 'none',
    fontWeight: 'bold',
    marginTop: theme.spacing(1.5),
    marginRight: theme.spacing(3)
  },
  flexStructure: {
    display: 'flex',
    justifyContent: 'left',
    height: '100vh'
  },
  dividerStyle: {
    width: '100%',
    marginBottom: 32,
    marginTop: 24
  },
  menuStyle: {
    width: 'max-content',
    textTransform: 'uppercase',
    marginBottom: 8,
    fontWeight: 'bold',
    fontFamily: font.body,
    color: theme.palette.type === 'light' ? color.black : color.g300
  },
  sidebar: {
    background: theme.palette.type === 'light' ? color.g100 : color.g800,
    fontSize: fontSize[1],
    marginTop: '-10rem',
    overflow: 'hidden',
    paddingTop: '10rem',
    maxWidth: 430,
    minWidth: 300,
    width: '100%'
  },
  secondaryButton: {
    color: color.b600,

    '&:hover': {
      color: color.b600,
      background: color.b50
    }
  },
  sideTable: {
    width: '70%',
    marginTop: theme.spacing(6),
    marginLeft: theme.spacing(4)
  },
  sidebarPosition: {
    margin: '0 1rem',
    color: theme.palette.type === 'light' ? color.black : color.white
  },
  title: {
    width: 'max-content'
  },
  heading: {
    margin: '1rem 0 2rem',
    color: theme.palette.type === 'light' ? color.black : color.white
  }
}));

const RequestDetailsAccess = ({
  requestListType
}: RequestDetailsAccessProps) => {
  const classes = useStyles();

  const { inboundRequests, outboundRequests, archivedRequests } = useSelector(
    ({ viewRequests }: any) => viewRequests
  );
  const userRole = useSelector(({ currentUser }: any) => currentUser.role);
  const dispatch = useDispatch();

  const sensitivityIcon = (sensitivity: string) => {
    if (sensitivity === 'Sensitive') {
      return (
        <WarningRounded className="Tile__statusIcon Tile__statusIcon--warning" />
      );
    }
    if (sensitivity === 'Confidential') {
      return <WarningRounded color="error" />;
    }
    return null;
  };

  const history = useHistory();

  const generateCorrectRequestList = () => {
    if (requestListType === 'inbound') {
      return inboundRequests;
    } else if (requestListType === 'outbound') {
      return outboundRequests;
    } else if (requestListType === 'archived') {
      return archivedRequests;
    }
  };

  const { id } = useParams();
  const isApprovePath = useLocation().pathname.includes('approve');
  const correctRequestList = generateCorrectRequestList();

  if (!correctRequestList) {
    return <Redirect to="/requests" />;
  }

  const reqs = transformRequests(correctRequestList, userRole);
  const currentRequest = reqs.find(
    (request: any) => request.Id.toString() === id
  );

  // NOTE: after going to approve request page and approve/rejecting request
  //       and being redirected to requests page, the following lines of code
  //       prevents erroring out; unsure why RequestDetailsAccess gets re-rendered
  if (!currentRequest) {
    return null;
  }

  const {
    databasename,
    createdbyemail,
    approver,
    requestdata,
    requestsensitivity
  } = currentRequest;
  const { justification } = requestdata.access[0];

  return (
    <div className={classes.flexStructure}>
      <div className={classes.sidebar}>
        <div className={classes.sidebarPosition}>
          <Typography variant="h2" className={classes.heading}>
            Access Database
          </Typography>
          <Typography variant="overline" className={classes.menuStyle}>
            Database Name
          </Typography>
          <Typography className={classes.title}>{databasename}</Typography>
          <Divider className={classes.dividerStyle} />
          <Typography variant="overline" className={classes.menuStyle}>
            Sensitivity
          </Typography>
          <Typography className={classes.title}>
            {sensitivityIcon(requestsensitivity)} {requestsensitivity}
          </Typography>
          <Divider className={classes.dividerStyle} />
          <Typography variant="overline" className={classes.menuStyle}>
            Requested By
          </Typography>
          <Typography className={classes.title}>{createdbyemail}</Typography>
          <Divider className={classes.dividerStyle} />
          <Typography variant="overline" className={classes.menuStyle}>
            Requested For
          </Typography>
          <Typography className={classes.title}>{approver}</Typography>
        </div>
      </div>
      <div className={classes.sideTable}>
        <Typography variant="overline" className={classes.menuStyle}>
          Justification
        </Typography>
        <Typography className={classes.title}>{justification}</Typography>
        <br />
        {isApprovePath && (
          <div>
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
              onClick={() => {
                dispatch(reqDecisionRequestFetch('Rejected', [id]));
                dispatch(setIsRequestInboxNotification(true));
                history.push('/requests');
                // TODO: create snackbar notification on RequestsInbox page
              }}
            >
              Reject
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={() => {
                dispatch(reqDecisionRequestFetch('Approved', [id]));
                dispatch(setIsRequestInboxNotification(true));
                history.push('/requests');
                // TODO: create snackbar notification on RequestsInbox page
              }}
            >
              Approve
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestDetailsAccess;

interface RequestDetailsAccessProps {
  requestListType: string;
}
