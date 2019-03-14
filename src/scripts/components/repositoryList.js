import React from 'react';
import {List, ListItem} from '@0bie/pattern-lib-react';
import RepositoryItem from './repositoryItem';

export default function RepositoryList({repositories}) {
  return (
    <List>
      {repositories.edges.map(({node}) => (
        <ListItem
          key={node.id}
          classNames={['repository-item']}
          content={repositoryItem(node)}
        >
      </ListItem>))}
    </List>
  );
}

function repositoryItem(node) {
  return <RepositoryItem {...node} />;
}
