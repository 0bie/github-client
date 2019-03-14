import React, {Fragment} from 'react';
import {Button} from '@0bie/pattern-lib-react';
import {Issues} from './index';

export default function Repository({repository, handleFavorite}) {
  // console.log('respository: ', repository);
  if (!repository) {
    return <p>Sorry, that repository is either private or doesn't exist.</p>
  }
  const label = repository.viewerHasStarred ? 'Unstar' : 'Star';
  return (
    <Fragment>
      <div className="repository mb--sm">
        <div className="repository-title">
          <strong>In Repository: </strong>
          <a href={repository.url}>{repository.name}</a>
        </div>
        <Button
          size="xs"
          label={label}
          iconPosition="left"
          title={`${label} this repository`}
          classNames={['btn--primary', 'btn--repository']}
          icon={{id: 'star', size: 'xs', classNames: ['vert--mid', 'mr--xxs']}}
          onClick={handleFavorite.bind(null, repository.id, repository.viewerHasStarred)}
        />
      </div>
      {(repository && repository.issues.edges.length > 0) ?
        <Issues issues={repository.issues.edges} />
      : null}
    </Fragment>
  );
}
