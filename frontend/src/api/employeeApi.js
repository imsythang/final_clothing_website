import axiosClient from "./axiosClient";
const employeeApi = {
    getAll() {
        const url = '/api/employee';
        return axiosClient.get(url)
    }
}

export default employeeApi;