//npm
import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import { createStore, applyMiddleware,compose,bindActionCreators } from 'redux';
import { Provider,connect } from 'react-redux';
import thunk from 'redux-thunk';
 

import './less/index'

import AppReducer from './redux/index' 
//store
const finalCreateStore = compose(
  applyMiddleware(thunk)
)(createStore);

const store = finalCreateStore(AppReducer);   


import * as AppactionCreators from './actions/appAction';

let AppComponent = React.createClass({ 

	componentWillMount(){ 
		this.props.AppActions.fetchData();
	},
	 
	render(){

		let loading=(<div>loading</div>),
			users=this.props.AppReducer.data.map((item)=>{ 
				return (<div key={item.id}>{item.name}</div>);
			}),
			isLoading=this.props.AppReducer.loading; 
	   
	    return ( 
	    	<div id="app" className="app">
	        	 Empty React Project! <span className="reLoad" onClick={()=>{this.props.AppActions.fetchData();}}>刷新</span>
	        	 {isLoading && loading || users}
	       </div>
	    );
	}

}); 
 
function mapDispatchToProps(dispatch) {
  return{ AppActions: bindActionCreators(AppactionCreators, dispatch)}
}
 
let App = connect(state => state,mapDispatchToProps)(AppComponent)


ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById("app"));