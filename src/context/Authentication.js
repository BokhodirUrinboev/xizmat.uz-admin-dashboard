import React from "react";
import { createContext, useEffect, useState } from 'react';

import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
  split
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { getMainDefinition } from '@apollo/client/utilities';

const Context = createContext(null);

function Provider({ children }) {

  const [state, setState] = useState(JSON.parse(window.localStorage.getItem('token')))
  useEffect(() => {
    if (state) {
      window.localStorage.setItem('token', JSON.stringify(state))
    } else {
      window.localStorage.removeItem('token')
    }
  }, [state])

  const httpLink = createHttpLink({
    uri: process.env.REACT_APP_HASURA_URL
  });

  const authLink = setContext((_, { headers }) => {
    if (state) {
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${state}`
        }
      };
    } else {
      return {
        headers: {
          ...headers
        }
      };
    }
  });

  const link = split(
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query);
      return (
        kind === 'OperationDefinition' &&
        operation === 'subscription'
      );
    },
    authLink.concat(httpLink)
  );

  const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
  });

  return (
    <Context.Provider value={{ state, setState }}>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </Context.Provider>
  )
}

export { Context, Provider };