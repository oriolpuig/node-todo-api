/* eslint-disable no-console, no-unused-vars */
export default function loggerMiddleware(store) {
    return next => (action) => {
      console.group(action.type);
      console.info('dispatching', action);
  
      const result = next(action);
  
      console.log('next state', store.getState());
      console.groupEnd(action.type);
    };
  }
  