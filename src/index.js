import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import '@fontsource/roboto';
import './index.css';
import { store } from './store';
import { Provider } from 'react-redux';

const theme = extendTheme({
  fonts: {
    heading: `"Roboto", sans-serif;`,
    body: `"Roboto", sans-serif`,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </Provider>
);
