/* eslint-disable no-constant-condition */
import { put, call, takeEvery,fork,take } from 'redux-saga/effects' 
import * as ActionType from '../actions/actionType'
import Api from '../api/api'


const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));




export function* fetchData() {   
 
  const res = yield call(Api.fetch,{URLtype:"gitHubApi"});
 
    //const [users, repos]= yield [call(fetchLoginApi),call(fetchLoginApi)] 
    yield put({type:ActionType.SUCCESS,data:res.response.result})
}

 

export function* invalidateReddit() {
  while (true) {
    //const {reddit} = yield take(actions.INVALIDATE_REDDIT)
     
   // const posts = yield call(test.test)  
    //const [users, repos]= yield [call(fetchLoginApi),call(fetchLoginApi)] 
   // yield put( actions.receivePosts("", posts.response.data.children.map(child => child.data)))
  }
}

export default function* root() {
  //监听action 为
  yield takeEvery(ActionType.REQUEST, fetchData)
  //yield fork(startup)
//  yield fork(invalidateReddit)
   
}
