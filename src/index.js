import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import sagaMonitor from "./sagaMonitor";

import Users from "./components/Users";
import reducer from "./reducers";
import rootSaga from "./sagas";
import logger from 'redux-logger'
import { actionChannel } from "redux-saga/effects";
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const store = createStore(reducer, applyMiddleware(sagaMiddleware,logger));

sagaMiddleware.run(rootSaga);

const action = (type,id) => store.dispatch({type,id})

const render = () =>{
  ReactDOM.render(
    <Users text={store.getState()} getData={(id)=> action("GET_DATA",id)}/>,
    document.getElementById('root')
  )
}

render()

store.subscribe(render)