export const loggerCustom = (store) => (next) => (action) => {
  if (!action.type) return next(action);

  console.log('type: ', action.type);
  console.log('payload: ', action.payload);
  console.log('currState: ', store.getState());

  next(action);

  console.log('nextState: ', store.getState());
};