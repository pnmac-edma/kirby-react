import React from 'react';
import { Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5)
    }
  }
}));

const SearchFilterChip = props => {
  const classes = useStyles();
  const { filterQueries, handleRemoveChip } = props;
  const chips = [];
  filterQueries.forEach((filteredChip, id) => {
    const filteredBy = Object.keys(filteredChip)[0];
    let shortNamesforContain = filteredChip[filteredBy][1];
    let contain;
    if (shortNamesforContain === 'in') {
      contain = 'contain';
    } else if (shortNamesforContain === 'eq') {
      contain = 'equal';
    } else {
      contain = 'not contain';
    }

    const searchTerm = filteredChip[filteredBy][0];
    chips.push(
      <Chip
        key={id}
        label={`${filteredBy} ${contain} ${searchTerm}`}
        onDelete={() => handleRemoveChip(id)}
      />
    );
  });
  return <div className={classes.root}>{chips}</div>;
};

export default SearchFilterChip;
