import React,{Component} from 'react'  
import AList from './AList'


export default class A extends Component {

	componentWillMount() { 
		this.props.AppActions.fetchData();
	}

  render() { 
    return (  <div>A <AList {...this.props}/></div> )
  }
} 

 