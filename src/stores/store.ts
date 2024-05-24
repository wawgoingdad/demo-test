import { AnyAction, Middleware, applyMiddleware, compose, createStore } from 'redux';
import { useDispatch } from 'react-redux';
import {thunk} from 'redux-thunk';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { persistedReducer } from './persistedReducer';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    persistedReducer,   
    composeEnhancers(applyMiddleware(thunk as unknown as Middleware<any, any, any>))
);


export const useThunkDispatch = () => useDispatch<typeof store.dispatch>();
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<AppState, void, AnyAction>;
