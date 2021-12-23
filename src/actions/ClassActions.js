import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

export const CLASSES_LOADING = 'CLASSES_LOADING';
export const CLASSES_SUCCESS = 'CLASSES_SUCCESS';
export const CLASSES_FAIL = 'CLASSES_FAIL';
export const NEW_CLASS = 'NEW_CLASS';

/* un-comment once connected to backend, using fake data until then */

// Returns current list of available classes:
// export const getClasses = () => dispatch => {
//     dispatch({ type: CLASSES_LOADING });
//     axios.get({/* need classlist URL from backend */})
//         .then(res =>
//             dispatch({ type: CLASSES_SUCCESS, payload: res.data })
//         )
//         .catch(err => dispatch({ type: CLASSES_FAIL, payload: err }));
// };

// Handles creating or editing classes:
// export const newClass = (oneClass) => dispatch => {
//     dispatch({ type: CLASSES_LOADING });
//     axiosWithAuth
//         .put(/*'URL from backend',*/ oneClass)
//         .then(res => {
//             dispatch({ type: NEW_CLASS, payload: res.data })
//             .catch(err => dispatch({ type: CLASSES_FAIL, payload: err }));
//         });
// };

// Handles removing a class:
// export const removeClass = (id) => dispatch => {
//     dispatch({ type: CLASSES_LOADING });
//     axiosWithAuth
//         .delete(/* `URL from backend/${id}` */)
//         .then(res => {
//             dispatch({ type: CLASSES_SUCCESS, payload: res.data })
//         })
//         .catch(err => dispatch({ type: CLASSES_FAIL, payload: err }))
// };

/* Delete everything after this when backend creates api */
export const getClasses = (classes) => {
    return({type: CLASSES_SUCCESS, payload: classes});
};

export const newClass = (oneClass) => {
    return ({type: NEW_CLASS, payload: oneClass});
}

export const REMOVE_CLASS = 'REMOVE_CLASS';
export const removeClass = (oneClass) => {
    return ({type: REMOVE_CLASS, payload: oneClass})
}