import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { BrowserRouter as Route, Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  },
  underline: {
    textDecoration: 'none'
  }
}));

const CheckBoxButton = props => {
  const classes = useStyles();
  const { searchResultCopy, requestAssetsClick } = props;
  const searchResultChecked = searchResultCopy.filter(obj => obj.checked);

  return (
    <React.Fragment>
      <Link to="/RequestAsset" className={classes.underline}>
        <Button
          color="primary"
          variant="contained"
          disabled={searchResultChecked.length <= 0}
          className={classes.button}
          onClick={() => requestAssetsClick(searchResultChecked)}
        >
          {searchResultChecked.length === 1
            ? `Request ${searchResultChecked.length} Asset`
            : searchResultChecked.length > 1
            ? `Request ${searchResultChecked.length} Assets`
            : 'Request Asset'}
        </Button>
      </Link>
    </React.Fragment>
  );
};

export default CheckBoxButton;
