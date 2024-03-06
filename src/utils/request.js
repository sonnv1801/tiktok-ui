import axios from 'axios';

console.log(process.env.REACT_APP_BASE_URL);

const httpsRequest = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});
export const get = async (path, options = {}) => {
    const response = await httpsRequest.get(path, options);
    return response.data;
};
export default httpsRequest;
