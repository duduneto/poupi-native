export default ({ asyncFn, actionSuccess, toAction, dispatch }) => {
  dispatch({ type: "ASYNC_START", asyncName: actionSuccess });

  const condActionName = actionSuccess ? actionSuccess : "???";

  asyncFn()
    .then((res) => {
      dispatch({ type: "ASYNC_SUCCESS", asyncName: condActionName });
      actionSuccess &&
        dispatch({
          type: actionSuccess,
          value: res,
          toAction,
        });
    })
    .catch((err) =>
      dispatch({
        type: "ASYNC_ERROR",
        value: err.message,
        asyncName: condActionName,
      })
    );
};
