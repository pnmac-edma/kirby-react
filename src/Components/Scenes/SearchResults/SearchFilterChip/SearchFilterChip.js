import React from 'react';
import { Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'block',
    textAlign: 'right',
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
    const filteredByCap = filteredBy.charAt(0).toUpperCase() + filteredBy.slice(1);
    const shortNamesforType = filteredChip[filteredBy][1];
    let filterType;
    if (shortNamesforType === 'in') {
      filterType = 'contains';
    } else if (shortNamesforType === 'eq') {
      filterType = '=';
    } else {
      filterType = 'doesn\'t contain';
    }

    const searchTerm = filteredChip[filteredBy][0];
    chips.push(
      <Chip
        key={id}
        label={`${filteredByCap} ${filterType} "${searchTerm}"`}
        onDelete={() => handleRemoveChip(id)}
      />
    );
  });
  return <div className={classes.root}>{chips}</div>;
};

export default SearchFilterChip;
