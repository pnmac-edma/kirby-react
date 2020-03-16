import * as types from './types';
import kirbyTheme from '../../Theme';

// Define Kirby theme colors using EDMA Design Tokens in reducer,
// so that we can let users customize them later.
export const initialState = {
  theme: {
    typography: kirbyTheme.typography,
    palette: kirbyTheme.palette
  }
};

const chromeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.SET_THEME: {
      // Toggles between light and dark modes.
      // This uses all the values defined above, except for palette type.
      const { palette } = state.theme;
      const newPaletteType = palette.type === 'light' ? 'dark' : 'light';
      return {
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
    default:
      return state;
  }
};

export default chromeReducer;
