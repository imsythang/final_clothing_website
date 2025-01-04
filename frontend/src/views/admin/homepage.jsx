import { faBox, faSackDollar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../../styles/adminHomePage.module.scss";
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale, // This is the "category" scale
    LinearScale,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

// Register required components
ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend
);

function Home() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state
    const token = window.localStorage.getItem("token");

    useEffect(() => {
        async function fetchUserData() {
            try {
                const response = await axios.get('http://localhost:8080/admin/doanhthu', {
                    headers: {
                        'Authorization': `Bearer ${token}` // Add token to header
                    }
                });
                console.log(response.data);

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
                    {/* Total */}
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
                    <Bar
                        data={{
                            labels: data.map((item) => item.day), // Sample labels
                            datasets: [
                                {
                                    label: "Doanh thu",
                                    data: data.map((item) => item.total), // Sample data
                                    backgroundColor: "rgba(75,192,192,0.4)",
                                    borderColor: "rgba(75,192,192,1)",
                                    borderWidth: 1
                                }
                            ]
                        }}
                        options={{
                            responsive: true,
                            plugins: {
                                legend: {
                                    position: 'top'
                                },
                                title: {
                                    display: true,
                                    text: 'Doanh Thu Biểu Đồ'
                                }
                            }
                        }}
                    />
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
