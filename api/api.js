import 'isomorphic-fetch'
import ApiURL from './url'


let Api= {

	//封装ajax
	fetch(data) {

			if (!data) {
				return;
			}

			let url = Api.getUrlByType(data),
				Pars = data.data;

			//参数
			if (Pars) {
				for (var key in Pars) {
					if (url.substr(url.indexOf("?")).indexOf(key) < 0) {
						url += "&" + key + "=" + Pars[key];
					}
				}
			} 

			return fetch(url,{
				 mode: 'cors',
				credentials: 'include'
			}).then(response => response.json()).then(
				response => ({
					response
				}),
				error => ({
					error: error
				})
			)
		},

		//post
		post(data) {

			if (!data) {
				return;
			}

			data.method="POST";

			let url = this.getUrlByType(data),
				 
				options=this.fetchOptions(data); 
			
			return fetch(url,options).then(response => response.json()).then(
				response => ({
					response
				}),
				error => ({
					error: error
				})
			) 
		},

		//delete
		delete(data) {

			if (!data) {
				return;
			}

			data.method="DELETE";

			let url = this.getUrlByType(data),
				 
				options=this.fetchOptions(data); 
		 
			return fetch(url,options).then(response => response.json()).then(
				response => ({
					response
				}),
				error => ({
					error: error
				})
			) 
		},

		//put
		put(data) {

			if (!data) {
				return;
			}

			data.method="PUT";

			let url = this.getUrlByType(data),
				 
				options=this.fetchOptions(data); 
			
			return fetch(url,options).then(response => response.json()).then(
				response => ({
					response
				}),
				error => ({
					error: error
				})
			) 
		},

		//fetch 配置
		fetchOptions(data){

			if (!data) {
				return {};
			}

			let	Pars = data.data, 
				options={
					method: data.method,
					credentials: 'include'
				};

			if (data.type!="form") { 
				options.headers={
					"Content-Type": "application/json"  
				}  
				options.body=JSON.stringify(Pars);
			}else{ 
				let bodyString="1=1";
				options.headers={
					"Content-Type": "application/x-www-form-urlencoded"  
				}  
				//参数
				if (Pars) {
					for (var key in Pars) { 
						bodyString += "&" + key + "=" + Pars[key]; 
					}
				} 
				options.body=bodyString;
			} 

			return options;
		},


		//构建url
		getUrlByType: function(data) {

			//存在不用构建
			if (data.url) {
				return data.url;
			}

			let url;

			//是否调试
			if (ApiURL.Settings.debug) {
				url = ApiURL.DEBUGURL[data.URLtype];
			} else {
				url = ApiURL.Settings.hostname + ApiURL.URL[data.URLtype];
			}

			//没有调试接口
			if (!url) {
				alert(data.URLtype + " 未定义");
			}

			//url 是否有参数
			var urlPars = url.match(/\{([\s\S]+?(\}?)+)\}/g), 
			    temp = data.data || {},
			    parms=data.parms;

			//额外的参数
			if (parms) {
				for(var key in parms){
					temp[key]=parms[key];
				}
			}

			//项目id
			// if (!temp.projectId) {
			// 	temp.projectId=ModelApp.projectId;
			// }
			// //项目id
			// if (!temp.versionId && ModelApp.versionId) {
			// 	temp.versionId=ModelApp.versionId;
			// }
			 
			if (urlPars) {
				for (var i = 0; i < urlPars.length; i++) {

					var rex = urlPars[i],
						par = rex.replace(/[{|}]/g, ""),
						val = temp[par];
					url = url.replace(rex, val);
				}
			}
			 
			//请求 时间戳
			if (url.indexOf("?") > -1) {
				url += "&t=" + (+new Date);
			} else {
				url += '?t=' + (+new Date);
			}

			return url;
		}

}

export default Api;