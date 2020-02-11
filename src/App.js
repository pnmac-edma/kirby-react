import React, { useState } from 'react';
import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import color from '@edma/design-tokens/js/color';
import fontSize from '@edma/design-tokens/js/fontSize';
import weight from '@edma/design-tokens/js/weight';
import spacing from '@edma/design-tokens/js/spacing';
import NavigationContainer from './Components/Scenes/Chrome/Navigation/Navigation-Container';

export default function App() {
  // Define Kirby theme colors using EDMA Design Tokens in a hook,
  // so that we can let users customize them later.
  const [theme, setTheme] = useState({
    typography: {
      body1: {
        fontFamily: 'Open Sans',
        maxWidth: 600
      },
      body2: {
        fontFamily: 'Open Sans'
      },
      h1: {
        fontFamily: 'Gilroy',
        fontSize: fontSize['h1'],
        fontWeight: weight['bold'],
        '&:after': {
          content: '',
          background: color.y400,
          position: 'relative',
          display: 'block',
          marginBottom: spacing['2'],
          width: 64,
          height: 8
        }
      },
      h2: {
        fontFamily: 'Gilroy',
        fontSize: fontSize['h2'],
        fontWeight: weight['bold'],
        maxWidth: 600,
        '& span': {
          fontSize: 14,
          textTransform: 'uppercase',
          letterSpacing: 2,
          display: 'block',
          marginBottom: 8
        },
        '&:after': {
          content: '',
          background: color.y400,
          position: 'relative',
          display: 'block',
          marginBottom: spacing['3'],
          width: 64,
          height: 4,
          top: 8
        }
      },
      h3: {
        fontFamily: 'Open Sans',
        fontWeight: 'normal',
        color: color.g700,
        minWidth: 260,
        maxWidth: 600,
        fontSize: fontSize['h3'],
        lineHeight: 1.33,
        letterSpacing: 0
      },
      h4: {
        fontFamily: 'Gilroy',
        maxWidth: 600
      },
      h5: {
        fontFamily: 'Gilroy',
        maxWidth: 600
      },
      h6: {
        fontFamily: 'Gilroy',
        letterSpacing: 1.5,
        fontSize: fontSize['body1'],
        maxWidth: 600,
        textTransform: 'uppercase',
        fontWeight: weight['bold'],
        marginTop: '0.3rem'
      }
    },
    palette: {
      type: 'light',
      primary: {
        light: color.b300,
        main: color.b700,
        dark: color.b900
      },
      secondary: {
        light: color.p300,
        main: color.p600,
        dark: color.p800
      },
      error: {
        light: color.r300,
        main: color.r600,
        dark: color.r900
      }
    }
  });

  // Toggles between light and dark modes.
  // This uses all the values defined above, except for palette type.
  const toggleDarkMode = () => {
    let newPaletteType = theme.palette.type === 'light' ? 'dark' : 'light';

    setTheme({
      typography: {
        body1: theme.typography.body1,
        body2: theme.typography.body2,
        h1: theme.typography.h1,
        h2: theme.typography.h2,
        h3: {
          fontFamily: 'Open Sans',
          fontWeight: 'normal',
          color: theme.palette.type === 'light' ? color.g300 : color.g700,
          minWidth: 260,
          maxWidth: 600,
          fontSize: fontSize['h3'],
          lineHeight: 1.33,
          letterSpacing: 0
        },
        h4: theme.typography.h4,
        h5: theme.typography.h5,
        h6: theme.typography.h6
      },
      palette: {
        type: newPaletteType,
        primary: {
          light: theme.palette.primary.light,
          main: theme.palette.primary.main,
          dark: theme.palette.primary.dark
        },
        secondary: {
          light: theme.palette.secondary.light,
          main: theme.palette.secondary.main,
          dark: theme.palette.secondary.dark
        },
        error: {
          light: theme.palette.error.light,
          main: theme.palette.error.main,
          dark: theme.palette.error.dark
        }
      }
    });
  };

  const kirby = createMuiTheme(theme);
  return (
    <ThemeProvider theme={kirby}>
      <div className="App">
        <CssBaseline />
        <NavigationContainer themeToggle={toggleDarkMode} />
      </div>
    </ThemeProvider>
  );
}
