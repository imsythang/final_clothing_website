import React from 'react';
import Navbar from '../../components/NavigationBar/Navbar';
import styles from '../styles/Orders.module.scss'
import { useEffect, useState } from 'react';
import employeeApi from '../api/employeeApi';
import { useNavigate } from 'react-router-dom';
const Employee = () => {
    const [empList, setEmpList] = useState([])
    useEffect(() => {
        const fetchEmp = async () => {
            const emp = await employeeApi.getAll();
            setEmpList(emp)
        }
        fetchEmp();
    }, [])
    let navigate = useNavigate();
    return (
        <>
            <h2 className={styles.title}>Danh sách nhân viên</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Mã</th>
                        <th>Tên nhân viên</th>
                        <th>Email</th>
                        <th>Điện thoại</th>
                        <th>Trạng thái</th>
                        <th>Chức vụ</th>
                    </tr>
                </thead>
                <tbody>
                    {empList.map((data) => {
                        return (
                            <>
                                <tr onClick={() => navigate(`/listemp/:${data.employee_id}`)}>
                                    <td >{data.employee_id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.phone_number}</td>
                                    <td>{data.status === '1' ? "Đang làm việc" : "Đã nghỉ"}</td>
                                    <td>{data.EmployeeType}</td>
                                </tr>

                            </>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
};

export default Employee;
