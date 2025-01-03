import Navbar from "../../components/NavigationBar/Navbar";
import styles from '../styles/AddSupply.module.scss';
import { useNavigate } from "react-router-dom";
function AddSupply() {
    const navigate = useNavigate();
    const handleReturnSupplier = () => {
        navigate('/supplier');
    };
    return (
        <>
            <div className={styles.content}>
                <h1>Thêm nhà cung cấp</h1>
                <form>
                    <div className={styles.form_container}>
                        <div className={styles.Supply_detail}>
                            <div className={styles.form_group}>
                                <label for="supply-name">Tên nhà cung cấp</label>
                                <input type="text" id="supply-name"></input>
                            </div>

                            <div className={styles.form_group}>
                                <label for="supply">Chi tiết nhà cung cấp</label>
                                <textarea id="supply" rows="4"></textarea>
                            </div>
                        </div>

                        <div className={styles.Note}>
                            <div className={styles.Note}>
                                <p>Ghi chú</p>
                                <textarea name="note" id="notes"></textarea>
                            </div>
                        </div>
                    </div>

                    <div className={styles.form_group3}>
                        <label>Ảnh sản phẩm</label>
                        <label for="image-upload"><button className={styles.image_upload}>Thêm sản phẩm</button></label>
                    </div>
                </form>
                <div className={styles.cancel}><button className={styles.button} onClick={handleReturnSupplier}>Quay lại</button></div>
                <div className={styles.save}><button className={styles.button}>Lưu</button></div>
            </div>
        </>
    )
}
export default AddSupply;