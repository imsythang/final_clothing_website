import React, { useState, useEffect } from 'react';
import styles from '../../styles/inventory.module.scss';
import productApi from '../../api/productApi'
const Inventory = () => {
  const token = window.localStorage.getItem("token");
  const [inventoryList, setPrdtList] = useState([])
  useEffect(() => {
    const fetchPrdt = async () => {
      const emp = await productApi.getAll(token);
      setPrdtList(emp)
    }
    fetchPrdt();
  }, []);

  const recall = async () => {
    try {
      const response = await productApi.getAll(token);
      setPrdtList(response.data);
    } catch (error) {
      console.error("Error refreshing product list:", error);
      setPrdtList([]);
    }
  };

  const handleQuantity = async (event, productID) => {
    event.preventDefault();
    try {
      const quantity = document.getElementById("quantity").value;
      const data = {
        productId: productID,
        quantity: parseInt(quantity, 10),
      };
      console.log("Payload being sent:", data);
      console.log("Token:", token);

      const response = await productApi.postQuantity(data, token);
      console.log("API Response:", response.data);

      await recall();
      alert("Product added successfully!");
    } catch (error) {
      if (error.response) {
        console.error("API responded with error:", error.response.data);
        alert(`Error: ${error.response.data.message || "Failed to add product"}`);
      } else {
        console.error("Request failed:", error.message);
        alert("Network error! Please try again.");
      }
    }
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0,
    }).format(value);
  };
  return (
    <>
      <div className={styles.content}>
        <h2 className={styles.title}>Quản lý kho</h2>
        <div className={styles.table}>
          <table>
            <thead>
              <tr>
                <th>Mã sản phẩm</th>
                <th>Sản phẩm</th>
                <th>Giá nhập</th>
                <th>Giá bán</th>
                <th>Số lượng nhập</th>
                <th>Số lượng bán</th>
                <th>Số lượng tồn</th>
                <th>Trạng thái</th>
                <th>Đặt hàng</th>
              </tr>
            </thead>
            <tbody>
              {
                inventoryList?.map((data) => {
                  return (
                    <tr>
                      <td>{data.productID}</td>
                      <td>{data.name}</td>
                      <td>{formatCurrency(data.priceImport)}</td>
                      <td>{formatCurrency(data.priceSelling)}</td>
                      <td>{(data.quantityImport)}</td>
                      <td>{(data.quantitySold)}</td>
                      <td>{(data.quantityStock)}</td>
                      <td>{data.quantityStock === 0 ? "Hết hàng" : (data.quantityStock < 10 ? "Sắp hết hàng" : "Có sẵn")}</td>
                      <td >
                        <form onSubmit={(event) => handleQuantity(event, data.productID)}>
                          <input type="number" id="quantity"></input>
                          <button type="submit" className={styles.add}>Thêm</button>
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
