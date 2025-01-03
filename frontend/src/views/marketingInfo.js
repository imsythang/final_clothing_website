import Navbar from "../components/NavigationBar/Navbar";
import styles from '../styles/marketingInfo.module.scss';
import { useNavigate, useParams } from "react-router-dom";
function MarketingInfo() {
    const navigate = useNavigate()
    const { marketingId } = useParams()
    return (
        <>
            <Navbar />
            <div className={styles.title}>Mã tiếp thị: {marketingId}</div>
            <button className={styles.delete_button} onClick={() => navigate(`/listmarketing/deactive`)}>Ngừng tiếp thị</button>
            <form>
                <div className={styles.content}>
                    <div className={styles.detail}>
                        <h3>Tên chương trình tiếp thị</h3>
                        <input type="text" defaultValue={"abc"} readOnly></input>
                        <label> Ghi chú</label>
                        <textarea id="note" placeholder="Nhập ghi chú" defaultValue={"Chỉ dành cho khách hàng mới"} readOnly></textarea>
                    </div>
                </div>
                <div className={styles.content2}>
                    <h3>Loại tiếp thị</h3>
                    <input type="text" defaultValue={"Theo phần trăm"} readOnly></input>
                </div>
                <div className={styles.content4}>
                    <h3>Giá trị</h3>
                    <div className={styles.marketingleft}>
                        <label>Giá trị tiếp thị</label>
                        <input type="text" id="amount" defaultValue={"10%"} readOnly></input>
                    </div>
                    <div className={styles.marketingright}>
                        <label>Giá trị tiếp thị tối đa (Nếu có)</label>
                        <input type="text" id="max_amount" defaultValue={"500.000 VNĐ"} readOnly></input>
                    </div>
                    <div className={styles.objectives}>
                        <h5>Áp dụng cho</h5>
                        <p>Sản phẩm nhất định</p>
                        <input type="text" id="M234S" defaultValue={"Áo thun nam co giãn họa tiết dễ thương"} readOnly></input>
                        <input type="text" id="M234D" defaultValue={"Áo nỉ nam họa tiết Doraemon"} readOnly></input>
                    </div>
                    <div className={styles.checkbox}>
                        <input type="checkbox" id="once_per_order" defaultChecked disabled readOnly></input>
                        <h6>Mã Tiếp thị sẽ áp dụng 1 lần cho 1 đơn hàng</h6>

                        <p>Bỏ tích nghĩa là mã giảm giá sẽ được áp dụng vào mỗi sản phẩm trong đơn hàng.</p>
                    </div>
                </div>
                <div className={styles.content5}>
                    <h3>Điều kiện áp dụng</h3>
                    <input type="text" id="none" defaultValue={"Không có"} readOnly></input>
                </div>
                <div className={styles.content3}>
                    <h3>Thời gian áp dụng</h3>
                    <div className={styles.timeleft}>
                        <label>Ngày áp dụng</label>
                        <input type="text" id="startdate_discount" defaultValue={"21/06/2024"} readOnly></input>
                        <label>Thời điểm áp dụng</label>
                        <input type="text" id="starttime_discount" defaultValue={"11:00"} readOnly></input>
                    </div>
                    <div className={styles.timeright}>
                        <label>Ngày kết thúc</label>
                        <input type="text" id="enddate_discount" defaultValue={"25/11/2024"} readOnly></input>
                        <label>Thời điểm kết thúc</label>
                        <input type="text" id="endtime_discount" defaultValue={"6:00"} readOnly></input>
                    </div>
                </div>
                <button className={styles.edit_button} onClick={() => navigate(`/listmarketing/edit/:${marketingId}`)}>Sửa</button>
                <button className={styles.back_button} onClick={() => navigate(`/listmarketing`)}>Quay lại</button>
            </form>
        </>
    )
}
export default MarketingInfo;