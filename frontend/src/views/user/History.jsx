
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";
import React, { useEffect, useState } from "react";
import BasicBreadcrumbs from "../../components/breadcrumb/breadcrumb";
import cartStyle from "../../components/cartItem/cartItem.module.scss";
import Footer from "../../components/footer/footer";
import orderSummaryStyle from "../../components/orderSummary/orderSummary.module.scss";
import styles from "../../styles/shoppingCart.module.scss";
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function History() {
    const breadcrumbLinks = [
        { name: 'Nét - Homepage', path: '/' },
        { name: 'Giỏ hàng', path: '/shoppingcart' },
    ];

    const [list, setList] = useState([]); // Danh sách giỏ hàng
    const [loading, setLoading] = useState(true); // Trạng thái loading

    const token = window.localStorage.getItem("token");


    // Tải dữ liệu từ API
    useEffect(() => {
        async function fetchCart() {
            try {
                console.log(token);
                const response = await axios.get('http://localhost:8080/user/history', {
                    headers: {
                        'Authorization': `Bearer ${token}` // Thêm token vào header
                    }
                }); // Sử dụng Axios để gọi API
                setList(response.data.result);
                setLoading(false);
            } catch (error) {
                console.error("Lỗi khi tải giỏ hàng:", error);
            }
        }
        fetchCart();
    }, []);

    const tongtien = () => {
        const total = list.reduce((acc, item) => acc + item.total_price, 0);
        return total;
    }

    console.log("danh sách ", list);

    return (
        <>
            <BasicBreadcrumbs links={breadcrumbLinks} />
            <h2 className={styles.title} style={{ width: "500px" }} >Lịch Sử Mua Hàng </h2>

            {list.map((item) => (
                <div className={cartStyle.cart_item} style={{marginTop:"60px"}}>
                    <Link to={`/product?productID=${item.product_id}`}>
                        <img src={item.image} alt={item} className={cartStyle['image']} />
                    </Link>
                    <div className={cartStyle.details}>
                        <h3 className={cartStyle.name}>{item.name}</h3>

                        <p className={cartStyle.detail}>
                            Color:   <FontAwesomeIcon icon={faSquare} style={{ color: item.color }} />
                        </p>
                        <p className={cartStyle.detail}>Chất liệu: {item.material}</p>
                        <p className={cartStyle.detail}>Brand: {item.brand}</p>
                        <p className={cartStyle.detail}>Giá: {item.price_selling.toLocaleString('vi-VN')} VND, Số lượng: {item.quantity}</p>
                        <p className={cartStyle.price}>Tổng: {item.total_price.toLocaleString('vi-VN')} VND</p>
                    </div>
                </div>
            ))
            }

            {list.length > 0 &&
                <div className={orderSummaryStyle.orderSummary}>
                    <h2>ORDER SUMMARY ({list.length})</h2>
                    <div className={orderSummaryStyle.summaryTotal}>
                        <span>Order total</span>
                        <span>{tongtien().toLocaleString('vi-VN')} VND</span>
                    </div>
                </div>
            }
            <div style={{ marginTop: "700px" }}>
                <Footer />
            </div>
        </>

    )
}
export default History;