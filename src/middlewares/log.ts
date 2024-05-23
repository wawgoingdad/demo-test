import { Middleware } from 'redux';
// import { AppState } from '../stores/store';
import { IStoreState } from '../stores/types/IStoreState';

const loggerMiddleware: Middleware<{}, IStoreState> = store => next => action => {
  console.log('Dispatching action:', action);
  console.log('State before action:', store.getState());
  
  const result = next(action);
  
  console.log('State after action:', store.getState());
  
  return result;
};

export default loggerMiddleware;
