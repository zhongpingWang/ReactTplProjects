 
import * as ActionType from './actionType' 
 
import Api from '../api/api'

//页面加载
export function fetchData(){ 

	return (dispatch)=>{ 
		//发起请求
		dispatch({
			type:ActionType.REQUEST
		}); 

		Api.fetch({URLtype:"gitw"}).then((res)=>{
			if (res.error) {
				//error
			}else{
				dispatch({
					type:ActionType.SUCCESS,
					data:res.response.result
				});
			}
		});
	} 
} 