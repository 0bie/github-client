import React, {Fragment} from 'react';
import {List, ListItem} from '@0bie/pattern-lib-react';
import {ReactionsList} from './index';

export default function Issues({issues}) {

  if (!issues || !issues.length > 0) {
    return <p>This repository currently has no issues.</p>;
  };
  return (
    <List>
      {issues.map((issue) =>
        <ListItem
          key={issue.node.id}
          content={IssueItem(issue.node.url, issue.node.title, issue.node.reactions)}
        />)}
    </List>
  );
}

function IssueItem(url, title, reactions) {
  return (
    <Fragment>
      <a href={url}>{title}</a>
      <ReactionsList reactions={reactions} />
    </Fragment>
  );
}
