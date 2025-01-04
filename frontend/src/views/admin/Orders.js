import React from 'react';
import styles from '../../styles/Orders.module.scss'
import orderApi from '../../api/orderApi'
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
const Orders = () => {
  const [orderList, setOrderList] = useState([])
  const token = window.localStorage.getItem("token");
  useEffect(() => {
    const fetchOrd = async () => {
      const emp = await orderApi.getAll(token);
      setOrderList(emp)
    }
    fetchOrd();
  }, [])
  let navigate = useNavigate();
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0,
    }).format(value);
  };

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
              <tr onClick={() => navigate(`/listorder/${data.orderid}`)} >
                <td>{data.orderid}</td>
                <td>{data.date[1]}/{data.date[2]}/{data.date[0]}</td>
                <td>{data.full_name}</td>
                <td>{data.status === "error" ? <div style={{ color: 'red', fontWeight: 'bold' }}>{data.status}</div> : <div style={{ color: 'green', fontWeight: 'bold' }}>{data.status}</div>}</td>
                <td>{formatCurrency(data.total_price)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  );
};

export default Orders; 