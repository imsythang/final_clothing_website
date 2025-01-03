import Navbar from "../components/NavigationBar/Navbar";
import styles from '../styles/empInfo.module.scss';
import { useNavigate } from "react-router-dom";
function EmpInfo() {
    const navigate = useNavigate()
    return (
        <>
            <Navbar />
            <div className={styles.title}>Le Ngoc Anh</div>
            <button className={styles.delete_button} onClick={() => navigate(`/listemp/deactive`)}>Vô hiệu hóa</button>
            <form>
                <div className={styles.content}>
                    <div className={styles.detail}>
                        <h3>Le Ngoc Anh</h3>
                        <p>111 đường ABC, phường Cẩm Thành, Thành phố Cẩm Phả, Quảng Ninh, Vietnam</p>

                        <label> Ghi chú</label>
                        <textarea placeholder="Nhập ghi chú về khách hàng"></textarea>

                        <hr></hr>
                        <div className={styles.leftitem}>
                            <h5>Chức vụ</h5>
                            <p>Nhân viên bán hàng</p>
                        </div>

                    </div>
                </div>
                <div className={styles.content2}>
                    <h3>Liên hệ</h3>
                    <label>Email</label>
                    <input type="email" id="email" defaultValue={"ngocanh@gmail.com"}></input>
                    <label>Số điện thoại</label>
                    <input type="tel" id="tel" defaultValue={"+8432564981"}></input>
                    <label>Địa chỉ</label>
                    <textarea id="addr" defaultValue={"111 đường ABC, phường Cẩm Thành, Thành phố Cẩm Phả, Quảng Ninh, Vietnam"}></textarea>
                </div>
                <input type="submit" value="Lưu" className={styles.save_button} onClick={() => navigate(`/listemp`)}></input>
            </form>
        </>
    )
}
export default EmpInfo;