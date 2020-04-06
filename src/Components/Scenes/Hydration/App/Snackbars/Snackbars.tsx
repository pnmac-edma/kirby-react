import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Snackbar, IconButton } from '@material-ui/core';
import { color } from '@edma/design-tokens';
import { Close } from '@material-ui/icons';
import {
  setIsSnackbarOpen,
  setSnackbarExit
} from '../../../../../State/Hydration/actions';

const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5)
  },
  sourceText: {
    color: color.b500
  },
  transformText: {
    color: color.v400
  },
  destinationText: {
    color: color.t800
  }
}));

const Snackbars = () => {
  const classes = useStyles();
  const isSnackbarOpen = useSelector(
    ({ hydration }: any) => hydration.isSnackbarOpen
  );
  const snackbarText = useSelector(
    ({ hydration }: any) => hydration.snackbarText
  );
  const dispatch = useDispatch();

  const setClose = (
    event: React.SyntheticEvent | MouseEvent,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(setIsSnackbarOpen(false));
  };

  const textMatch = /(kirby\s|non-kirby\s)?(sources?)(\stiles?)?|(transforms?)(\stiles?)|(destinations?)(\stiles?)/gi;
  const highlightedSnackbarText = () => {
    return (
      <div>
        {snackbarText.replace(textMatch, (matched: string) => {
          const lowercaseMatched = matched.toLowerCase();
          if (lowercaseMatched.includes('source')) {
            return <span className={classes.sourceText}>{matched}</span>;
          }
          if (lowercaseMatched.includes('transform')) {
            return <span className={classes.transformText}>{matched}</span>;
          }
          if (lowercaseMatched.includes('destination')) {
            return <span className={classes.destinationText}>{matched}</span>;
          }
          return matched;
        })}
      </div>
    );
  };
  console.log(highlightedSnackbarText);

  return (
    <Snackbar
      action={
        <IconButton
          aria-label="close"
          color="inherit"
          className={classes.close}
          onClick={setClose}
        >
          <Close />
        </IconButton>
      }
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      autoHideDuration={6000}
      message={<>{highlightedSnackbarText()}</>}
      open={isSnackbarOpen}
      onClose={setClose}
      onExited={() => dispatch(setSnackbarExit())}
    />
  );
};

export default Snackbars;

// <Snackbar
//  key={messageInfo ? messageInfo.key : undefined}
//  onExited={handleExited} // ??? what is this
//  message={messageInfo ? messageInfo.message : undefined} // not needed
// />

// {/* <div className='MuiSnackbar-root MuiSnackbar-anchorOriginBottomRight'>
//         {snackbarText}
//       </div> */}
//     {/* </Snackbar> */}
