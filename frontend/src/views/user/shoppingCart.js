
import React from "react";
import BasicBreadcrumbs from "../../components/breadcrumb/breadcrumb";
import CartItem from "../../components/cartItem/cartItem";
import Footer from "../../components/footer/footer";
import OrderSummary from "../../components/orderSummary/orderSummary";
import styles from "../../styles/shoppingCart.module.scss";
function ShoppingCart() {
    const breadcrumbLinks = [
        { name: 'Nét - Homepage', path: '/' },
        { name: 'Giỏ hàng', path: '/shoppingcart' },
    ];
    const items = [
        { name: 'Broadcloth Shirt | Button Down', gender: 'Nam', color: '#ADB2C7', size: 'L', price: 300000, pic: "product_image5.png", id: '123' },
        { name: 'Broadcloth Shirt | Button Down', gender: 'Nam', color: '#BCAAB0', size: 'L', price: 300000, pic: "product_image6.jpg", id: '234' },
        { name: 'KENSHI YONEZU Short Sleeve UT (Ghibli) ', gender: 'Nam', color: '#F4F3EF', size: 'L', price: 300000, pic: "product_image7.jpg", id: '345' },
    ]
    const [list, setList] = React.useState(items);
    function handleRemove(id) {
        const newList = list.filter((item) => item.id !== id);
        setList(newList);
    }
    function subTotal() {
        return items.reduce((sum, item) => sum + item.price, 0);
    }
    return (
        <>
            <BasicBreadcrumbs links={breadcrumbLinks} />
            <h2 className={styles.title}>Giỏ hàng </h2>
            <CartItem items={list} onRemove={handleRemove} />
            <OrderSummary itemsSubtotal={subTotal()} vatIncluded={0} couponDiscount={0} orderTotal={subTotal() + 0 - 0} />
            <Footer />
        </>

    )
}
export default ShoppingCart;