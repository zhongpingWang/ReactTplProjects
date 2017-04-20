//npm
import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import { createStore, applyMiddleware,compose,bindActionCreators,combineReducers } from 'redux';
import { Provider,connect } from 'react-redux';
import thunk from 'redux-thunk';
import { Router, Route, browserHistory,Link,IndexRoute,hashHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import DevTools from './devTools/DevTools';  
 

import './less/index'

import AppReducer from './reducers/index' 


const reducer = combineReducers(Object.assign({}, AppReducer, {
  routing: routerReducer
})); 


 

//store
const finalCreateStore = compose(
  applyMiddleware(thunk)
  ,DevTools.instrument()
)(createStore);

const store = finalCreateStore(reducer);   



import App from './containers/App'
import A from './containers/A'
import B from './containers/B'
import C from './containers/C'
import NoMatch from './Components/NoMatch'
 
 
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
