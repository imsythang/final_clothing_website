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
        if (!fullName || typeof fullName !== "string") {
            return { lastName: "", middleAndFirstName: "" }; // Trả về giá trị mặc định nếu fullName không hợp lệ
        }
        const parts = fullName.trim().split(" ");
        const lastName = parts[0]; // Họ
        const middleAndFirstName = parts.slice(1).join(" ");

        return {
            lastName,
            middleAndFirstName
        };
    };
    const formatDateOfBirth = (dateArray) => {
        if (!Array.isArray(dateArray) || dateArray.length !== 3) {
            return ""; // Trả về chuỗi rỗng nếu không hợp lệ
        }

        const [year, month, day] = dateArray;

        // Đảm bảo thêm số 0 vào ngày và tháng nếu cần
        const formattedDay = day.toString().padStart(2, "0");
        const formattedMonth = month.toString().padStart(2, "0");

        return `${formattedDay}/${formattedMonth}/${year}`;
    };
    const { lastName, middleAndFirstName } = splitName(formData.fullName);
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 0,
        }).format(value);
    };
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
                        <input type="text" id="dob" name="dob" value={formatDateOfBirth(formData.dateOfBirth)} readonly>
                        </input>
                    </label>
                    <label className={styles.component} style={{ top: '340px', width: "100px" }}>Địa chỉ
                        <input type="text" id="address" name="address" value={(formData.address)} readonly>
                        </input>
                    </label>
                    <label className={styles.component} style={{ left: '650px' }}>Tên
                        <input type="text" id="lnam" name="lnam" value={middleAndFirstName} readonly>
                        </input>
                    </label>
                    <label className={styles.component} style={{ top: '144px', left: '650px' }}>SĐT
                        <input type="text" id="dob" name="dob" value={formData.phoneNumber} readonly>
                        </input>
                    </label>
                    <label className={styles.component} style={{ top: '240px', left: '650px', width: '100px' }}>Giới tính
                        <input type="text" id="gender" name="gender" value={formData.gender === "man" ? "Nam" : (formData.gender === "other" ? "Khác" : "Nữ")} readonly>
                        </input>
                    </label>
                    <label className={styles.component} style={{ top: '340px', left: '650px', width: '100px' }}>Số đơn
                        <input type="text" id="dob" name="dob" value={formData?.order?.length || 0} readonly></input>
                    </label>
                </form>
            </div>
            {formData?.order?.length > 0 ? (
                (formData.order).map((data, index) => {
                    return (
                        <div className={styles.info} style={{ top: `${850 + index * 270}px`, height: '250px' }}>
                            <h2> Thông tin mã đơn {data.orderID}</h2>
                            <form className={styles.infoSpecific}>
                                <label className={styles.component} style={{ width: '100px' }}>Mã đơn
                                    <input type="text" value={data.orderID} readonly>
                                    </input>
                                </label>
                                <label className={styles.component} style={{ top: '144px', width: '100px' }}>Ngày đặt
                                    <input type="text" value={formatDateOfBirth(data.date)} readonly>
                                    </input>
                                </label>
                                <label className={styles.component} style={{ left: '650px', width: '100px' }}>Tổng tiền
                                    <input type="text" id="lnam" name="lnam" value={formatCurrency(data.total_price)} readonly>
                                    </input>
                                </label>
                                <label className={styles.component} style={{ top: '144px', left: '650px', width: '100px' }}>Trạng thái
                                    <input type="text" id="dob" name="dob" value={data.status === "completed" ? "Hoàn tất" : "Chưa hoàn tất"} readonly>
                                    </input>
                                </label>

                            </form>
                        </div >
                    )

                })
            )
                : (
                    <p>No products found.</p>)}

            <Footer />
        </>
    );
}
export default Profile;
