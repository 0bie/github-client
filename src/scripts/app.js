import React, {Component} from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import Routes from './routes';
import {Navigation} from './components';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Routes />
        </div>
      </Router>
    );
  }
}

render(
  <App />,
  document.getElementById('root')
);
