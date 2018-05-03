export const REPO_LIST_REQUESTED = 'repos/REPO_LIST_REQUESTED';
export const REPO_LIST = 'repos/REPO_LIST';
export const REPO_REQUESTED = 'repos/REPO_REQUESTED';
export const REPO = 'repos/REPO';

const initialState = {
  loading: false,
  userName: 'RyuSLunK',
  avatarUrl: 'https://avatars1.githubusercontent.com/u/11950988?v=4',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REPO_LIST_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case REPO_LIST:
      return {
        ...state,
        ...action.payload,
        loading: !state.loading,
      };

    case REPO_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case REPO:
      return {
        ...state,
        ...action.payload,
        loading: !state.loading,
      };

    default:
      return state;
  }
};

export const getRepoList = () => {
  return dispatch => {
    dispatch({
      type: REPO_LIST_REQUESTED,
    });
    //get the data
    dispatch({
      type: REPO_LIST,
    });
  };
};

export const getRepoInformation = () => {
  return dispatch => {
    dispatch({
      type: REPO_REQUESTED,
    });

    dispatch({
      type: REPO,
    });
  };
};
