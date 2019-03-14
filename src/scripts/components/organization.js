import React, {Fragment} from 'react';
import {Repository} from './index';

export default function Organization({organization, errors, handleFavorite}) {
  // console.log('organization: ', organization);
  if (errors) {
    return (
      <p className="mb--sm">
        <strong>Something went wrong: </strong>
        {errors.map((error) => error.message.join(' '))}
      </p>
    );
  }
  return (
    <Fragment>
      <p className="mb--xs">
        <strong>Issues from Organization: </strong>
        <a href={organization.url}>{organization.name}</a>
      </p>
      <Repository
        handleFavorite={handleFavorite}
        repository={organization.repository}
      />
    </Fragment>
  );
}
