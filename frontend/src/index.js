import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks'

//Created Apllo Client
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

//Wrap root component i.e App in between ApolloProvider to use apollo settings

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
