import React, { useState, useEffect } from 'react';
import Navbar from '../../components/NavigationBar/Navbar';
import styles from '../../styles/inventory.module.scss';
import { useNavigate } from 'react-router-dom';
import productApi from '../api/productApi'
const Inventory = () => {
  const navigate = useNavigate();
  const handleReturnProduct = () => {
    navigate('/listproduct');
  };
  const [inventoryList, setInventory] = useState([])
  useEffect(() => {
    const fetchInventory = async () => {
      const emp = await productApi.getInventory();
      setInventory(emp)
    }
    fetchInventory();
  }, [])
  return (
    <>
      <div className={styles.content}>
        <h2 className={styles.title}>Quản lý kho</h2>
        <button className={styles.btn} onClick={handleReturnProduct}>Xem sản phẩm</button>
        <div className={styles.table}>
          <table>
            <thead>
              <tr>
                <th>Mã sản phẩm</th>
                <th>Sản phẩm</th>
                <th>Trạng thái</th>
                <th>Số lượng tồn</th>
                <th>Cập nhật số lượng</th>
              </tr>
            </thead>
            <tbody>
              {inventoryList.map((data) => {
                return (
                  <tr>
                    <td>{data.product_id}</td>
                    <td>{data.describle}</td>
                    <td>{data.remain_quantity === 0 ? "Hết hàng" : (data.remain_quantity < 10 ? "Sắp hết hàng" : "Có sẵn")}</td>
                    <td>{data.remain_quantity}</td>
                    <td >
                      <form>
                        <input type="text" id="quantity"></input>
                        <button className={styles.add}>Thêm</button>
                      </form>

                    </td>
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

export default Inventory;
