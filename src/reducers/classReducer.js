import {
    CLASSES_LOADING,
    CLASSES_SUCCESS,
    CLASSES_FAIL,
    NEW_CLASS,
    REMOVE_CLASS  /* remove this when connected to backend */
  } from '../actions/ClassActions';
  
  // remove dummy data once connected to back end
  export const initialState = {
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
          location: 'San Diego',
          participants: [],
          owner: 'Fred'
        },
        {
          type: 'karate',
          maxSize: 10,
          date: 12212021,
          time: 2200,
          duration: 60,
          intensity: 1,
          name: 'Hiya Karate',
          cost: 10,
          location: 'Chicago',
          participants: [
            'Carlos',
            'Darla',
            'William'
          ],
          owner: 'George'
        },
        {
          type: 'Pilates',
          maxSize: 10,
          date: 12222021,
          time: 2000,
          duration: 30,
          intensity: 3,
          name: 'Platform Pilates',
          cost: 15,
          location: 'New York',
          participants: [
            'Max',
            'Roxanne',
            'Cobey'
          ],
          owner: 'Max'
        }
      ],
    error: '',
    isFetching: false
  };
  
  export default function classReducer (state = initialState, action) {
    switch (action.type) {
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
      case NEW_CLASS:
        return {
          ...state,
          classes: [...state.classes, action.payload],
          isFetching: false,
          error: ''
        };

      /* remove this when connected to backend */
      case REMOVE_CLASS:
        return{
          ...state,
          classes: [state.classes.filter(id => id !== action.payload)]
        }
      
      /* load default */
      default:
        return state;
    };
  };