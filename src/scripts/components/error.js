import React from 'react';

export default function ErrorMessage({error}) {
  return (
    <div>
      <small>{error.toString()}</small>
    </div>
  );
}
