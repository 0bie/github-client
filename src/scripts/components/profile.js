import React from 'react';
import {Query} from 'react-apollo';
import {Spinner} from '@0bie/pattern-lib-react';
import {GET_REPOSITORIES} from '../utils/queries';
import RepositoryList from './repositoryList';
import ErrorMessage from './error';

export default function Profile() {
  return (
    <Query query={GET_REPOSITORIES}>
      {({data, loading, error}) => {
        console.log('error: ', error);
        if (error) {
          handleError(error);
        }
        const {viewer} = data;
        return handleViewer(viewer, loading);
      }}
    </Query>
  );
}

function handleViewer(viewer, isLoading) {
  if (!viewer || isLoading) {
    return <Spinner size="xl" classNames={['spinner--default']} />;
  } else {
    return <RepositoryList  repositories={viewer.repositories} />;
  }
}

function handleError(error) {
  return <ErrorMessage error={error} />;
}
