import { put, call, takeEvery, takeLatest } from "redux-saga/effects";
import { delay } from "redux-saga";


function* getData(action){
  const id = action.id
  const data = yield fetch('https://jsonplaceholder.typicode.com/todos/'+id)
  .then(response=>response.json())

  yield put({type:"RECEIVED_DATA",json:data})
}

export default function* rootSaga(){
  yield takeEvery("GET_DATA",getData)
}