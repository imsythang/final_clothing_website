import axios from 'axios'; // Import Axios
import React, { useEffect, useState } from 'react';
import Footer from '../../components/footer/footer';
import styles from '../../styles/inforcustomer.module.scss';
function MyInfo() {

    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dob: '',
        gender: '',
        address: '',
    });

    const token = window.localStorage.getItem("token");


    useEffect(() => {
        async function fetchUserData() {
            try {
                const response = await axios.get('http://localhost:8080/user/myInfo', {
                    headers: {
                        'Authorization': `Bearer ${token}` // Thêm token vào header
                    }
                });
                const result = response.data.result;

                // Chuyển đổi ngày sinh từ [YYYY, MM, DD] thành chuỗi "DD/MM/YYYY"
                const formattedDOB = `${result.dob[2].toString().padStart(2, '0')}/${result.dob[1].toString().padStart(2, '0')}/${result.dob[0]}`;

                const gender = result.gender === "man" ? "Nam" : (result.gender === "Nữ" ? "Female" : "Không xác định");

                // Cập nhật userData
                setUserData({
                    firstName: result.firstName || '',
                    lastName: result.lastName || '',
                    email: result.email || '',
                    phone: result.phoneNumber || '',
                    dob: formattedDOB || '',
                    gender: gender || '',
                    address: result.address || '',
                });
            } catch (error) {
                console.error('Lỗi khi lấy thông tin người dùng:', error);
            }
        }

        fetchUserData();
    }, []);

    return (
        <>
            <h2 className={styles.title}> Hồ sơ khách hàng</h2>
            <form className={styles.takeNote}>
                <label className={styles.takeNoteTitle}>Ghi chú:
                    <input type="text" id="note" name="note" placeholder="Nhập ghi chú về khách hàng">
                    </input>
                </label>
            </form>
            <div className={styles.info}>
                <h2> Thông tin cơ bản</h2>
                <form className={styles.infoSpecific}>
                    <label className={styles.component}>Họ
                        <input type="text" id="fname" name="fname" value={userData.firstName} readOnly tabIndex="-1">
                        </input>
                    </label>
                    <label className={styles.component} style={{ top: '144px' }}>Email
                        <input type="email" id="mail" name="email" value={userData.email} readOnly tabIndex="-1">
                        </input>
                    </label>
                    <label className={styles.component} style={{ top: '240px', width: "100px" }}>Ngày sinh
                        <input type="text" id="dob" name="dob" value={userData.dob} readOnly tabIndex="-1">
                        </input>
                    </label>
                    <label className={styles.component} style={{ left: '650px' }}>Tên
                        <input type="text" id="lnam" name="lnam" value={userData.lastName} readOnly tabIndex="-1">
                        </input>
                    </label>
                    <label className={styles.component} style={{ top: '144px', left: '650px' }}>SĐT
                        <input type="text" id="dob" name="dob" value={userData.phone} readOnly tabIndex="-1">
                        </input>
                    </label>
                    <label className={styles.component} style={{ top: '240px', left: '650px', width: '100px' }}>Giới tính
                        <input type="text" id="gender" name="gender" value={userData.gender} readOnly tabIndex="-1">
                        </input>
                    </label>
                    <label className={styles.component} style={{ top: '340px', width: '100px' }}>Địa chỉ
                        <input type="text" id="fname" name="fname" value={userData.address} readOnly
                            tabIndex="-1">
                        </input>
                    </label>
                </form>
            </div>
            <div style={{ marginTop: '900px' }}>
                <Footer />
            </div>

        </>
    );
}

export default MyInfo;
