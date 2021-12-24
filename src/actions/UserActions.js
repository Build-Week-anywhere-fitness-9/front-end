import axios from 'axios';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useHistory } from 'react-router-dom';
import auth from '../firebase/firebase.utils';

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

// authenticating with Firebase

export const getUser = (email, password) => dispatch => {
    console.log('action', email, password);
    dispatch({ type: USER_LOADING });
    auth(email, password);
    
    createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log('create user', userCredential);
            // Signed in 
            localStorage.setItem('token', userCredential.accessToken);
            dispatch({ type: USER_SUCCESS, payload: email });
            useHistory.push('/classList');
        })
        .catch(err => dispatch({ type: USER_FAIL, payload: err}));
}

/* Delete this after backend creates api */
// export const getUser = ({ email, password }) => dispatch => {
//     localStorage.setItem('token', 'dummyToken');
//     console.log('action', email, password);
//     dispatch({type: USER_SUCCESS, payload: {email: email, password: password}});
// };