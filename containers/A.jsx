import A from '../Components/A'
import * as AppactionCreators from '../actions/appAction'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
 


function mapDispatchToProps(dispatch) {
  return{ AppActions: bindActionCreators(AppactionCreators, dispatch)}
}  

export default connect(state=>state,mapDispatchToProps)(A)