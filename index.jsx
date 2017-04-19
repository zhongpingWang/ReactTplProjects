//npm
import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import './less/index'



let App = React.createClass({

	// getDefaultProps(){
	// 	return{
	// 		def:null
	// 	}
	// },

	// getInitialState() { 
	// 	return {
	// 		loading:true
	// 	} 
	// }, 

	//componentWillMount(){},

	//componentDidMount(){},

	//componentWillReceiveProps(){},

	//shouldComponentUpdate(){},

	//componentWillUpdate(){},

	//componentDidUpdate(){},

	//componentWillUnmount(){},

	render(){ 
	  
	    return ( 
	    	<div id="app" className="app">
	        	 Empty React Project!
	       </div>
	    );
	}

});



ReactDOM.render(<App />,document.getElementById("app"));