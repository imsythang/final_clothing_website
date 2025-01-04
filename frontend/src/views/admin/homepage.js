import { faBox, faSackDollar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../../styles/adminHomePage.module.scss";

function Home() {
    const [data, setData] = useState({
        total: 0,      // Default value for total
        customers: 0,    // Default value for customers
        orders: 0        // Default value for orders
    });
    const [loading, setLoading] = useState(true); // Loading state
    const token = window.localStorage.getItem("token");

    useEffect(() => {
        async function fetchUserData() {
            try {
                const response = await axios.get('http://localhost:8080/admin/totalSalesToday', {
                    headers: {
                        'Authorization': `Bearer ${token}` // Add token to header
                    }
                });

                // Assuming the API returns data in the format:
                // { total: <number>, customers: <number>, orders: <number> }
                setData(response.data);
                setLoading(false); // Data has been successfully fetched
            } catch (error) {
                console.error('Error fetching user data:', error);
                setLoading(false); // Stop loading even if there's an error
            }
        }

        fetchUserData();
    }, [token]);

    if (loading) {
        // Optional: Display a loading spinner or animation (e.g., "Looxi gif")
        return (
            <div className={styles.loading}>
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className={styles.dashboard}>
            <section className={styles.dashboard_header}>
                <h2>KẾT QUẢ KINH DOANH TRONG NGÀY</h2>
                <hr></hr>
                <div className={styles.dashboard_stats}>
                    {/* total */}
                    <div className={styles.stat_item}>
                        <span className={styles.icon}>
                            <FontAwesomeIcon icon={faSackDollar} />
                        </span>
                        <div>
                            <p>Doanh thu</p>
                            <h3>{data.total ? data.total.toLocaleString() : "0"} VND</h3>

                        </div>
                    </div>

                    <div className={styles.vertical_line}></div>

                    {/* Customers */}
                    <div className={styles.stat_item}>
                        <span className={styles.icon}>
                            <FontAwesomeIcon icon={faBox} />
                        </span>
                        <div>
                            <p>Khách hàng</p>
                            <h3>{data.customerCount}</h3>
                        </div>
                    </div>

                    <div className={styles.vertical_line}></div>

                    {/* Orders */}
                    <div className={styles.stat_item}>
                        <span className={styles.icon}>
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                        <div>
                            <p>Đơn hàng</p>
                            <h3>{data.orderCount}</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.dashboard_overview}>
                <h3>Tổng quan báo cáo</h3>
                <div className={styles.chart}>
                    <p>Biểu đồ báo cáo</p>
                </div>
            </section>

            <section className={styles.dashboard_products}>
                <div className={styles.product_section}>
                    <h4>Sản phẩm bán chạy</h4>
                </div>
                <div className={styles.product_section}>
                    <h4>Sản phẩm xu hướng</h4>
                </div>
            </section>
        </div>
    );
}

export default Home;
