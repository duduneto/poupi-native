// ---------- import Internals

// ---------- set Reducers
export default (state, action) => {
  return {
    // ---------- set Init Content Data
    A0b_InitContentData: () => {
      const scContent = {
        title: 'Temp Users',
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
