import Navbar from "../../components/NavigationBar/Navbar";
import styles from '../styles/orderInfo.module.scss';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function OrderInfo() {
    const { order_id } = useParams();
    const orderDetails = {
        12345: {
            customer: "Nguyễn Văn A",
            phone: "0325648913",
            email: "nguyenvanA12@gmail.com",
            address: "42/3 đường TL48, phường Thạnh Lộc, quận 12, TPHCM",
            items: [
                {
                    name: "AIRism Cotton Ribbed Polo Shirt",
                    size: "L",
                    color: "White",
                    sku: "abc",
                    price: "203.000 VND",
                    quantity: 1,
                    total: "203.000 VND",
                },
            ],
            notes: "Đơn giao về thì gọi e ra lấy nha shop",
            paymentStatus: "Đã thanh toán"
        }

    };
    const nagative = useNavigate();
    const order = orderDetails[order_id] || {};
    return (
        <>
            <div className={styles.title}>Đơn hàng {order.order_id}</div>
            <div className={styles.btn} onClick={() => nagative('/neworder')}>Nhận đơn</div>
            <button className={styles.delete_button}>In đơn hàng</button>
            <form>
                <div className={styles.content}>
                    <div className={styles.leftitem}>
                        <h4>Chi tiết đơn hàng</h4>
                    </div>
                    <div className={styles.rightitem}>
                        <h6>Đã nhận</h6>
                    </div>
                    <hr />
                    <div className={styles.detail}>
                        <h3>{order.items[0].name}</h3>
                        <div className={styles.leftdetail}>
                            <label>{order.items[0].size} / {order.items[0].color} : {order.items[0].price} x {order.items[0].quantity}</label>
                            <label>SKU: {order.items[0].sku}</label>
                        </div>
                        <div className={styles.centerdetail}>
                            <label>Giá : {order.items[0].price}</label>
                            <label>Tiếp thị: -0 VND</label>
                            <label>Tổng cộng: {order.items[0].total}</label>
                        </div>

                        <div className={styles.statusOrd}>
                            <h7>Phương thức thanh toán: {order.paymentStatus}</h7>
                        </div>
                    </div>

                    <div className={styles.content2}>
                        <h3>Ghi chú</h3>
                        <p>{order.notes}</p>
                    </div>

                    <div className={styles.content3}>
                        <h3>Khách hàng: </h3>
                        <p>{order.customer}</p>
                        <p>1 đơn hàng</p>
                        <hr />

                        <h4>Liên hệ</h4>
                        <p>{order.phone}</p>
                        <p>{order.email}</p>
                        <hr />

                        <h4>Địa chỉ</h4>
                        <p>{order.address}</p>
                    </div>
                </div>
            </form>
        </>
    );
}
export default OrderInfo;