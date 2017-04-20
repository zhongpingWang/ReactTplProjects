import * as ActionType from '../actions/actionType'


let initState={
	data:[],
	loading:true
}

//Store
export default function AppStore(state=initState,action){ 
	//处理action
	return AppStore[action.type] && AppStore[action.type](state,action) || state;
} 

//request
AppStore[ActionType.REQUEST]=function(state,action){   
	return Object.assign({},state,{loading:true}); 
}

//fetch success
AppStore[ActionType.SUCCESS]=function(state,action){   
	return Object.assign({},state,{loading:false,data:action.data}); 
}