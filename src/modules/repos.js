import { push } from 'react-router-redux';
export const REPO_LIST_REQUESTED = 'repos/REPO_LIST_REQUESTED';
export const REPO_LIST = 'repos/REPO_LIST';
export const REPO_REQUESTED = 'repos/REPO_REQUESTED';
export const REPO = 'repos/REPO';

const initialState = {
  loading: false,
  list: [],
  commits: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE':
        return{
            ...state,
            ...action.payload.repos,
        };
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
        commits: action.payload,
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

    fetch('https://api.github.com/users/octocat/repos', {
        // headers: {
        //     'Authorization': 'Basic ' + btoa('RyuSLunK:5e11940d2e088049309561004a2a442de306419f'),
        // }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch({
        type: REPO_LIST,
        payload: responseJson,
      });
    });
  };
};

export const getRepoInformation = (repo) => {
  return dispatch => {
    dispatch({
      type: REPO_REQUESTED,
    });
    fetch(`https://api.github.com/repos/${repo.owner.login}/${repo.name}/commits`, {
        headers: {
            'Authorization': 'Basic ' + btoa('RyuSLunK:5e11940d2e088049309561004a2a442de306419f'),
        }
    }).then((response) => response.json())
    .then((responseJson) => {
      dispatch({
        type: REPO,
        payload: responseJson,
      });
      dispatch(push(`/${repo.name}/commits`));
    });
  };
};
