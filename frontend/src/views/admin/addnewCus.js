import Navbar from "../../components/NavigationBar/Navbar";
import styles from '../styles/addnewCus.module.scss';
import { useNavigate } from "react-router-dom";
function AddNewCus() {
    const navigate = useNavigate()
    return (
        <>
            <div className={styles.title}>Thêm khách hàng</div>
            <form>
                <div className={styles.content}>
                    <div className={styles.detail}>
                        <h3>Thông tin cơ bản</h3>
                        <div className={styles.leftitem}>
                            <label>Họ</label>
                            <input type="text" id="fname" placeholder="Nhập họ khách hàng"></input>
                            <label>Email</label>
                            <input type="email" id="enail" placeholder="Nhập email khách hàng"></input>
                            <label>Ngày sinh</label>
                            <input type="date" id="dob" placeholder="Nhập Ngày sinh khách hàng"></input>
                        </div>
                        <div className={styles.rightitem}>
                            <label>Tên</label>
                            <input type="text" id="lname" placeholder="Nhập tên khách hàng"></input>
                            <label>Số điện thoại</label>
                            <input type="tel" id="tel" placeholder="Nhập số điện thoại khách hàng"></input>
                            <label>Giới tính</label>
                            <select id="sex">
                                <option value=""></option>
                                <option value="male">Nam</option>
                                <option value="female">Nữ</option>
                            </select>
                        </div>
                        <div className={styles.marketing}>
                            <input type="checkbox" id="marketing"></input>
                            <label>Khách hàng muốn nhận thông tin tiếp thị</label>
                        </div>
                    </div>
                </div>
                <div className={styles.content2}>
                    <h3>Thông tin liên hệ</h3>
                    <div className={styles.leftitem2}>

                        <label>Quốc gia</label>
                        <input type="text" id="nation" defaultValue={"Việt Nam"}></input>
                        <label>Quận/Huyện</label>
                        <input type="text" id="district" placeholder="Nhập quận/huyện"></input>
                    </div>
                    <div className={styles.rightitem2}>
                        <label>Tỉnh/Thành phố</label>
                        <input type="text" id="province" placeholder="Nhập tỉnh/thành phố"></input>
                        <label>Phường/Xã</label>
                        <input type="text" id="ward" placeholder="Nhập phường/xã"></input>
                    </div>
                    <div className={styles.addr}><label>Địa chỉ</label>
                        <textarea id="addr" placeholder="Nhập địa chỉ" ></textarea>
                    </div>
                </div>
                <div className={styles.content3}>
                    <h3>Ghi chú</h3>
                    <textarea id="note" placeholder="Nhập ghi chú về khách hàng"></textarea>
                </div>
                <input type="submit" value="Lưu" className={styles.save_button} onClick={() => navigate(`/listcus`)}></input>
            </form>
        </>
    )
}
export default AddNewCus;