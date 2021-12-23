import axios from 'axios';

export const USER_LOADING = 'USER_LOADING';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAIL = 'USER_FAIL';
/* un-comment once connected to backend, using fake data until then */

// export const getUser = ({email, password}) => dispatch => {
//     dispatch({ type: USER_LOADING });
//     axios.post({/* need login URL from backend */}, {email, password})
//         .then(res =>
//             localStorage.setItem('token', res.data.token);
//             dispatch({ type: USER_SUCCESS, payload: res.data })
//         )
//         .catch(err => dispatch({ type: USER_FAIL, payload: err }));
// };

/* Delete this after backend creates api */
export const getUser = ({ email, password }) => {
    localStorage.setItem('token', 'dummyToken');
    return({type: USER_SUCCESS, payload: {email: email, password: password}});
};