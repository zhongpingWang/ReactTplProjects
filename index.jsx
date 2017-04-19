//npm
import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import { createStore, applyMiddleware,compose,bindActionCreators } from 'redux';
import { Provider,connect } from 'react-redux';
import thunk from 'redux-thunk';
import { Router, Route, browserHistory,Link,IndexRoute,hashHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
 

import './less/index'

import AppReducer from './redux/index' 
//store
const finalCreateStore = compose(
  applyMiddleware(thunk)
)(createStore);

const store = finalCreateStore(AppReducer);   



import App from './Components/App'
import A from './components/A'
import B from './components/B'
import C from './components/C'
import NoMatch from './components/NoMatch'
 
 
const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
  <Provider store={store}> 
    <Router history={history}> 
      <Route path="/" component={App}>
      <IndexRoute component={A}/>
        <Route path="A" component={A}/>
        <Route path="B" component={B}/>
        <Route path="C" component={C}/> 
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);


 