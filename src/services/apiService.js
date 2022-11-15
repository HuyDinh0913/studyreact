import axios from '../utils/axiosCustomize';

const postCreateNewUser = (email, password, username, role, image) => {
    //Submit Data
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image); //lay ben postman (api)

    return axios.post('api/v1/participant', data);
}

const putUpdateUser = (id, username, role, image) => {
    //Submit Data
    const data = new FormData();
    data.append('id', id);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image); //lay ben postman (api)

    return axios.put('api/v1/participant', data);
}

const getAllUsers = () => {
    return axios.get('api/v1/participant/all');
}

const deleteUser = (userId) => {
    return axios.delete('api/v1/participant', { data: { id: userId } });
}

const getUserPaginate = (page, limit) => {
    return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
}

const postLogin = (email, password) => {
    return axios.post('api/v1/login', { email, password }); //tương đương cách viết email: email, password: password
}

const postRegis = (email, username, password) => {
    return axios.post('api/v1/register', { email, username, password }); //tương đương cách viết email: email, password: password
}

export { postCreateNewUser, getAllUsers, putUpdateUser, deleteUser, getUserPaginate, postLogin, postRegis }