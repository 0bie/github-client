import React, {Component, Fragment} from 'react';
import {HttpLink} from 'apollo-link-http';
import {ApolloClient} from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import {InMemoryCache} from 'apollo-cache-inmemory'

import Profile from '../components/profile';

const cache = new InMemoryCache();
const GITHUB_BASE_URL = 'https://api.github.com/graphql';
const httpLink = new HttpLink({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: `Bearer ${process.env.GITHUB_TOKEN}`
  }
});

const client = new ApolloClient({
  link: httpLink,
  cache
});

export default class RouteTwo extends Component {

  render() {
    return (
      <div className="p--md">
        <h3 className="mb--xs">
          <a className="mr--xxs" href="http://bitly.com/2G9bvTj">
            GitHub API v4
          </a>
          <span>Client</span>
        </h3>
        <ApolloProvider client={client}>
          <Profile />
        </ApolloProvider>
      </div>
    );
  }

}
