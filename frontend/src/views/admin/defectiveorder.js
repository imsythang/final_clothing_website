import styles from '../styles/defectiveorder.module.scss'
import React from 'react';
import Navbar from '../../components/NavigationBar/Navbar';
import { useState, useEffect } from 'react';
import orderApi from '../api/orderApi';
const Defective = () => {
    const [orderDList, setOrderDList] = useState([])
    useEffect(() => {
        const fetchOrdD = async () => {
            const emp = await orderApi.getDefectiveOrder();
            setOrderDList(emp)
        }
        fetchOrdD();
    }, [])
    return (
        <>
            <h2 className={styles.title}>Danh sách đơn hàng</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Mã đơn hàng</th>
                        <th> Ngày đặt</th>
                        <th>Khách hàng</th>
                        <th> Tổng tiền</th>
                    </tr>
                </thead>
                <tbody>
                    {orderDList.map((data) => {
                        return (
                            <>
                                <tr>
                                    <td>{data.order_id}</td>
                                    <td>{data.create_date}</td>
                                    <td>{data.name}</td>
                                    <td>{data.total_price}</td>
                                </tr>
                            </>
                        )
                    })}

                </tbody>
            </table>
        </>
    );
};

export default Defective;