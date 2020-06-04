export default (state, action) => ({
  setRdContent() {
    return {
      ...state,
      rdContent: { ...action.value },
    };
  },
  setUsersList() {
    return {
      ...state,
      rdUsers: [...action.value],
    };
  },
  setModList() {
    return {
      ...state,
      rdModalities: [...action.value],
    };
  },
  setPermList() {
    const { rdAuthUser } = state;
    const arrEmails = action.value[0].arrEmails;

    const condAccess =
      arrEmails &&
      arrEmails.some(item => {
        return rdAuthUser && item.email === rdAuthUser.userEmail;
      });

    return {
      ...state,
      rdPermissionAdm: condAccess,
      rdPermissionList: arrEmails,
    };
  },
  setTeachersList() {
    return {
      ...state,
      rdTeachers: [...action.value],
    };
  },
  setSchedulesClassesList() {
    return {
      ...state,
      rdScheduledClasses: [...action.value],
    };
  },
  setScheduledClasStudentsList() {
    return {
      ...state,
      rdScheduledClassStudentList: [...action.value],
    };
  },
  setUserSubscribedClasses() {
    return {
      ...state,
      rdMySubscribedClasses: [...action.value],
    };
  },
});
