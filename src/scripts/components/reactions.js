import React from 'react';

export default function ReactionsList({reactions}) {
  // console.log('reactions: ', reactions);
  return (
    <div className="reactions-container">
      <ul className="reactions-list">
        {reactions.edges.map((reaction) =>
          <li key={reaction.node.id} className="reaction-item">
            <div className={`reaction reaction--${reaction.node.content.toLowerCase()}`} />
          </li>)}
      </ul>
    </div>
  );
}
