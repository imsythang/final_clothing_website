import axiosClient from "./axiosClient";
const marketingApi = {
    post(formData) {
        const url = '/api/marketing';
        return axiosClient.post(url, formData)
    }
}

export default marketingApi;