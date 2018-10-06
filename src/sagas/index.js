import { put, call, takeEvery, takeLatest } from "redux-saga/effects";
import { delay } from "redux-saga";

function* getData() {
 
  const json = yield fetch("https://jsonplaceholder.typicode.com/users").then(
    response => response.json()
  );
  console.log("getData",json);
  yield put({ type: "RECEIVED_DATA", hoer: json });
}
export default function* rootSaga() {
  console.log("rootSaga call");
  yield takeEvery("GET_DATA", getData);
}
