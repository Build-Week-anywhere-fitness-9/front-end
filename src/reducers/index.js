import {
    USER_LOADING,
    USER_SUCCESS,
    USER_FAIL,
    CLASSES_LOADING,
    CLASSES_SUCCESS,
    CLASSES_FAIL
  } from '../actions';
  
  const initialState = {
    user: {
        username: '',
        password: '',
        isInstructor: false
    },
    classes: [
      {
        type: 'yoga',
        maxSize: 10,
        date: 12212021,
        time: 2200,
        duration: 60,
        intensity: 1,
        name: 'Yoga with Yani',
        cost: 25,
        location: 'USA',
        participants: [
          'Carlos',
          'Darla',
          'William'
        ],
        owner: 'Fred'
      }
    ],
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