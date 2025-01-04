import axiosClient from "./axiosClient";
const productApi = {
    getAll(token) {
        const url = '/admin/listProduct';
        return axiosClient.get(url, {
            headers: {
                'Authorization': `Bearer ${token}` // Thêm token vào header
            }
        })
    },
    postQuantity(data, token) {
        const url = '/admin/addQuantityProduct';
        return axiosClient.post(url, data, {
            headers: {
                'Authorization': `Bearer ${token}` // Thêm token vào header
            }
        })
    },
}

export default productApi;