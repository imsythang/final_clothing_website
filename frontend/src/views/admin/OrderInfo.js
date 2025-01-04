import styles from '../../styles/orderInfo.module.scss';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import orderApi from '../../api/orderApi';
import React from 'react';
function OrderInfo() {
    const { order_id } = useParams();
    const [order, setOrderInfo] = useState([])
    const token = window.localStorage.getItem("token");
    useEffect(() => {
        const fetchOrdInfo = async () => {
            const emp = await orderApi.getSpecificOrder(order_id, token);
            setOrderInfo(emp)
        }
        fetchOrdInfo();
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
            <div className={styles.title}>Đơn hàng {order_id}</div>
            <div className={styles.btn} onClick={() => navigate('/listorder')}>Quay lại</div>
            <form>
                <div className={styles.content}>
                    <div className={styles.leftitem}>
                        <h2>CHI TIẾT ĐƠN HÀNG</h2>
                    </div>
                    <hr />
                    <div className={styles.detail}>
                        {order?.products?.length > 0 ? (
                            (order.products).map((data) => {
                                return (
                                    <>
                                        <h3>{data.name}</h3>
                                        <div className={styles.leftdetail}>
                                            <img src={data.image}></img>
                                        </div>
                                        <div className={styles.rightdetail}>
                                            <label>{data.brand} / {data.material}  </label>
                                            <label>Số lượng: {data.quantity} x Đơn giá: {formatCurrency(data.price_selling)}</label>
                                            <label style={{ fontWeight: 'bold' }}> Tổng tiền: {formatCurrency(data.total_price)}</label>
                                        </div>
                                        <hr ></hr >
                                    </>
                                )
                            })) : (
                            <p>No products found.</p> // Fallback UI for undefined or empty products
                        )}

                    </div>
                    <div className={styles.content3}>
                        <h3>Khách hàng </h3>
                        <p>{order.full_name}</p>
                        <hr />

                        <h3>Liên hệ</h3>
                        <p>{order.phone_number}</p>
                        <p>{order.email}</p>
                        <hr />

                        <h3>Địa chỉ</h3>
                        <p>{order.shipping_address}</p>
                    </div>
                </div>
            </form >
        </>
    );
}
export default OrderInfo;