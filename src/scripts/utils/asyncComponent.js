import React, {Component} from 'react';
import {Spinner} from '@0bie/pattern-lib-react';

/**
 * @param {function} getComponent - Callback that imports a given component
 */

export function asyncComponent(getComponent) {

  class AsyncComponent extends Component {
    constructor(props) {
      super(props);
    }
    state = {
      component: null
    }
    async componentDidMount() {
      const {default: component} = await getComponent();
      this.setState(() => ({
        component
      }))
    }
    render() {
      const Component = this.state.component;
      return Component ? <Component {...this.props} /> : <Spinner size="xxl" classNames={['spinner--default']} />;
    }
  }
  return AsyncComponent;

}

// https://medium.com/@assortedPickle/es6-static-properties-b7fd2a163328
