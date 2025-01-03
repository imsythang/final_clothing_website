import React from 'react';
import Navbar from '../../components/NavigationBar/Navbar';
import styles from '../../styles/Orders.module.scss'
import orderApi from '../api/orderApi';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
const Orders = () => {
  const [orderList, setOrderList] = useState([])
  useEffect(() => {
    const fetchOrd = async () => {
      const emp = await orderApi.getAll();
      setOrderList(emp)
    }
    fetchOrd();
  }, [])
  let navigate = useNavigate();
  return (
    <>
      <h2 className={styles.title}>Danh sách đơn hàng</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Mã đơn hàng</th>
            <th> Ngày đặt</th>
            <th>Khách hàng</th>
            <th>Trạng thái</th>
            <th> Tổng tiền</th>
          </tr>
        </thead>
        <tbody>
          {orderList.map((data) => {
            return (
              <tr onClick={() => navigate(`/listorder/${data.order_id}`)} >
                <td>{data.order_id}</td>
                <td>{data.create_date}</td>
                <td>{data.name}</td>
                <td>{data.status === "error" ? <div style={{ color: 'red', fontWeight: 'bold' }}>{data.status}</div> : data.status}</td>
                <td>{data.total_price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  );
};

export default Orders; 