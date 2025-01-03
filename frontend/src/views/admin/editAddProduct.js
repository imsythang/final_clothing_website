import Navbar from "../../components/NavigationBar/Navbar";
import styles from '../../styles/EditAddProduct.module.scss';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function EditAddProduct() {
    const navigate = useNavigate();
    const [productName, setProductName] = useState("ALRism Cotton Ribbed Polo Shirt");
    const [productDetails, setProductDetails] = useState("");
    const [material, setMaterial] = useState("");
    const [status, setStatus] = useState("hiển thị");
    const [category, setCategory] = useState("áo");
    const [supplier, setSupplier] = useState("");
    const [versions, setVersions] = useState([
        { color: "Trắng", size: "S", price: "203.000 VND", sku: "abc" },
    ]);

    const handleAddVersion = () => {
        setVersions([...versions, { color: "", size: "", price: "", sku: "" }]);
    };

    const handleRemoveVersion = (index) => {
        const updatedVersions = versions.filter((_, i) => i !== index);
        setVersions(updatedVersions);
    };

    return (
        <>
            <div className={styles.content}>
                <h1>{productName}</h1>
                <div className={styles['form-container']}>
                    <div className={styles.product}>
                        <div className={styles['form-group']}>
                            <label htmlFor="product-name">Tên sản phẩm</label>
                            <input
                                type="text"
                                id="product-name"
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                            />
                        </div>

                        <div className={styles['form-group']}>
                            <label htmlFor="product-details">Chi tiết sản phẩm</label>
                            <textarea
                                id="product-details"
                                rows={4}
                                value={productDetails}
                                onChange={(e) => setProductDetails(e.target.value)}
                            />
                        </div>

                        <div className={styles['form-group']}>
                            <label htmlFor="material">Chất liệu / Hướng dẫn sử dụng</label>
                            <textarea
                                id="material"
                                rows={4}
                                value={material}
                                onChange={(e) => setMaterial(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className={styles['radio-group']}>
                        <div>
                            <p>Trạng thái</p>
                            <label>
                                <input
                                    type="radio"
                                    name="status"
                                    value="hiển thị"
                                    checked={status === "hiển thị"}
                                    onChange={() => setStatus("hiển thị")}
                                /> Hiển thị
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="status"
                                    value="ẩn"
                                    checked={status === "ẩn"}
                                    onChange={() => setStatus("ẩn")}
                                /> Ẩn
                            </label>
                        </div>

                        <div>
                            <p>Phân loại</p>
                            <label>
                                <input
                                    type="radio"
                                    name="category"
                                    value="quần"
                                    checked={category === "quần"}
                                    onChange={() => setCategory("quần")}
                                /> Quần
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="category"
                                    value="áo"
                                    checked={category === "áo"}
                                    onChange={() => setCategory("áo")}
                                /> Áo
                            </label>
                        </div>

                        <div className={styles.supplier}>
                            <p>Nhà cung cấp</p>
                            <input
                                type="text"
                                value={supplier}
                                onChange={(e) => setSupplier(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.gr1}>
                    <label>Ảnh sản phẩm</label>
                    <button className={styles['image-upload']}>Thêm ảnh sản phẩm</button>
                    <div>
                        <img src="/img/ao1.png" alt="Áo mẫu 1" />
                        <img src="/img/ao2.png" alt="Áo mẫu 2" />
                    </div>
                </div>

                <div className={styles['create-table']}>
                    <label>Phiên bản</label>
                    <button onClick={handleAddVersion}>Thêm phiên bản</button>
                    <table>
                        <thead>
                            <tr>
                                <th>Màu sắc</th>
                                <th>Kích thước</th>
                                <th>Giá</th>
                                <th>SKU</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {versions.map((version, index) => (
                                <tr key={index}>
                                    <td>{version.color}</td>
                                    <td>{version.size}</td>
                                    <td>{version.price}</td>
                                    <td>{version.sku}</td>
                                    <td>
                                        <button onClick={() => handleRemoveVersion(index)}>Xóa</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className={styles.btn}>
                    <button onClick={() => navigate(-1)}>Quay lại</button>
                </div>
            </div>
        </>
    );
}

export default EditAddProduct;
