
import React, { useEffect, useState } from "react";
import BasicBreadcrumbs from "../../components/breadcrumb/breadcrumb";
import CartItem from "../../components/cartItem/cartItem";
import Footer from "../../components/footer/footer";
import OrderSummary from "../../components/orderSummary/orderSummary";
import styles from "../../styles/shoppingCart.module.scss";
import axios from "axios";
function ShoppingCart() {
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
                const response = await axios.get('http://localhost:8080/user/orders/myCart', {
                    headers: {
                        'Authorization': `Bearer ${token}` // Thêm token vào header
                    }
                }); // Sử dụng Axios để gọi API
                setList(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Lỗi khi tải giỏ hàng:", error);
            }
        }
        fetchCart();
    }, []);

    console.log("danh sách ", list);

    async function handleRemove(productID) {
        try {
            const response = await axios.delete(`http://localhost:8080/user/orders/itemcart/${productID}`,{
                headers: {
                    'Authorization': `Bearer ${token}` // Thêm token vào header
                }
            });
            if (response.status === 200) {
                alert("Xóa sản phẩm thành công!");
                setList(list.filter(item => item.productID !== productID));
            }
        } catch (error) {
            console.error("Lỗi khi xóa sản phẩm:", error);
            alert("Lỗi khi xóa sản phẩm!");
        }
    }


    async function handleCheckout() {
        try {
            const response = await axios.put('http://localhost:8080/user/orders/checkout',{
                headers: {
                    'Authorization': `Bearer ${token}` // Thêm token vào header
                }
            });
            if (response.status === 200) {
                alert(response.data); // Hiển thị thông báo từ server
                setList([]); // Làm trống giỏ hàng sau khi thanh toán
            }
        } catch (error) {
            console.error("Lỗi khi thanh toán:", error);
            alert("Lỗi khi thanh toán!");
        }
    }


    return (
        <>
            <BasicBreadcrumbs links={breadcrumbLinks} />
            <h2 className={styles.title}>Giỏ hàng </h2>
            <CartItem items={list} onRemove={handleRemove} />
            {list.length > 0 && <OrderSummary item={list[0]} onClick={handleCheckout} />}
            <div style={{ marginTop: "700px" }}>
                <Footer />
            </div>
        </>

    )
}
export default ShoppingCart;