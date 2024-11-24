import React, { useState } from 'react';
import './orderList.scss';

const OrderList = () => {
  // Khai báo state để quản lý hiển thị của các ô lọc
  const [showCustomerFilter, setShowCustomerFilter] = useState(false);
  const [showAddressFilter, setShowAddressFilter] = useState(false);

  const orders = [
    { id: 1234, date: '08/10/2024', time: '08:15', customer: 'Nguyen Van A', payment: 'Chưa thanh toán', delivery: 'Chưa giao hàng', total: '203.000 VND' },
    { id: 1546, date: '02/10/2024', time: '21:06', customer: 'Nguyen Van A', payment: 'Đã thanh toán', delivery: 'Đã giao hàng', total: '300.000 VND' },
    { id: 1412, date: '21/06/2024', time: '12:05', customer: 'Le Ngoc Anh', payment: 'Đã thanh toán', delivery: 'Đã giao hàng', total: '600.000 VND' },
    // Thêm các đơn hàng khác theo cấu trúc tương tự
  ];

  return (
    <div className="order-list">
      <h1>Đơn hàng</h1>
      <button className="export-file">Xuất file</button>
      <button className="create-order">Tạo đơn hàng</button>

      <div className="order-tabs">
        <button className="active-tab">Tất cả đơn hàng</button>
        <button>Chưa thanh toán</button>
        <button>Chưa giao hàng</button>
        <button>Lưu trữ</button>
      </div>

      <div className="filters">
        <select>
          <option>Chưa thanh toán</option>
          <option>Chờ xác nhận</option>
          <option>Đã thanh toán</option>
        </select>
        <select>
          <option>Chưa chuyển</option>
          <option>Chưa giao hàng</option>
          <option>Đã giao hàng</option>
        </select>
        <select>
          <option>Nam</option>
          <option>Nữ</option>
          <option>Unisex</option>
        </select>
        
        <div className="filter-dropdown">
          <button onClick={() => setShowCustomerFilter(!showCustomerFilter)}>
            Khách hàng
          </button>
          {showCustomerFilter && (
            <input type="text" placeholder="Lọc theo tên khách hàng" />
          )}
        </div>

        <div className="filter-dropdown">
          <button onClick={() => setShowAddressFilter(!showAddressFilter)}>
            Địa chỉ giao hàng
          </button>
          {showAddressFilter && (
            <input type="text" placeholder="Lọc theo địa chỉ giao hàng" />
          )}
        </div>

        <input type="text" placeholder="Tìm kiếm đơn hàng" />
      </div>

      <table className="order-table">
        <thead>
          <tr>
            <th>Mã đơn</th>
            <th>Ngày đặt</th>
            <th>Khách hàng</th>
            <th>Thanh toán</th>
            <th>Giao hàng</th>
            <th>Tổng tiền</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.date} {order.time}</td>
              <td>{order.customer}</td>
              <td>{order.payment}</td>
              <td>{order.delivery}</td>
              <td>{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
