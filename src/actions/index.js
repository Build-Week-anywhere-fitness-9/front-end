import axios from 'axios';

// user
export const USER_LOADING = 'USER_LOADING';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAIL = 'USER_FAIL';

export const getUser = () => dispatch => {
    dispatch({ type: USER_LOADING });
    axios.get({/* need login URL from backend */})
        .then(res =>
            dispatch({ type: USER_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: USER_FAIL, payload: err }));
};

//classes
export const CLASSES_LOADING = 'CLASSES_LOADING';
export const CLASSES_SUCCESS = 'CLASSES_SUCCESS';
export const CLASSES_FAIL = 'CLASSES_FAIL';

export const getClasses = () => dispatch => {
    dispatch({ type: CLASSES_LOADING });
    axios.get({/* need classlist URL from backend */})
        .then(res =>
            dispatch({ type: CLASSES_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: CLASSES_FAIL, payload: err }));
};