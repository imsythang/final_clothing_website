import React from 'react';
import Navbar from "../components/NavigationBar/Navbar";
import styles from '../styles/cusInfo.module.scss';
import { useNavigate, useParams } from "react-router-dom";

function CusInfo() {
    const navigate = useNavigate();
    const { customerId } = useParams(); // Lấy customerId từ URL

    // Dữ liệu mẫu (thay bằng API thực nếu có)
    const customerData = {
        KH01: {
            name: "Lê Ngọc Anh",
            email: "ngocanh@gmail.com",
            phone: "+8432564981",
            address: "111 đường ABC, phường Cẩm Thành, Thành phố Cẩm Phả, Quảng Ninh, Vietnam",
            latestOrder: "1234",
            totalSpent: "503.000 VND",
            recentOrders: [
                { id: "1234", amount: "203.000 VND", status: "Chưa thanh toán", shipped: "Chưa chuyển" },
                { id: "0012", amount: "300.000 VND", status: "Đã thanh toán", shipped: "Đã giao hàng" }
            ]
        },
        KH02: {
            name: "Nguyễn Văn A",
            email: "nguyenvana@gmail.com",
            phone: "+8432564982",
            address: "222 đường DEF, phường XYZ, Thành phố Hà Nội, Vietnam",
            latestOrder: "5678",
            totalSpent: "1.000.000 VND",
            recentOrders: [
                { id: "5678", amount: "500.000 VND", status: "Đã thanh toán", shipped: "Đã giao hàng" },
                { id: "0001", amount: "500.000 VND", status: "Đã thanh toán", shipped: "Đã giao hàng" }
            ]
        }
    };

    const customer = customerData[customerId] || {}; // Lấy thông tin khách hàng từ dữ liệu mẫu

    return (
        <>
            <Navbar />
            <div className={styles.title}>{customer.name || "Thông tin khách hàng"}</div>
            <button className={styles.delete_button} onClick={() => alert("Vô hiệu hóa khách hàng!")}>Vô hiệu hóa</button>
            <form>
                <div className={styles.content}>
                    <div className={styles.detail}>
                        <h3>{customer.name}</h3>
                        <p>{customer.address}</p>

                        <label> Ghi chú</label>
                        <textarea placeholder="Nhập ghi chú về khách hàng"></textarea>

                        <hr />
                        <div className={styles.leftitem}>
                            <h5>Đơn hàng mới nhất</h5>
                            <p>{customer.latestOrder}</p>
                        </div>
                        <div className={styles.rightitem}>
                            <h5>Tổng chi tiêu</h5>
                            <p>{customer.totalSpent}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.content2}>
                    <h3>Đơn hàng gần đây</h3>
                    {customer.recentOrders?.map(order => (
                        <div className={styles.order} key={order.id}>
                            <h5>Đơn {order.id}</h5>
                            <p>{order.amount}</p>
                            <div className={styles.orderitem}>
                                <p>{order.status}</p>
                                <p>{order.shipped}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <input type="submit" value="Lưu" className={styles.save_button} onClick={() => navigate(`/listcus`)} />
            </form>
        </>
    );
}

export default CusInfo;
