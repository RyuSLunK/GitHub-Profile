export const GIST_LIST_REQUESTED = 'repos/GIST_LIST_REQUESTED';
export const GIST_LIST = 'repos/GIST_LIST';
export const GIST_REQUESTED = 'repos/GIST_REQUESTED';
export const REPO = 'repos/REPO';

const initialState = {
  loading: false,
  userName: 'RyuSLunK',
  avatarUrl: 'https://avatars1.githubusercontent.com/u/11950988?v=4',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GIST_LIST_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case GIST_LIST:
      return {
        ...state,
        ...action.payload,
        loading: !state.loading,
      };

    case GIST_REQUESTED:
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

export const getGistList = () => {
  return dispatch => {
    dispatch({
      type: GIST_LIST_REQUESTED,
    });
    //get the data
    dispatch({
      type: GIST_LIST,
    });
  };
};

export const getGistInformation = () => {
  return dispatch => {
    dispatch({
      type: GIST_REQUESTED,
    });

    dispatch({
      type: REPO,
    });
  };
};
