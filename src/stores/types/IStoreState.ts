import { ICoreStore } from './ICoreStore';
import { IAuthState, IUserPreferenceState } from './IAuthState';
import { Middleware } from '@reduxjs/toolkit';


// export interface IStoreState extends ICoreStore {
/**
 * Extends the ICoreStore interface with the global stuffs.
 */
export interface IStoreState {
  userPreference: IUserPreferenceState;
  authentication: IAuthState;
}

export type AppMiddleware = Middleware<unknown, IStoreState>;
