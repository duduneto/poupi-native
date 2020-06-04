export default (state, action) => {
  const { rdPermissionList, rdTeachers, rdSchedulePf } = state;

  return {
    clearAll() {
      return action.initialState;
    },
    login() {
      return { ...state, rdAuthUser: action.item };
    },
    signIn() {
      return {
        ...state,
        rdAuthUser: action.toAction,
        rdRoute: 'modalitiesFilter',
      };
    },
    signOut() {
      return {
        ...state,
        rdAuthUser: null,
        rdRouter: 'signin',
        rdContent: null,
        rdPermissionAdm: null,
        rdModalities: null,
      };
    },
    editMode() {
      return { ...state, rdEditMode: action.value };
    },
    setRoute() {
      const { value } = action;

      return { ...state, rdRoute: value };
    },
    updatePermissions() {
      const { value } = action;

      const lastIdx = rdPermissionList.length - 1;
      const idSelected = rdPermissionList[lastIdx].id;
      const idToNum = Number(idSelected) + 1;
      const idToTxt = String(idToNum);

      return {
        ...state,
        rdPermissionList: [...rdPermissionList, { email: value, id: idToTxt }],
      };
    },
    selectToEdit() {
      return { ...state, rdEditFields: action.item };
    },
    selectCateg() {
      return { ...state, rdSelectedCateg: action.id };
    },
    selectTeacher() {
      return { ...state, rdSelectedTeacher: action.obj };
    },
    subscribeUser() {
      return {
        ...state,
        rdSchedulePf: { ...rdSchedulePf, students: action.value.students },
      };
    },
    rdSchedulePf() {
      return { ...state, rdSchedulePf: action.value };
    },
  };
};
