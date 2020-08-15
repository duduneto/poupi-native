export default (state, action) => ({
  setPermission() {
    return { ...state, sttPermissionAdm: action.value };
  },
  addModalities() {
    return {
      ...state,
      sttRoute: 'modalitiesFilter',
    };
  },
  addTeacher() {
    return {
      ...state,
      sttSelectedCateg: action.toAction,
      sttRoute: 'teachersList',
    };
  },
  addScheduledClass() {
    return {
      ...state,
      sttRoute: 'teacherPf',
    };
  },
  addPermissions() {
    const { actionValue } = action.toAction;

    return {
      ...state,
      sttRoute: 'modalitiesFilter',
      sttPermissionList: actionValue,
    };
  },
});
