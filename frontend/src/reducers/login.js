const login = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_VIEW':
      return action.view;
    default:
      return state;
  }
};

export default login;
