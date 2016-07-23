import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import appReducers from '../reducers';

const store = createStore(appReducers);

export default Component =>
  class extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <Provider store={store}>
          <Component {...this.props} />
        </Provider>
      );
    }
  };
