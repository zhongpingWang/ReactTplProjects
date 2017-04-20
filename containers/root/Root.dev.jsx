import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from '../../Components/App'; 
import DevTools from '../../reduxConfig/DevTools';
import routes from '../../routes/index';

 

export default class Root extends Component {
  render() {
    const { store, history} = this.props;
    return (
      <Provider store={store}>
        <div>
          {routes(history)}
          <DevTools />
        </div>
      </Provider>
    );
  }
}