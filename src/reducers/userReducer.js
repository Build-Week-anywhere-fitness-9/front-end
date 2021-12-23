import {
    USER_LOADING,
    USER_SUCCESS,
    USER_FAIL
  } from '../actions/UserActions';
  
  export const initialState = {
    user: {
        email: 'Guest',
        password: '',
    },
    error: '',
    isFetching: false
  };
  
  export default function userReducer (state = initialState, action) {
    switch (action.type) {
      /* load user */
      case USER_LOADING:
        return {
          ...state,
          isFetching: true,
          error: ''
        };
      case USER_SUCCESS:
        return {
          ...state,
          user: action.payload,
          isFetching: false,
          error: ''
        };
      case USER_FAIL:
        return {
          ...state,
          error: action.payload.message,
          isFetching: false
        };

      /* load default */
      default:
        return state;
    };
  };