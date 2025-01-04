import axiosClient from "./axiosClient";
const customerApi = {
    getAll() {
        const url = '/api/customer';
        return axiosClient.get(url)
    },
    post(data) {
        const url = 'api/customer';
        return axiosClient.post(url, data)
    }
}

export default customerApi;