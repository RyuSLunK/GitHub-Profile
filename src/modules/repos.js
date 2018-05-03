export const REPO_LIST_REQUESTED = 'repos/REPO_LIST_REQUESTED';
export const REPO_LIST = 'repos/REPO_LIST';
export const REPO_REQUESTED = 'repos/REPO_REQUESTED';
export const REPO = 'repos/REPO';

const initialState = {
  loading: false,
  list: [],
  repo: {},
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
        list: action.payload,
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
        repo: action.payload,
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

    fetch('https://api.github.com/users/RyuSLunK/repos').then((response) => response.json())
    .then((responseJson) => {
    //   return responseJson.movies;
        // console.log(responseJson);
      dispatch({
        type: REPO_LIST,
        payload: responseJson,
      });
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
