import axiosClient from "./axiosClient";
const customerApi = {
    getAll(token) {
        const url = '/admin/listCustomer';
        return axiosClient.get(url, {
            headers: {
                'Authorization': `Bearer ${token}` // Thêm token vào header
            }
        })
    },
    getSpecific(id, token) {
        const url = `/admin/detailCustomer/${id}`;
        return axiosClient.get(url, {
            headers: {
                'Authorization': `Bearer ${token}` // Thêm token vào header
            }
        })
    },
    post(data) {
        const url = 'api/customer';
        return axiosClient.post(url, data)
    }
}

export default customerApi;