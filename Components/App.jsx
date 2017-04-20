import React, { Component, PropTypes } from 'react'
import {  Link } from 'react-router' 
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as AppactionCreators from '../actions/appAction'

import '../less/index'
 

class App extends Component {
  render() {
  
    return (
      <div>
          <div id="topBar">
            <ul className="navHeader"> 
                <li className="item"><Link to="/A" activeClassName="selected">A</Link></li>
                <li className="item"><Link to="/B" activeClassName="selected">B</Link></li>
                <li className="item"><Link to="/C" activeClassName="selected">C</Link></li> 
              </ul> 
          </div>
          <div id="bodyContent">{this.props.children}</div>
      </div>
    )
  }
} 
 


function mapDispatchToProps(dispatch) {
  return{ AppActions: bindActionCreators(AppactionCreators, dispatch)}
} 

//export default connect(state => state,mapDispatchToProps)(App)

export default App