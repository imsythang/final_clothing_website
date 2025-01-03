import React from 'react';
import Navbar from '../components/NavigationBar/Navbar';
import styles from '../styles/issueorder.module.scss';
import { useState, useEffect } from 'react';
import orderApi from '../api/orderApi';
const Issueorder = () => {
    const [issueorderList, setIssueOrderDList] = useState([])
    useEffect(() => {
        const fetchIssueOrd = async () => {
            const emp = await orderApi.getExportOrder();
            setIssueOrderDList(emp)
        }
        fetchIssueOrd();
    }, [])
    return (
        <>
            <Navbar />
            <h2 className={styles.title}>Danh sách đơn hàng</h2>
            <table className={styles.table}>
                <thead>

                    <tr>
                        <th>Mã đơn hàng</th>
                        <th> Ngày xuất kho</th>
                        <th>Ngày nhập hàng</th>
                        <th>Số sản phẩm</th>
                    </tr>
                </thead>
                <tbody>
                    {issueorderList.map((data) => {
                        return (
                            <tr>
                                <td>{data.product_id}</td>
                                <td>{data.import_date}</td>
                                <td>{data.export_date}</td>
                                <td>{data.total_product}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </>
    );
};

export default Issueorder;
