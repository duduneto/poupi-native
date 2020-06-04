export default (state, action) => {
  const { rdPermissionList } = state;

  return {
    clearAction() {
      const rdName = action.rdName;

      return { ...state, [rdName]: null };
    },
    delMailPermission() {
      const { idx } = action;
      rdPermissionList.splice(idx, 1);

      return {
        ...state,
        rdPermissionList: [...rdPermissionList],
      };
    },
  };
};
