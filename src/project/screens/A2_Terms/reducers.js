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
        txtBtn: 'Ir para o Signin',
      };

      const condData = true;

      return {
        ...state,
        X: { ...state.X, scContent, condData },
      };
    },
  };
};
