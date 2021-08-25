import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_ENDPOINT,
  cache: new InMemoryCache(),
  onError: ({ networkError, graphQLErrors }) => {       
    console.log('graphQLErrors', graphQLErrors)       
    console.log('networkError', networkError)     
  }
});

ReactDOM.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
