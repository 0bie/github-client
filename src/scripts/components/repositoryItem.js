import React, {Fragment} from 'react';
import Link from './link';

export default function RepositoryItem({
  url,
  name,
  owner,
  watchers,
  stargazers,
  descriptionHTML,
  primaryLanguage,
  viewerHasStarred,
  viewerSubscription
}) {

  return (
    <Fragment>
      <div className="repository-title">
        <h2>
          <Link href={url}>{name}</Link>
        </h2>
        <div className="repository-action">
          {stargazers.totalCount} Stars
        </div>
      </div>
      <div className="repository-description">
        <div className="repository-info" dangerouslySetInnerHTML={{__html: descriptionHTML}} />
        <div className="repository-details">
          <div>
            {primaryLanguage &&
            <span>Language: {primaryLanguage.name}</span>}
          </div>
          <div>
            {owner &&
              <span>
                Owner: <a href={owner.url}>{owner.login}</a>
              </span>}
          </div>
        </div>
      </div>
    </Fragment>
  );

}
