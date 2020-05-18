import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import { color } from '@edma/design-tokens';
import { makeStyles } from '@material-ui/core/styles';
import GovernanceTable from './GovernorsTable';
import SensitivityTable from './SensitivityTable';
import DomainManagerTable from './DomainManagerTable';

const useStyles = makeStyles(theme => ({
  heading: {
    margin: '1rem .5rem 2rem',
    color: theme.palette.type === 'light' ? color.black : color.white
  },
  rightSide: {
    paddingRight: 12,
    textAlign: 'right'
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
      <div>
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
        <GovernanceTable
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
    ),
    sensitivityAndManager: (
      <div>
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
        <>
          {curPath === '/governance/sensitivity-levels' ? (
            <SensitivityTable
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          ) : (
            <DomainManagerTable
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          )}
        </>
      </div>
    )
  };

  return (
    <div>
      <div>
        <Typography variant="h2" className={classes.heading}>
          Governance
        </Typography>
      </div>
      <>
        {curPath === '/governance/governors'
          ? governanceStates.governors
          : governanceStates.sensitivityAndManager}
      </>
    </div>
  );
};

export default Governance;
