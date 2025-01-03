import Navbar from "../components/NavigationBar/Navbar";
import styles from '../styles/addProduct.module.scss';
import { useNavigate } from "react-router-dom";
function AddPoduct() {
    const navigate = useNavigate();
    const handleReturnProduct = () => {
        navigate('/listproduct');
    };
    return (
        <>
            <Navbar />
            <div className={styles.content}>
                <h1>Tạo sản phẩm</h1>
                <form>
                    <div className={styles.form_container}>
                        <div className={styles.Product}>
                            <div className={styles.form_group}>
                                <label for="product-name">Tên sản phẩm</label>
                                <input type="text" id="product-name"></input>
                            </div>

                            <div className={styles.form_group}>
                                <label for="product-details">Chi tiết sản phẩm</label>
                                <textarea id="product-details" rows="4"></textarea>
                            </div>

                            <div className={styles.form_group}>
                                <label for="material">Chất liệu / Hướng dẫn sử dụng</label>
                                <textarea id="material" rows="4"></textarea>
                            </div>
                        </div>

                        <div className={styles.radio_group}>
                            <div className={styles.radio_group1}>
                                <p>Trạng thái</p>
                                <label><input type="radio" name="status" value="hiển thị"></input> Hiển thị</label>
                                <label><input type="radio" name="status" value="ẩn"></input> Ẩn</label>
                            </div>

                            <div className={styles.radio_group2}>
                                <p>Phân loại</p>
                                <label><input type="radio" name="category" value="quần"></input> Quần</label>
                                <label><input type="radio" name="category" value="áo"></input> Áo</label>
                                <div className="supplier">
                                    <p>Nhà cung cấp</p>
                                    <label><input type="text" id="supplier"></input></label>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={styles.radio_group2}>
                        <label>Ảnh sản phẩm</label>
                        <label for="image-upload"><button className={styles.image_upload}>Thêm ảnh sản phẩm</button></label>
                    </div>

                    <div className={styles.create_table}>
                        <label>Phiên bản</label>
                        <label for="version"><button className={styles.version}>Thêm phiên bản</button></label>
                        <table>
                            <thead>
                                <tr>
                                    <th>Màu sắc</th>
                                    <th>Kích thước</th>
                                    <th>Giá</th>
                                    <th>SKU</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </form>
                <div className={styles.cancel}><button className={styles.button} onClick={handleReturnProduct}>Quay lại</button></div>
                <div className={styles.save}><button className={styles.button}>Lưu</button></div>
            </div>
        </>
    )
}
export default AddPoduct;