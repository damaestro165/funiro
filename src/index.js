import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

import './index.css';
import { store } from './store';
import { Provider } from 'react-redux';
import '@fontsource/flow-circular';

const theme = extendTheme({
  fonts: {
    heading: ` "Flow Circular", sans-serif;`,
    body: ` "Flow Circular"", sans-serif`,
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
