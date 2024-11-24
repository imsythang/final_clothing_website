import React from 'react';
import styles from "./orderSummary.module.scss";

const OrderSummary = ({ itemsSubtotal, vatIncluded, couponDiscount, orderTotal }) => {
    return (
        <>
            <div className={styles.orderSummary}>
                <h2>ORDER SUMMARY (3)</h2>
                <div className={styles.summaryItem}>
                    <span>Item(s) subtotal</span>
                    <span>{itemsSubtotal} VND</span>
                </div>
                <div className={styles.summaryItem}>
                    <span>Subtotal</span>
                    <span>{itemsSubtotal} VND</span>
                </div>
                <div className={styles.summaryItem}>
                    <span>VAT included</span>
                    <span>{vatIncluded} VND</span>
                </div>
                <div className={styles.summaryItem}>
                    <span>Coupon/Voucher</span>
                    <span>-{couponDiscount} VND</span>
                </div>
                <div className={styles.summaryTotal}>
                    <span>Order total</span>
                    <span>{orderTotal} VND</span>
                </div>
                <button className={styles.checkoutButton}>CHECKOUT</button>
            </div>

        </>
    );
};

export default OrderSummary;
