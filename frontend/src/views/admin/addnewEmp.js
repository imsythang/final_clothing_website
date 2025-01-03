import Navbar from "../../components/NavigationBar/Navbar";
import styles from '../styles/addnewEmp.module.scss';
import { useNavigate } from "react-router-dom";
function AddNewEmp() {
    const navigate = useNavigate()
    return (
        <>
            <div className={styles.title}>Thêm nhân viên</div>
            <form>
                <div className={styles.content}>
                    <div className={styles.detail}>
                        <h3>Thông tin cơ bản</h3>
                        <div className={styles.leftitem}>
                            <label>Họ</label>
                            <input type="text" id="fname" placeholder="Nhập họ "></input>
                            <label>Email</label>
                            <input type="email" id="enail" placeholder="Nhập email  "></input>
                            <label>Ngày sinh</label>
                            <input type="date" id="dob" placeholder="Nhập Ngày sinh  "></input>
                        </div>
                        <div className={styles.rightitem}>
                            <label>Tên</label>
                            <input type="text" id="lname" placeholder="Nhập tên  "></input>
                            <label>Số điện thoại</label>
                            <input type="tel" id="tel" placeholder="Nhập số điện thoại  "></input>
                            <label>Giới tính</label>
                            <select id="sex">
                                <option value=""></option>
                                <option value="male">Nam</option>
                                <option value="female">Nữ</option>
                            </select>
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
                    <h3>Công việc</h3>
                    <label>Chức vụ</label>
                    <select id="position">
                        <option value=""></option>
                        <option value="1">Chức vụ 1</option>
                        <option value="2">Chức vụ 2</option>
                        <option value="3">Chức vụ 3</option>
                        <option value="4">Chức vụ 4</option>
                        <option value="5">Chức vụ 5</option>
                    </select>
                    <label>Ngày nhận việc</label>
                    <input type="date" id="startwork"></input>
                    <label>Ngày nghỉ việc</label>
                    <input type="date" id="endwork"></input>
                </div>
                <div className={styles.content4}>
                    <h3>Hợp đồng làm việc</h3>
                    <input type="file" id="contract"></input>
                </div>
                <input type="submit" value="Lưu" className={styles.save_button} onClick={() => navigate(`/listemp`)}></input>
            </form>
        </>
    )
}
export default AddNewEmp;