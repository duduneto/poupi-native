export function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_REDUCER':
      return { ...state, [action.rdName]: action.value };

    default:
      return state;
  }
}
