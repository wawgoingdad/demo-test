import * as appReducers from '../reducers/index';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { persistConfig } from './persistConfig';

const { ...reducers } = appReducers;

const createReducers = () =>
    combineReducers({
      ...reducers
});

export const persistedReducer = persistReducer(
  persistConfig,
  createReducers(),
);
