export default (state, action) => {
  const {
    sttPermissionList,
    // sttTeachers,
    sttSchedulePf,
  } = state;

  return {
    clearAll() {
      return action.initialState;
    },
    login() {
      return { ...state, sttAuthUser: action.item };
    },
    signIn() {
      return {
        ...state,
        sttAuthUser: action.toAction,
        sttRoute: 'modalitiesFilter',
      };
    },
    signOut() {
      return {
        ...state,
        sttAuthUser: null,
        sttRouter: 'signin',
        sttContent: null,
        sttPermissionAdm: null,
        sttModalities: null,
      };
    },
    editMode() {
      return { ...state, sttEditMode: action.value };
    },
    setRoute() {
      const { value } = action;

      return { ...state, sttRoute: value };
    },
    updatePermissions() {
      const { value } = action;

      const lastIdx = sttPermissionList.length - 1;
      const idSelected = sttPermissionList[lastIdx].id;
      const idToNum = Number(idSelected) + 1;
      const idToTxt = String(idToNum);

      return {
        ...state,
        sttPermissionList: [
          ...sttPermissionList,
          { email: value, id: idToTxt },
        ],
      };
    },
    selectToEdit() {
      return { ...state, sttEditFields: action.item };
    },
    selectCateg() {
      return { ...state, sttSelectedCateg: action.id };
    },
    selectTeacher() {
      return { ...state, sttSelectedTeacher: action.obj };
    },
    subscribeUser() {
      return {
        ...state,
        sttSchedulePf: { ...sttSchedulePf, students: action.value.students },
      };
    },
    sttSchedulePf() {
      return { ...state, sttSchedulePf: action.value };
    },
  };
};
