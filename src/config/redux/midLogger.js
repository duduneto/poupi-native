export default store => next => action => {
  const { type, sttName, sttPropName, asyncName } = action;
  const condRdPropName = sttPropName ? `${sttName}{${sttPropName}}` : sttName;
  const condType = type.replace('_', '&').split('&')[0] === 'ASYNC';
  const condActionName = condType ? asyncName : type;
  const condRdName = condRdPropName ? `${condRdPropName}` : condActionName;
  const condTitle = condType ? type : 'SYNC';
  const Names = `${condTitle} => ${condRdName}`;

  const result = next(action);

  const consoleValue = { ACTION: action, STATE: store.getState() };
  console.info(Names, consoleValue);

  return result;
};
