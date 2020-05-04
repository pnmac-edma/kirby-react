import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Button, TextField } from '@material-ui/core';
import { color, fontSize } from '@edma/design-tokens';
import { makeStyles } from '@material-ui/core/styles';
import GovernanceTable from './GovernorsTable';
import SensitivityTable from './SensitivityTable';
import DomainManagerTable from './DomainManagerTable';
import Sidebar from './Sidebar';

const useStyles = makeStyles(theme => ({
  flexStructure: {
    display: 'flex',
    justifyContent: 'left'
  },
  sidebar: {
    background: theme.palette.type === 'light' ? color.g100 : color.g800,
    fontSize: fontSize[1],
    marginTop: '-10rem',
    marginBottom: '-10rem',
    overflow: 'hidden',
    paddingTop: '10rem',
    maxWidth: 430,
    minWidth: 300,
    width: '100%',
    height: '184%'
  },
  sideTable: {
    width: '70%'
  },
  sideBarPostion: {
    margin: '0 1rem',
    color: theme.palette.type === 'light' ? color.black : color.white
  },
  heading: {
    margin: '1rem 0 2rem',
    color: theme.palette.type === 'light' ? color.black : color.white
  },
  paper: {
    margin: 12,
    flexGrow: 1,
    display: 'flex'
  },
  tableWrapper: {
    flexGrow: 1,
    overflowX: 'auto',
    borderRadius: 'inherit'
  },
  rightSide: {
    float: 'right',
    paddingTop: 24
  },
  button: {
    textTransform: 'none',
    fontWeight: 'bold',
    whiteSpace: 'nowrap'
  }
}));

const Governance = (props: any) => {
  const classes = useStyles();
  const curPath = useLocation().pathname;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const governanceStates = {
    governors: (
      <div className={classes.sideTable}>
        <div className={classes.paper}>
          <div className={classes.tableWrapper}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Search"
              type="text"
              onChange={() => {}}
            />
            <div className={classes.rightSide}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => setIsModalOpen(true)}
              >
                Add Governor
              </Button>
            </div>
          </div>
        </div>
        <GovernanceTable
          isModalOpenAddGovernor={isModalOpen}
          setIsModalOpenAddGovernors={setIsModalOpen}
        />
      </div>
    ),
    sensitivityAndManager: (
      <div className={classes.sideTable}>
        <div className={classes.paper}>
          <div className={classes.tableWrapper}>
            <div className={classes.rightSide}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => setIsModalOpen(true)}
              >
                {curPath === '/governance/sensitivity-levels'
                  ? `Add Sensitivity Level`
                  : `Add Domain Manager`}
              </Button>
            </div>
          </div>
        </div>
        {curPath === '/governance/sensitivity-levels' ? (
          <SensitivityTable />
        ) : (
          <DomainManagerTable
            isModalOpenAdd={isModalOpen}
            setIsModalOpenAdd={setIsModalOpen}
          />
        )}
      </div>
    )
  };

  return (
    <div className={classes.flexStructure}>
      <div className={classes.sidebar}>
        <div className={classes.sideBarPostion}>
          <Typography variant="h2" className={classes.heading}>
            Governance
          </Typography>
          <Sidebar />
        </div>
      </div>
      {curPath === '/governance/governors'
        ? governanceStates.governors
        : governanceStates.sensitivityAndManager}
    </div>
  );
};

export default Governance;
