import createSagaMiddleware, { Task } from 'redux-saga';
import { Store } from 'redux';
import reducer from './reducer';
import rootSaga from './saga';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { MakeStore, createWrapper } from 'next-redux-wrapper';

export interface SagaStore extends Store {
  sagaTask?: Task;
}

const configure: MakeStore<any> = (history?) => {
  const sagaMiddleware = createSagaMiddleware({
    onError: (error) => {
      setImmediate(() => {
        console.log(error);
      });
    },
  });

  const store: SagaStore = configureStore({
    reducer: reducer,
    middleware: [sagaMiddleware, ...getDefaultMiddleware()],
  });

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper<any>(configure, {});
