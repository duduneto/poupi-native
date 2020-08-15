export default (state, action) => {
  const asyncPending = `${action.asyncName}Pending`;
  const asyncError = `${action.asyncName}Error`;

  return {
    ASYNC_START() {
      return {
        ...state,

        asyncMsgs: {
          [asyncPending]: true,
          [asyncError]: null,
        },
      };
    },

    ASYNC_SUCCESS() {
      return {
        ...state,

        asyncMsgs: {
          [asyncPending]: false,
          [asyncError]: false,
        },
      };
    },

    ASYNC_ERROR() {
      return {
        ...state,

        asyncMsgs: {
          [asyncPending]: false,
          [asyncError]: action.value,
        },
      };
    },
  };
};
