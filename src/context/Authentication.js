import React from "react";
import { createContext, useEffect, useState } from 'react';


// Apollo client configure
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

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
    uri: 'https://hasura-8c530141.nhost.app/v1/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: state ? `Bearer ${state}` : "",
      }
    }
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({})
  });

  return (
    <Context.Provider value={{ state, setState }}>
      <ApolloProvider client={client}>
        {children}
      </ApolloProvider>
    </Context.Provider>
  )
}

export { Context, Provider };