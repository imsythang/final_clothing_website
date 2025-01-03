import React from 'react';
import Navbar from '../components/NavigationBar/Navbar';
import styles from '../styles/customers.module.scss';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import customerApi from '../api/customerApi';
const Customers = () => {
  const navigate = useNavigate();

  const handleRowClick = (customerId) => {
    navigate(`/listcus/${customerId}`); // Điều hướng tới trang chi tiết của khách hàng
  };
  const [cusList, setCusList] = useState([])
  useEffect(() => {
    const fetchCus = async () => {
      const emp = await customerApi.getAll();
      setCusList(emp)
    }
    fetchCus();
  }, [])
  return (
    <>
      <Navbar />
      <div className={styles.content}>
        <h2 className={styles.title}>Danh sách khách hàng</h2>
        <button className={styles.btn} onClick={() => navigate('/listcus/add')}>Thêm khách hàng</button>
        <div className={styles.table}>
          <table>
            <thead>
              <tr>
                <th>Mã khách hàng</th>
                <th>Tên khách hàng</th>
                <th>Điện thoại</th>
                <th>Số đơn</th>
              </tr>
            </thead>
            <tbody>
              {cusList.map((data) => {
                return (
                  <tr onClick={() => handleRowClick(data.customer_id)} className={styles.clickableRow}>
                    <td>{data.customer_id}</td>
                    <td>{data.name}</td>
                    <td>{data.phone_number}</td>
                    <td>{data.purchase_history === null ? 0 : data.purchase_history}</td>
                  </tr>
                )
              })}

            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Customers;
