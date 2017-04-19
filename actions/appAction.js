 
import * as ActionType from './actionType' 
 
//页面加载
export function fetchData(params){ 

	return (dispatch)=>{ 
		//发起请求
		dispatch({
			type:ActionType.REQUEST
		}); 
	 
		setTimeout(()=>{

			dispatch({
				type:ActionType.SUCCESS,
				data:[{name:"小明",id:1},{name:"小红",id:2}]
			});

		},2000);
	} 
} 