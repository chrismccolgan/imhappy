const reducer = (prevState, action) => {
  return {
    ...prevState,
    ...action,
  };
};

export default reducer;
