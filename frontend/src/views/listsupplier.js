import React from 'react';
import Navbar from '../components/NavigationBar/Navbar';
import styles from '../styles/listsupplier.module.scss'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import productApi from '../api/productApi';
const Listsupplier = () => {
    const navigate = useNavigate();
    const handleAddSupplier = () => {
        navigate('/supplier/edit');
    };
    const [suplrList, setSuplrList] = useState([])
    useEffect(() => {
        const fetchSuplr = async () => {
            const emp = await productApi.getSupplier();
            setSuplrList(emp)
        }
        fetchSuplr();
    }, [])
    return (
        <>
            <Navbar />
            <h2 className={styles.title}>Danh sách nhà cung cấp</h2>
            <button className={styles.btn} onClick={handleAddSupplier}>Thêm</button>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Nhà cung cấp</th>
                        <th>Địa chỉ</th>
                        <th>Số điện thoại</th>
                        <th>Email</th>
                        <th>Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    {suplrList.map((data) => {
                        return (
                            <tr onClick={handleAddSupplier}>
                                <td>{data.name}</td>
                                <td>{data.location}</td>
                                <td>{data.phone_number}</td>
                                <td>{data.email}</td>
                                <td>{data.name === '1' ? "Còn hợp đồng" : "Hết hạn"}</td>
                            </tr>
                        )

                    })}

                </tbody>
            </table>
        </>
    );
};

export default Listsupplier;
