import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import rootSaga from "./sagas";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = () => {
  return applyMiddleware(sagaMiddleware);
};

const enhancer = composeWithDevTools({})(bindMiddleware());

const configureStore = (preloadedState = {}) => {
  let store = createStore(reducers, preloadedState, enhancer);

  sagaMiddleware.run(rootSaga);
  return store;
};
export default configureStore;
