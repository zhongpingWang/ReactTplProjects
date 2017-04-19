import React,{Component} from 'react' 
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as AppactionCreators from '../actions/appAction'

class A extends Component {
  render() {
  	console.log(this.props)
    return (  <div>A</div> )
  }
}


function mapDispatchToProps(dispatch) {
  return{ AppActions: bindActionCreators(AppactionCreators, dispatch)}
} 

export default connect(state => state,mapDispatchToProps)(A)