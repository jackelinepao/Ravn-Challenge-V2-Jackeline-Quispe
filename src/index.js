import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from "@apollo/client"
import { client } from "./utils/apolloClient"
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from 'react-jss';
import theme from './assets/styles/theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <Router>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </Router>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
