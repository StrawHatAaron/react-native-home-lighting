export const GET_REPOS = 'WiFiLighting/repos/LOAD';
export const GET_REPOS_SUCCESS = 'WiFiLighting/repos/LOAD_SUCCESS';
export const GET_REPOS_FAIL = 'WiFiLighting/repos/LOAD_FAIL';

export const GET_SETTINGS_INFO = 'WiFiLighting/repos/SETTINGS_INFO';
export const GET_SETTINGS_SUCCESS = 'WiFiLighting/repos/SETTINGS_SUCCESS';
export const GET_SETTINGS_FAIL = 'WiFiLighting/repos/SETTINGS_FAIL';

export default function reducer(state = { repos: [] }, action) {
  switch (action.type) {
    case GET_REPOS:
      return { ...state, loading: true };
    case GET_REPOS_SUCCESS:
      return { ...state, loading: false, repos: action.payload.data };
    case GET_REPOS_FAIL:
      return { ...state,
        loading: false,
        error: 'Error while fetching repositories'
      };

    case GET_SETTINGS_INFO:
      return { ...state, loading: true};
    case GET_SETTINGS_SUCCESS:
    return { ...state, loading: false, };//NEED WORK
    case GET_SETTINGS_FAIL:
    return { ...state,
      loading: false,
      error: 'Error while fetching repositories'
    };

    default:
      return state;
  }
}

export function listRepos(user) {
  return {
    type: GET_REPOS,
    payload: {
      request: {
        url: `/users/${user}/repos`
      }
    }
  };
}
