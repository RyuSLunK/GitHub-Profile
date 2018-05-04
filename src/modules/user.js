const initialState = {
  userName: 'RyuSLunK',
  avatarUrl: 'https://avatars1.githubusercontent.com/u/11950988?v=4',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE':
      return {
        ...state,
        ...action.payload.user,
      };

    default:
      return state;
  }
};
