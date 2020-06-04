export default (state, action) => ({
  setPermission() {
    return { ...state, rdPermissionAdm: action.value };
  },
  addModalities() {
    return {
      ...state,
      rdRoute: 'modalitiesFilter',
    };
  },
  addTeacher() {
    return {
      ...state,
      rdSelectedCateg: action.toAction,
      rdRoute: 'teachersList',
    };
  },
  addScheduledClass() {
    return {
      ...state,
      rdRoute: 'teacherPf',
    };
  },
  addPermissions() {
    const { actionValue } = action.toAction;

    return {
      ...state,
      rdRoute: 'modalitiesFilter',
      rdPermissionList: actionValue,
    };
  },
});
