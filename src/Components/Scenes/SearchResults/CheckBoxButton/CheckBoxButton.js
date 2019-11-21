import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

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
  const { searchResultCopy, requestAssetsClick } = props;
  const classes = useStyles();
  const searchResultChecked = searchResultCopy.filter(obj => obj.checked);
  const searchResultLength = searchResultChecked.length;
  const buttonText =
    searchResultLength === 1
      ? `Request ${searchResultLength} Asset`
      : searchResultLength > 1
      ? `Request ${searchResultLength} Assets`
      : 'Request Asset';

  return (
    <>
      <Link to="/search/access" className={classes.underline}>
        <Button
          color="primary"
          variant="contained"
          disabled={searchResultLength <= 0}
          className={classes.button}
          onClick={() => requestAssetsClick(searchResultChecked)}
        >
          {buttonText}
        </Button>
      </Link>
    </>
  );
};

export default CheckBoxButton;
