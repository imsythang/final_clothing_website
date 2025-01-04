import React from 'react';
import styles from '../../styles/customers.module.scss';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import customerApi from '../../api/customerApi';
const Customers = () => {
  const navigate = useNavigate();

  const handleRowClick = (customerId) => {
    navigate(`/listcus/${customerId}`); // Điều hướng tới trang chi tiết của khách hàng
  };
  const token = window.localStorage.getItem("token");
  const [cusList, setCusList] = useState([])
  useEffect(() => {
    const fetchCus = async () => {
      const emp = await customerApi.getAll(token);
      setCusList(emp)
    }
    fetchCus();
  }, [])
  return (
    <>
      <div className={styles.content}>
        <h2 className={styles.title}>Danh sách khách hàng</h2>
        <button className={styles.btn} onClick={() => navigate('/listcus/add')}>Thêm khách hàng</button>
        <div className={styles.table}>
          <table>
            <thead>
              <tr>
                <th>Mã khách hàng</th>
                <th>Tên khách hàng</th>
                <th>Email</th>
                <th>Điện thoại</th>
                <th>Số đơn</th>
              </tr>
            </thead>
            <tbody>
              {cusList.map((data) => {
                return (
                  <tr onClick={() => handleRowClick(data.customerID)} className={styles.clickableRow}>
                    <td>{data.customerID}</td>
                    <td>{data.fullName}</td>
                    <td>{data.email}</td>
                    <td>{data.phoneNumber}</td>
                    <td>{data.orderCount}</td>
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
