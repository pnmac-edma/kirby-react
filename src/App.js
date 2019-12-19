import React, { useState } from 'react';
import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import color from '@edma/design-tokens/js/color';
import NavigationContainer from './Components/Scenes/Chrome/Navigation/Navigation-Container';

export default function App() {
  // Define Kirby theme colors using EDMA Design Tokens in a hook,
  // so that we can let users customize them later.
  const [theme, setTheme] = useState({
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
