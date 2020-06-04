// *******************
// #region REDUX
// -------------------

const initialState = {
  sum: 0,
};

function allActions(state, action) {
  const allSyncActions = {
    action1() {
      return initialState;
    },
  };

  const condCalls = allSyncActions[action.type] === undefined;

  return condCalls ? state : allSyncActions[action.type]();
}

const reducers = [allActions];

function reducer(state = initialState, action) {
  const newState = state;

  console.log('newState', newState);

  return reducers.reduce((acc, curr) => curr(acc, action), newState);
}

const store = createStore(reducer);

export default function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

// -------------------
// #endregion
// *******************
