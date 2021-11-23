import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import { countriesReducer } from '../Screens/Countries/countriesSlice';
import { rootSaga } from './rootSaga';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
  middleware: [logger, sagaMiddleware]
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(rootSaga);