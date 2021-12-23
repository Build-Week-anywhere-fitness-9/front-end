import axios from 'axios';

const axiosWithAuth = ()=> {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            authorization: token
        },
        // baseURL: 'URL from backend'
    });
};

export default axiosWithAuth;