import React, { useState, useEffect } from 'react';
import Footer from '../../components/footer/footer';
import styles from '../../styles/inforcustomer.module.scss';
import customerApi from '../../api/customerApi';
import { useParams } from 'react-router-dom';
function Profile() {
    const { cusID } = useParams()
    const token = window.localStorage.getItem("token");
    const [formData, setCusList] = useState([])
    useEffect(() => {
        const fetchCus = async () => {
            const emp = await customerApi.getSpecific(cusID, token);
            setCusList(emp)
        }
        fetchCus();
    }, [])
    const splitName = (fullName) => {
        const parts = fullName.trim().split(" ");
        const lastName = parts[0]; // Họ
        const middleAndFirstName = parts.slice(1).join(" ");

        return {
            lastName,
            middleAndFirstName
        };
    };
    const { lastName, middleAndFirstName } = splitName(formData.fullName);
    return (
        <>
            <h2 className={styles.title}> Hồ sơ khách hàng</h2>
            <div className={styles.info}>
                <h2> Thông tin cơ bản</h2>
                <form className={styles.infoSpecific}>
                    <label className={styles.component}>Họ
                        <input type="text" id="fname" name="fname" value={lastName} readonly>
                        </input>
                    </label>
                    <label className={styles.component} style={{ top: '144px' }}>Email
                        <input type="email" id="mail" name="email" value={formData.email} readonly>
                        </input>
                    </label>
                    <label className={styles.component} style={{ top: '240px', width: "100px" }}>Ngày sinh
                        <input type="text" id="dob" name="dob" value={formData.dob} readonly>
                        </input>
                    </label>
                    <label className={styles.component} style={{ left: '380px' }}>Tên
                        <input type="text" id="lnam" name="lnam" value={middleAndFirstName} readonly>
                        </input>
                    </label>
                    <label className={styles.component} style={{ top: '144px', left: '380px' }}>SĐT
                        <input type="text" id="dob" name="dob" value={formData.phone} readonly>
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
