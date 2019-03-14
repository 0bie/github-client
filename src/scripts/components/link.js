import React from 'react';

export default function Link({children, ...props}) {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
