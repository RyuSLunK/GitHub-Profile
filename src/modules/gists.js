import { push } from 'react-router-redux';


export const GIST_LIST_REQUESTED = 'gists/GIST_LIST_REQUESTED';
export const GIST_LIST = 'gists/GIST_LIST';
export const GIST_REQUESTED = 'gists/GIST_REQUESTED';
export const GIST = 'gists/GIST';

const initialState = {
  loading: false,
  list: [],
  gist: {
    // "url": "",
    // "forks_url": "",
    // "commits_url": "",
    // "id": "",
    // "git_pull_url": "",
    // "git_push_url": "",
    // "html_url": "",
    // "files": {
    //   "hello_world.rb": {
    //     "filename": "hello_world.rb",
    //     "type": "application\/x-ruby",
    //     "language": "Ruby",
    //     "raw_url": "https:\/\/gist.githubusercontent.com\/octocat\/6cad326836d38bd3a7ae\/raw\/db9c55113504e46fa076e7df3a04ce592e2e86d8\/hello_world.rb",
    //     "size": 175
    //   }
    // },
    // "public": true,
    // "created_at": "2014-10-01T16:19:34Z",
    // "updated_at": "2018-04-18T10:12:45Z",
    // "description": "Hello world!",
    // "comments": 209,
    // "user": null,
    // "comments_url": "https:\/\/api.github.com\/gists\/6cad326836d38bd3a7ae\/comments",
    // "owner": {
    //   "login": "octocat",
    //   "id": 583231,
    //   "avatar_url": "https:\/\/avatars3.githubusercontent.com\/u\/583231?v=4",
    //   "gravatar_id": "",
    //   "url": "https:\/\/api.github.com\/users\/octocat",
    //   "html_url": "https:\/\/github.com\/octocat",
    //   "followers_url": "https:\/\/api.github.com\/users\/octocat\/followers",
    //   "following_url": "https:\/\/api.github.com\/users\/octocat\/following{\/other_user}",
    //   "gists_url": "https:\/\/api.github.com\/users\/octocat\/gists{\/gist_id}",
    //   "starred_url": "https:\/\/api.github.com\/users\/octocat\/starred{\/owner}{\/repo}",
    //   "subscriptions_url": "https:\/\/api.github.com\/users\/octocat\/subscriptions",
    //   "organizations_url": "https:\/\/api.github.com\/users\/octocat\/orgs",
    //   "repos_url": "https:\/\/api.github.com\/users\/octocat\/repos",
    //   "events_url": "https:\/\/api.github.com\/users\/octocat\/events{\/privacy}",
    //   "received_events_url": "https:\/\/api.github.com\/users\/octocat\/received_events",
    //   "type": "User",
    //   "site_admin": false
    // },
    // "truncated": false
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE':

    console.log('rehydrating!!!',action.payload);
    return{
        ...state,
        ...action.payload.gists,
    };
    case GIST_LIST_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case GIST_LIST:
      return {
        ...state,
        list: action.payload,
        loading: !state.loading,
      };

    case GIST_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case GIST:
      return {
        ...state,
        gist: action.payload,
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
    fetch('https://api.github.com/users/octocat/gists', {
      headers: {
          'Authorization': 'Basic ' + btoa('RyuSLunK:5e11940d2e088049309561004a2a442de306419f'),
      }
  }).then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson);
      dispatch({
        type: GIST_LIST,
        payload: responseJson,
      });
    });
  };
};

export const getGistInformation = (gist) => {
  return dispatch => {
    dispatch({
      type: GIST_REQUESTED,
    });

    fetch(`https://api.github.com/gists/${gist.id}`, {
      headers: {
          'Authorization': 'Basic ' + btoa('RyuSLunK:5e11940d2e088049309561004a2a442de306419f'),
      }
  }).then((response) => response.json())
    .then((responseJson) => {
        console.log('gist info',responseJson);
      dispatch({
        type: GIST,
        payload: responseJson,
      });
      dispatch(push(`/gist/${gist.id}`));
    });
  };
};
