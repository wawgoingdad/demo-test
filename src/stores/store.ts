import * as middlewares from '../middlewares/index';
import { AnyAction, Middleware, applyMiddleware, compose, createStore } from 'redux';
import { useDispatch } from 'react-redux';
import {thunk} from 'redux-thunk';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { valuesOf } from '../utils/obj';
import { AppMiddleware } from './types/IStoreState';
import { persistedReducer } from './persistedReducer';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const midws = valuesOf(middlewares);

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk as unknown as Middleware<any, any, any>, ...midws as AppMiddleware[]))
);


export const useThunkDispatch = () => useDispatch<typeof store.dispatch>();
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<AppState, void, AnyAction>;
