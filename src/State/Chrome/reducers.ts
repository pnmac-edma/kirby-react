import * as types from './types';
import kirbyTheme from '../../Theme';

// Define Kirby theme colors using EDMA Design Tokens in reducer,
// so that we can let users customize them later.
export const initialState = {
  theme: {
    typography: kirbyTheme.typography,
    palette: kirbyTheme.palette
  },
  jobName: 'Job Name'
};

const chromeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.SET_THEME: {
      // Toggles between light and dark modes.
      // This uses all the values defined above, except for palette type.
      const { palette } = state.theme;
      const newPaletteType = palette.type === 'light' ? 'dark' : 'light';
      return {
        ...state,
        theme: {
          ...state.theme,
          palette: {
            type: newPaletteType,
            primary: {
              light: palette.primary.light,
              main: palette.primary.main,
              dark: palette.primary.dark
            },
            secondary: {
              light: palette.secondary.light,
              main: palette.secondary.main,
              dark: palette.secondary.dark
            },
            error: {
              light: palette.error.light,
              main: palette.error.main,
              dark: palette.error.dark
            }
          }
        }
      };
    }
    case types.SET_JOB_NAME: {
      const { jobName } = action;
      return {
        ...state,
        jobName
      };
    }
    case types.SET_DEFAULT_JOB_NAME_ON_BLUR: {
      const { jobName } = action;
      return {
        ...state,
        jobName: jobName ? jobName : 'Untitled'
      };
    }
    default:
      return state;
  }
};

export default chromeReducer;
