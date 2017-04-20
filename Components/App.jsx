import React, { Component, PropTypes } from 'react'
import {  Link } from 'react-router' 
import DevTools from '../devTools/DevTools';  

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
         {/* <DevTools /> */}
      </div>
    )
  }
}   

export default App