import Navbar from "../../components/NavigationBar/Navbar";
import styles from '../../styles/EditSuply.module.scss';
import { useNavigate } from "react-router-dom";
function EditSuply() {
    const navigate = useNavigate()
    return (
        <>
            <div className={styles.content}>
                <h1>IVy Moda</h1>
                <div className={styles.form_container}>
                    <div className={styles.Supply_detail}>
                        <div className={styles.form_group}>
                            <label for="supply-name">Tên danh mục</label>
                            <input type="text" id="supply-name" placeholder="IVy Moda" ></input>
                        </div>

                        <div className={styles.form_group}>
                            <label for="supply">Chi tiết danh mục</label>
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

                <div className={styles.classify}>
                    <div className={styles.form_group1}>
                        <label>Điều kiện xếp loại:</label>
                        <div className={styles.classification_options}>
                            <div className={styles.classification_options1}>
                                <label for="request">Sản phẩm phải thỏa mãn:</label>
                            </div>

                            <div className={styles.classification_options2}>
                                <label>
                                    <input type="radio" name="condition" value="all" checked></input> Tất cả các điều kiện
                                </label>
                            </div>

                            <div className={styles.classification_options3}>
                                <label>
                                    <input type="radio" name="condition" value="some"></input> Một trong các điều kiện
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className={styles.above}>
                        <div className={styles.form_group2}>
                            <div className={styles.product_name}>
                                <label for="product-name">Tên sản phẩm chứa từ</label>
                            </div>
                            <div className={styles.product1}>
                                <button className={styles.product1}>IVy Moda</button>
                            </div>
                        </div>

                        <div className={styles.form_group3}>
                            <div className={styles.supplier1}>
                                <label for="supplier1">Nhà cung cấp chứa từ</label>
                            </div>
                            <div>
                                <button className={styles.supplier}>IVy Moda</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.create_table}>
                    <label>Sản phẩm</label>
                    <label for="version"><button className={styles.version}>Thêm sản phẩm</button></label>
                    <table>

                        <tbody>
                            <tr>
                                <td>1 <img src="/ASSIGNMENT/public/img/ao1.png" alt="mau1"></img></td>
                                <td>AIRism Cotton Ribbed Polo Shirt</td>
                                <td><button className={styles.remove_btn}>Xóa</button></td>
                            </tr>

                            <tr>
                                <td>2 <img src="/ASSIGNMENT/public/img/ao1.png" alt="mau1"></img></td>
                                <td>AIRism Cotton Ribbed Polo Shirt</td>
                                <td><button className={styles.remove_btn}>Xóa</button></td>
                            </tr>

                            <tr>
                                <td>3 <img src="/ASSIGNMENT/public/img/ao1.png" alt="mau1"></img></td>
                                <td>AIRism Cotton Ribbed Polo Shirt</td>
                                <td><button className={styles.remove_btn}>Xóa</button></td>
                            </tr>

                            <tr>

                                <td>4 <img src="/ASSIGNMENT/public/img/ao1.png" alt="mau1"></img></td>
                                <td>AIRism Cotton Ribbed Polo Shirt</td>
                                <td><button className={styles.remove_btn}>Xóa</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className={styles.cancel}><button className={styles.button}>Xóa danh mục</button></div>
                <div className={styles.save}><button className={styles.button}>Lưu</button></div>
            </div>
        </>
    )
}
export default EditSuply;