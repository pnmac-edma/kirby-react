import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Navigation from './Components/Scenes/Chrome/Navigation/Navigation';

export default function App() {
  const theme = useSelector(({ chrome }) => chrome.theme);
  const kirby = createMuiTheme(theme);

  useEffect(() => {
    document
      .querySelector('#root')
      .classList.add(theme.palette.type === 'light' ? 'light' : 'dark');
    return () => {
      document
        .querySelector('#root')
        .classList.remove(theme.palette.type === 'light' ? 'light' : 'dark');
    };
  });

  return (
    <ThemeProvider theme={kirby}>
      <div className="App">
        <CssBaseline />
        <Navigation />
      </div>
    </ThemeProvider>
  );
}
