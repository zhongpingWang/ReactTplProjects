import * as ActionType from '../actions/actionType'
import Immutable from 'Immutable'


let initState= Immutable.Map({
	data:{},
	loading:true
}) 

//Store
export default function AppStore(state=initState,action){ 
	//处理action
	return AppStore[action.type] && AppStore[action.type](state,action) || state;
} 

//request
AppStore[ActionType.REQUEST]=function(state,action){   
	return  state.set("loading",true);
}

//fetch success
AppStore[ActionType.SUCCESS]=function(state,action){   

	state=state.set("loading",false);
	 
	return state.set("data",action.data);
}
 

//  function counter(state = Immutable.Map({count:1,my:[{key:1},{key:2}]}), action) {
//   switch (action.type) {
//     case 'INCREMENT': 
//       //return  state.set("count",state.toJS().count+1); 
//       state= state.update("count",count=>count+1); 
//       return state.update("my",x=>{
//         x.map(item=>{
//            if (item.key==1) {
//             item.z=3;
//            }
//         });
       
//         return x;
//       });  
//     // case 'DECREMENT':
//     //   return {count:state.count - 1}
//     default:
//       return state
//   }
// }