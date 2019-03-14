import React from 'react';
import {Link} from 'react-router-dom';

export default function Navigation({...props}) {
  return (
    <nav className="navigation-container">
      <ul className="navigation" {...props}>
        <li className="navigation-item"><Link to="/" tabIndex="0">Axios Example</Link></li>
        <li className="navigation-item"><Link to="/route-2" tabIndex="0">Apollo Example</Link></li>
      </ul>
    </nav>
  );
}
