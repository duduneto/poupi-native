export default store => next => action => {
  const { type, rdName, rdPropName, asyncName } = action;
  const condRdPropName = rdPropName ? `${rdName}{${rdPropName}}` : rdName;
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
