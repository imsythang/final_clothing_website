import React, { useState } from 'react';
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/navbar';
import styles from '../styles/inforcustomer.module.scss';
function Profile() {
    const [formData, setFormData] = useState({
        firstName: 'Lê Ngọc',
        lastName: 'Anh',
        email: 'ngocanh@gmail.com',
        phone: '+84234567890',
        dob: '01/08/1994',
        gender: 'female',
        country: 'Viet Nam',
        city: 'TP Hồ Chí Minh',
        district: 'Quận 12',
        ward: 'Phường Thạnh Lộc',
        address: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        // Save or submit formData logic here
        console.log('Saved data:', formData);
    };

    return (
        <>
            <Navbar />
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
                        <input type="text" id="fname" name="fname" value={formData.firstName}>
                        </input>
                    </label>
                    <label className={styles.component} style={{ top: '144px' }}>Email
                        <input type="email" id="mail" name="email" value={formData.email}>
                        </input>
                    </label>
                    <label className={styles.component} style={{ top: '240px', width: "100px" }}>Ngày sinh
                        <input type="text" id="dob" name="dob" value={formData.dob} readonly>
                        </input>
                    </label>
                    <label className={styles.component} style={{ left: '380px' }}>Tên
                        <input type="text" id="lnam" name="lnam" value={formData.lastName}>
                        </input>
                    </label>
                    <label className={styles.component} style={{ top: '144px', left: '380px' }}>SĐT
                        <input type="text" id="dob" name="dob" value={formData.phone}>
                        </input>
                    </label>
                    <label className={styles.component} style={{ top: '240px', left: '380px', width: '100px' }}>Giới tính
                        <input type="text" id="gender" name="gender" value={formData.gender} readonly>
                        </input>
                    </label>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default Profile;
