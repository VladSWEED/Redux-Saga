import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import { reducer } from '../reducers/reducer';
import rootSaga from './rootSaga';

const sagaMiddleWare = createSagaMiddleWare({});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(rootSaga);

export default store;
