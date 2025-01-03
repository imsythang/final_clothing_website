import { faShopify } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown, faChevronRight, faHouse, faHouseChimneyWindow, faReceipt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import styles from "./Navbar.module.scss";
function NavbarAdmin() {
    let navigate = useNavigate();
    const shop_id = 20;
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);

    // Logout function
    const handleLogout = () => {
        window.localStorage.removeItem("LoggedIn");
        window.localStorage.removeItem("token"); // Assuming you store token under 'token'
        window.localStorage.removeItem("role");


        // Redirect to home or login page
        navigate("/"); // Redirect to the homepage or any other page
    };

    return (
        <>
            <Header />
            <div className={styles.navbar}>
                <div className={styles.home} onClick={() => navigate(`/${shop_id}`)}>
                    <FontAwesomeIcon icon={faHouse} />
                    <a> Nét</a>
                </div>
                <div className={styles.menu_item1} onClick={() => navigate(`/${shop_id}`)}>
                    <FontAwesomeIcon icon={faHouseChimneyWindow} />
                    <a> Tổng quan</a>
                </div>
                <div className={styles.menu_item2} onClick={() => setIsOpen(!isOpen)}>
                    <div className={styles.item2}>
                        <span><FontAwesomeIcon icon={faReceipt} />
                            <a>Đơn hàng </a>
                        </span>
                        <span className={styles.updown}>{isOpen ? <FontAwesomeIcon icon={faChevronDown} /> :
                            <FontAwesomeIcon icon={faChevronRight} />}</span>
                    </div>
                    {isOpen && (
                        <ul className={styles.submenu}>
                            <li onClick={() => navigate(`/listorder`)}>Danh sách đơn hàng</li>
                            <li onClick={() => navigate(`/neworder`)}>Đơn hàng mới</li>
                            <li onClick={() => navigate(`/defectiveorder`)}>Đơn hàng lỗi</li>
                            <li onClick={() => navigate(`/issueorder`)}>Đơn nhập hàng</li>
                        </ul>
                    )}
                </div>
                <div className={styles.menu_item3} onClick={() => setIsOpen1(!isOpen1)}>
                    <div className={styles.item3}>
                        <span><FontAwesomeIcon icon={faShopify} />
                            <a>Sản phẩm </a>
                        </span>
                        <span className={styles.updown}>{isOpen1 ? <FontAwesomeIcon icon={faChevronDown} /> :
                            <FontAwesomeIcon icon={faChevronRight} />}</span>
                    </div>
                    {isOpen1 && (
                        <ul className={styles.submenu}>
                            <li onClick={() => navigate(`/listproduct`)}>Danh sách sản phẩm</li>
                            <li onClick={() => navigate(`/supplier`)}>Nhà cung cấp sản phẩm</li>
                            <li onClick={() => navigate(`/inventory`)}>Quản lý kho</li>
                        </ul>
                    )}
                </div>
                <li className={styles.menu_item4} onClick={() => navigate(`/listcus`)}>
                    Khách hàng
                </li>
                <li className={styles.menu_item5} onClick={() => navigate(`/listemp`)}>
                    Khuyến mãi
                </li>
                <li className={styles.menu_item6} onClick={handleLogout}>
                    Đăng xuất
                </li>
            </div>
        </>

    );
};

export default NavbarAdmin;
