export default (state, action) => ({
  setRdContent() {
    return {
      ...state,
      sttContent: { ...action.value },
    };
  },
  setUsersList() {
    return {
      ...state,
      sttUsers: [...action.value],
    };
  },
  setModList() {
    return {
      ...state,
      sttModalities: [...action.value],
    };
  },
  setPermList() {
    const { sttAuthUser } = state;
    const arrEmails = action.value[0].arrEmails;

    const condAccess =
      arrEmails &&
      arrEmails.some(item => {
        return sttAuthUser && item.email === sttAuthUser.userEmail;
      });

    return {
      ...state,
      sttPermissionAdm: condAccess,
      sttPermissionList: arrEmails,
    };
  },
  setTeachersList() {
    return {
      ...state,
      sttTeachers: [...action.value],
    };
  },
  setSchedulesClassesList() {
    return {
      ...state,
      sttScheduledClasses: [...action.value],
    };
  },
  setScheduledClasStudentsList() {
    return {
      ...state,
      sttScheduledClassStudentList: [...action.value],
    };
  },
  setUserSubscribedClasses() {
    return {
      ...state,
      sttMySubscribedClasses: [...action.value],
    };
  },
});
