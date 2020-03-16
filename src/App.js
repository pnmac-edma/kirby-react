import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import NavigationContainer from './Components/Scenes/Chrome/Navigation/Navigation-Container';

export default function App() {
  const theme = useSelector(({ chrome }) => chrome.theme);
  const kirby = createMuiTheme(theme);

  useEffect(() => {
    document.body.className = theme.palette.type === 'light' ? 'light' : 'dark';
    return () => {
      document.body.className = '';
    };
  });

  return (
    <ThemeProvider theme={kirby}>
      <div className="App">
        <CssBaseline />
        <NavigationContainer />
      </div>
    </ThemeProvider>
  );
}
