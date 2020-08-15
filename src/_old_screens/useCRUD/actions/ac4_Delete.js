export default (state, action) => {
  const { sttPermissionList } = state;

  return {
    clearAction() {
      const sttName = action.sttName;

      return { ...state, [sttName]: null };
    },
    delMailPermission() {
      const { idx } = action;
      sttPermissionList.splice(idx, 1);

      return {
        ...state,
        sttPermissionList: [...sttPermissionList],
      };
    },
  };
};
