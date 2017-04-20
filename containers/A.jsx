import A from '../Components/A'
import { createSelector } from 'reselect';
import * as AppactionCreators from '../actions/appAction'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';


const stateSelector = (state) => state.toJS();

const SelectorState = createSelector(
  [stateSelector],
  (stateSelector) => {
    return {
  		...stateSelector
    };
  }
);


function mapDispatchToProps(dispatch) {
  return{ AppActions: bindActionCreators(AppactionCreators, dispatch)}
}  

export default connect(state=>state.toJS(),mapDispatchToProps)(A)