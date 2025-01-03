import { useParams } from "react-router-dom";
import styles from "../../styles/adminHomePage.module.scss";
import NavbarAdmin from "../../components/NavigationBar/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSackDollar, faBox, faUser } from "@fortawesome/free-solid-svg-icons";

function Home() {
    //const { shop_id } = useParams();
    return (
        <>
            <NavbarAdmin/>
            <div className={styles.dashboard}>
                <section className={styles.dashboard_header}>
                    <h2>KẾT QUẢ KINH DOANH TRONG NGÀY</h2>
                    <hr ></hr>
                    <div className={styles.dashboard_stats}>
                    <div className={styles.stat_item}>
                        <span className={styles.icon}><FontAwesomeIcon icon={faSackDollar} /></span>
                        <div>
                        <p>Doanh thu</p>
                        <h3>0 VND</h3>
                        </div>
                    </div>
                    <div className={styles.vertical_line}></div>
                    <div className={styles.stat_item}>
                        <span className={styles.icon}><FontAwesomeIcon icon={faBox} /></span>
                        <div>
                        <p>Khách hàng</p>
                        <h3>0</h3>
                        </div>
                    </div>
                    <div className={styles.vertical_line}></div>
                    <div className={styles.stat_item}>
                        <span className={styles.icon}><FontAwesomeIcon icon={faUser} /></span>
                        <div>
                        <p>Đơn hàng</p>
                        <h3>0</h3>
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
            
        </>
    )
}
export default Home;