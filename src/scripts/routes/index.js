import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {asyncComponent} from '../utils/asyncComponent';

/**
 * Explicitly define module paths for chunking
 * Reference: https://bit.ly/2Anj5rw https://bit.ly/2veB4dH
 */

const route1 = asyncComponent(() => import('./route-1'));
const route2 = asyncComponent(() => import('./route-2'));
const route3 = asyncComponent(() => import('./route-3'));
const route404 = asyncComponent(() => import('./route-404'));

export default () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={route1}
      />
      <Route
        path="/route-2"
        component={route2}
      />
      <Route
        path="/route-3"
        component={route3}
      />
      <Route component={route404} />
    </Switch>
  );
};
