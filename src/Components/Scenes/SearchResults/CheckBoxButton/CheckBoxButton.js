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
  const classes = useStyles();
  const { searchResultCopy, requestAssetsClick } = props;
  const searchResultChecked = searchResultCopy.filter(obj => obj.checked);
  const searchResultLenght = searchResultChecked.length;
  const buttonText =
    searchResultLenght === 1
      ? `Request ${searchResultLenght} Asset`
      : searchResultLenght > 1
      ? `Request ${searchResultLenght} Assets`
      : 'Request Asset';

  return (
    <>
      <Link to="/RequestAsset" className={classes.underline}>
        <Button
          color="primary"
          variant="contained"
          disabled={searchResultLenght <= 0}
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
