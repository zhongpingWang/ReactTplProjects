import React,{Component} from 'react'  
import { immutableRenderDecorator } from 'react-immutable-render-mixin';

@immutableRenderDecorator
export default class AList extends Component {
  render() { 
  

  	let {data,loading}=this.props.AppReducer,

  		loadingNode=(<div>loading</div>),

  		node=null;

  		if (!loading) {
  			let keys=Object.keys(data.future);
  			node= keys.map(function(key){
  			 	let item=data.future[key];
  			 	return <div key={item.date}>{item.date}---{item.weather}---{item.temperature}</div>
  			 });
  		}  
    return (  <div>{loading && loadingNode || node}</div>)
  }
} 

 