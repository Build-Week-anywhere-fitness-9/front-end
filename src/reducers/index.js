import {
    USER_LOADING,
    USER_SUCCESS,
    USER_FAIL,
    CLASSES_LOADING,
    CLASSES_SUCCESS,
    CLASSES_FAIL
  } from '../actions';
  
  export const initialState = {
    user: {
        username: 'Guest',
        password: '',
    },
    classes: [],
    error: '',
    isFetching: false
  };
  
  export default function reducer (state = initialState, action) {
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

      /* load classes */
      case CLASSES_LOADING:
        return {
          ...state,
          isFetching: true,
          error: ''
        };
      case CLASSES_SUCCESS:
        return {
          ...state,
          classes: action.payload,
          isFetching: false,
          error: ''
        };
      case CLASSES_FAIL:
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