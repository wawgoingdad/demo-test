// // export * from './log';
// import thunk from 'redux-thunk';
// import loggerMiddleware from './log';
// // import loggerMiddleware from './loggerMiddleware';

// const middlewares = {
//   thunk,
//   logger: loggerMiddleware,
// };

// export default middlewares;



// import { Middleware } from 'redux';
// import thunk, { ThunkMiddleware } from 'redux-thunk';
// import { IStoreState } from '../stores/types/IStoreState';
export * from './log';
// import loggerMiddleware from './loggerMiddleware';
// import { IStoreState } from '../types/state';

// export type AppMiddleware = ThunkMiddleware<IStoreState> | Middleware<{}, IStoreState>;

// export type AppMiddleware = Middleware<unknown, IStoreState>;


// const middlewares: AppMiddleware[] = [thunk as unknown as ThunkMiddleware<IStoreState>, loggerMiddleware];

// export default middlewares;