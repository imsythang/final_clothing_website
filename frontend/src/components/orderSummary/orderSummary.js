import React from 'react';
import styles from "./orderSummary.module.scss";

const OrderSummary = ({ item,onClick }) => {
    return (
        <>
            <div className={styles.orderSummary}>
                <h2>ORDER SUMMARY (3)</h2>
                <div className={styles.summaryItem}>
                    <span>Item(s) subtotal</span>
                    <span>{item.totalPrice.toLocaleString('vi-VN')} VND</span>
                </div>
                <div className={styles.summaryItem}>
                    <span>Subtotal</span>
                    <span>{item.totalPrice.toLocaleString("vi-VN")} VND</span>
                </div>
                <div className={styles.summaryItem}>
                    <span>VAT included</span>
                    <span>0 VND</span>
                </div>
                <div className={styles.summaryItem}>
                    <span>Coupon/Voucher</span>
                    <span>-0 VND</span>
                </div>
                <div className={styles.summaryTotal}>
                    <span>Order total</span>
                    <span>{item.totalPrice.toLocaleString('vi-VN')} VND</span>
                </div>
                <button className={styles.checkoutButton} onClick={onClick}>CHECKOUT</button>
            </div>

        </>
    );
};

export default OrderSummary;
