import Navbar from "../../components/NavigationBar/Navbar";
import styles from '../../styles/addnewMarketing.module.scss';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function AddNewMarketing() {
    const navigate = useNavigate()
    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const [selectedOption1, setSelectedOption1] = useState("");

    const handleOptionChange1 = (event) => {
        setSelectedOption1(event.target.value);
    };

    return (
        <>
            <div className={styles.title}>Thêm mã tiếp thị</div>
            <form>
                <div className={styles.content}>
                    <div className={styles.detail}>
                        <h3>Tên chương trình tiếp thị</h3>
                        <input type="text" placeholder="Nhập tên"></input>
                        <label> Ghi chú</label>
                        <textarea id="note" placeholder="Nhập ghi chú"></textarea>
                    </div>
                </div>
                <div className={styles.content2}>
                    <h3>Loại tiếp thị</h3>
                    <div className={styles.radio}>
                        <input type="radio" id="percent" name="radio"></input>
                        <label htmlFor="percent">Theo phần trăm</label>
                    </div>
                    <div className={styles.radio}>
                        <input type="radio" id="cost" name="radio"></input>
                        <label htmlFor="cost">Theo giá tiền</label>
                    </div>

                    <div className={styles.radio}>
                        <input type="radio" id="freeship" name="radio"></input>
                        <label htmlFor="freeship">Miễn phí vận chuyển</label>
                    </div>
                </div>
                <div className={styles.content4}>
                    <h3>Giá trị</h3>
                    <div className={styles.marketingleft}>
                        <label>Giá trị tiếp thị</label>
                        <input type="text" id="amount" placeholder="Nhập số tiền/phần trăm được giảm"></input>
                    </div>
                    <div className={styles.marketingright}>
                        <label>Giá trị tiếp thị tối đa (Nếu có)</label>
                        <input type="text" id="max_amount" placeholder="Nhập số tiền/phần trăm tối đa được giảm"></input>
                    </div>
                    <div className={styles.objectives}>
                        <h5>Áp dụng cho</h5>
                        <div className={styles.radio2}>
                            <input type="radio" name="radio2" id="all_product" value="all_product" checked={selectedOption === "all_product"} onClick={handleOptionChange}></input>
                            <label htmlFor="all_product">Toàn bộ sản phẩm</label>
                        </div>
                        <div className={styles.radio2}>
                            <input type="radio" name="radio2" id="specific_product" value="product" checked={selectedOption === "product"} onClick={handleOptionChange}></input>
                            <label htmlFor="specific_product">Sản phẩm nhất định</label>
                        </div>
                        <div className={styles.radio2}>
                            <input type="radio" name="radio2" id="specific_category" value="category" checked={selectedOption === "category"} onClick={handleOptionChange}></input>
                            <label htmlFor="specific_category">Danh mục nhất định</label>
                        </div>

                    </div>

                    {selectedOption === "product" && (
                        <div className={styles.product_search_field}>
                            <input type="text" placeholder="Tìm sản phẩm cụ thể..." />
                        </div>
                    )}
                    {selectedOption === "category" && (
                        <div className={styles.category_search_field}>
                            <input type="text" placeholder="Tìm danh mục cụ thể..." />
                        </div>
                    )}
                    <div className={styles.checkbox}>
                        <input type="checkbox" id="once_per_order"></input>
                        <h6>Mã Tiếp thị sẽ áp dụng 1 lần cho 1 đơn hàng</h6>

                        <p>Bỏ tích nghĩa là mã giảm giá sẽ được áp dụng vào mỗi sản phẩm trong đơn hàng.</p>
                    </div>
                </div>
                <div className={styles.content5}>
                    <h3>Điều kiện áp dụng</h3>
                    <div>
                        <div className={styles.radio3}>
                            <input type="radio" id="percent" name="radio3" value="none" checked={selectedOption1 === "none"} onClick={handleOptionChange1}></input>
                            <label htmlFor="percent">Không có</label>
                        </div>
                        <div className={styles.radio3}>
                            <input type="radio" id="cost" name="radio3" value="min_sum_cost" checked={selectedOption1 === "min_sum_cost"} onClick={handleOptionChange1}></input>
                            <label htmlFor="cost">Tổng giá trị đơn hàng tối thiểu</label>
                        </div>

                        <div className={styles.radio3}>
                            <input type="radio" id="freeship" name="radio3" value="min_sum_order" checked={selectedOption1 === "min_sum_order"} onClick={handleOptionChange1}></input>
                            <label htmlFor="freeship">Tổng sản phẩm được tiếp thị tối thiểu</label>
                        </div>
                    </div>

                    {selectedOption1 === "min_sum_cost" && (
                        <div className={styles.min_sum_field}>
                            <input type="text" placeholder="Nhập tổng giá trị đơn hàng tối thiểu" />
                        </div>
                    )}
                    {selectedOption1 === "min_sum_order" && (
                        <div className={styles.min_sum_field}>
                            <input type="text" placeholder="Nhập tổng số lượng sản phẩm tổi thiểu" />
                        </div>
                    )}
                </div>
                <div className={styles.content3}>
                    <h3>Thời gian áp dụng</h3>
                    <div className={styles.timeleft}>
                        <label>Ngày áp dụng</label>
                        <input type="date" id="startdate_discount"></input>
                        <label>Thời điểm áp dụng</label>
                        <input type="time" id="starttime_discount"></input>
                    </div>
                    <div className={styles.timeright}>
                        <label>Ngày kết thúc</label>
                        <input type="date" id="enddate_discount"></input>
                        <label>Thời điểm kết thúc</label>
                        <input type="time" id="endtime_discount"></input>
                    </div>

                </div>
                <input type="submit" value="Lưu" className={styles.save_button} onClick={() => navigate(`/listmarketing`)}></input>
            </form>
        </>
    )
}
export default AddNewMarketing;