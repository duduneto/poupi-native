import {createStore, applyMiddleware} from 'redux';
import actions from '../../useMorfos/useCRUD/actions';

const initialState = {
  rdRoute: {main: 'signin'},
};

function allReducers(state, action) {
  const reducers = {
    ...actions(state, action),
    clear() {
      return initialState;
    },
  };

  const condCalls = reducers[action.type] === undefined;

  return condCalls ? state : reducers[action.type]();
}

const reducer = (state = initialState, action) => allReducers(state, action);

const logger = store => next => action => {
  next(action);
  console.log('ACTION =>', action.type, {
    ACTION: action,
    STATE: store.getState(),
  });
};

const store = createStore(reducer, applyMiddleware(logger));

export {store};
