import { IAuthState, IUserPreferenceState } from './IAuthState';
import { Middleware } from '@reduxjs/toolkit';

export interface IStoreState {
  userPreference: IUserPreferenceState;
  authentication: IAuthState;
}

export type AppMiddleware = Middleware<unknown, IStoreState>;
