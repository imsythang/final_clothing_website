import React from 'react';
import Navbar from '../components/NavigationBar/Navbar';
import styles from '../styles/marketing.module.scss'
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const Employee = () => {
  const navigate = useNavigate();
  const marketingId = '1234'
  return (
    <>
      <Navbar />
      <h2 className={styles.title}>Tất cả tiếp thị</h2>
      <div className={styles.abc}>
        <button className={styles.create} onClick={() => navigate('/listmarketing/addmar')}>Tạo khuyến mãi</button>
      </div>

      <table className={styles.table}>
        <thead>
          <tr >
            <th>Mã tiếp thị</th>
            <th>Loại tiếp thị</th>
            <th>Thời gian bắt đầu</th>
            <th>Thời gian kết thúc</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={() => navigate(`/listmarketing/${marketingId}`)} >
            <td>1234</td>
            <td>Quảng cáo</td>
            <td>1/12/2024</td>
            <td>31/12/2024</td>
          </tr>
          <tr onClick={() => navigate(`/listmarketing/${marketingId}`)}>
            <td>1234</td>
            <td>Khuyến mãi</td>
            <td>1/12/2024</td>
            <td>31/12/2024</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Employee;
