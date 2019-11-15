import React, { useState } from 'react';
import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import color from '@edma/design-tokens/js/color';
import Navigation from './Components/Presentational/Chrome/Navigation';

export default function App() {
  // Define Kirby theme colors using EDMA Design Tokens in a hook,
  // so that we can let users customize them later.
  const [theme, setTheme] = useState({
    palette: {
      type: 'light',
      primary: {
        light: color.b100,
        main: color.b300,
        dark: color.b500
      },
      secondary: {
        light: color.p100,
        main: color.p300,
        dark: color.p500
      },
      error: {
        light: color.r100,
        main: color.r300,
        dark: color.r500
      }
    }
  });

  // Toggles between light and dark modes.
  // This uses all the values defined above, except for palette type.
  const toggleDarkMode = () => {
    let newPaletteType = theme.palette.type === 'light' ? 'dark' : 'light';

    setTheme({
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
        <Navigation themeToggle={toggleDarkMode} />
      </div>
    </ThemeProvider>
  );
}
