import axiosClient from "./axiosClient";
const orderApi = {
    getAll(token) {
        const url = '/admin/allorder';
        return axiosClient.get(url, {
            headers: {
                'Authorization': `Bearer ${token}` // Thêm token vào header
            }
        })
    },
    getSpecificOrder(id, token) {
        const url = `/admin/allitem/${id}`;
        return axiosClient.get(url, {
            headers: {
                'Authorization': `Bearer ${token}` // Thêm token vào header
            }
        })
    },
    post(data) {
        const url = `api/order`;
        return axiosClient.post(url, data)
    }
}

export default orderApi;