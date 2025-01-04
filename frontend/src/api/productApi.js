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
    getSupplier() {
        const url = '/api/product/supplier';
        return axiosClient.get(url)
    },
    getInventory() {
        const url = '/api/product/inventory';
        return axiosClient.get(url)
    },
    getProduct(element) {
        const url = `/api/product/${element}`;
        return axiosClient.get(url)
    }
}

export default productApi;