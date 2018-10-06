import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import sagaMonitor from "./sagaMonitor";

import Users from "./components/Users";
import reducer from "./reducers";
import rootSaga from "./sagas";
import logger from "redux-logger";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const action = type => store.dispatch({ type });

function render() {
  ReactDOM.render(
    <Users data={store.getState()} getData={() => action("GET_DATA")} />,
    document.getElementById("root")
  );
}

render();
store.subscribe(render);
