import {
  APP_LISTING_REQUEST, APP_LISTING_FAILURE, APP_LISTING_SUCCESS,
  APP_LISTING_INVALIDATE_CACHE,
} from '../actions/appListing';
import { AUTH_LOGOUT } from '../actions/auth';
import { NEW_APP_SUCCESS } from '../actions/newApp';

const defaultState = {
  apps: [],
  isFetching: false,
  error: '',
  validCache: false,
};

function appListingReducer(state = defaultState, action) {
  switch (action.type) {
    case APP_LISTING_REQUEST:
      if (state.validCache) return state;
      return {
        ...defaultState,
        isFetching: true,
      };
    case APP_LISTING_FAILURE:
      return {
        ...defaultState,
        error: action.message,
      };
    case APP_LISTING_SUCCESS:
      return {
        ...defaultState,
        apps: action.apps,
        validCache: true,
      };
    case APP_LISTING_INVALIDATE_CACHE:
    case AUTH_LOGOUT:
    case NEW_APP_SUCCESS:
      return {
        ...state,
        validCache: false,
      };
    default:
      return state;
  }
}

export default appListingReducer;