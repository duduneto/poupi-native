// ---------- import Internals

// ---------- set Reducers
export default (state, action) => {
  return {
    // ---------- set Init Content Data
    A2_InitContentData: () => {
      const scContent = {
        title: 'Terms',
        subTitle: 'Oi Mundo!',
        description: 'Lorem Ipsum!',
        txtBtn: 'Ir para Example',
      };

      const condData = true;

      return {
        ...state,
        A2: { ...state.A2, scContent, condData },
      };
    },
  };
};
