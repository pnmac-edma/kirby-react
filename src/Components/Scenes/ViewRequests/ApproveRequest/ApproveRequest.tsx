import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Divider, Typography } from '@material-ui/core';
import { WarningRounded } from '@material-ui/icons';
import { color, font, fontSize } from '@edma/design-tokens';
import { transformRequests } from '../../../../State/helpers';

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

const ApproveRequest = () => {
  const classes = useStyles();

  const { inboundRequests } = useSelector(
    ({ viewRequests }: any) => viewRequests
  );
  const userRole = useSelector(({ currentUser }: any) => currentUser.role);

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

  const { id } = useParams();
  const reqs = transformRequests(inboundRequests, userRole);
  const currentRequest = reqs.find(
    (request: any) => request.Id.toString() === id
  );
  const { requestdata } = currentRequest;
  const {
    databasename,
    description,
    domain,
    justification,
    owner,
    sensitivity
  } = requestdata;

  return (
    <div className={classes.flexStructure}>
      <div className={classes.sidebar}>
        <div className={classes.sidebarPosition}>
          <Typography variant="h2" className={classes.heading}>
            Add Destination
          </Typography>
          <Typography variant="overline" className={classes.menuStyle}>
            Destination Name
          </Typography>
          <Typography className={classes.title}>{databasename}</Typography>
          <Divider className={classes.dividerStyle} />
          <Typography variant="overline" className={classes.menuStyle}>
            Sensitivity
          </Typography>
          <Typography className={classes.title}>
            {sensitivityIcon(sensitivity)} {sensitivity}
          </Typography>
          <Divider className={classes.dividerStyle} />
          <Typography variant="overline" className={classes.menuStyle}>
            Domain
          </Typography>
          <Typography className={classes.title}>{domain}</Typography>
          <Divider className={classes.dividerStyle} />
          <Typography variant="overline" className={classes.menuStyle}>
            Manager
          </Typography>
          <Typography className={classes.title}>{owner}</Typography>
        </div>
      </div>
      <div className={classes.sideTable}>
        <Typography variant="overline" className={classes.menuStyle}>
          Description
        </Typography>
        <Typography className={classes.title}>{description}</Typography>
        <br />
        <Typography variant="overline" className={classes.menuStyle}>
          Justification
        </Typography>
        <Typography className={classes.title}>{justification}</Typography>
        <br />
        <div>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={() => {
              // TODO: make call to api to approve request
              // TODO: create snackbar notification on RequestsInbox page
            }}
          >
            Approve
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            onClick={() => {
              // TODO: make call to api to reject request
              // TODO: create snackbar notification on RequestsInbox page
            }}
          >
            Reject
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ApproveRequest;
