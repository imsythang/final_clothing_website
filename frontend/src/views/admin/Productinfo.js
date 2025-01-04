import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import productApi from '../../api/productApi';
import styles from '../../styles/productinfo.module.scss';
const Productinfo = () => {
    const navigate = useNavigate();
    const handleCreateProduct = () => {
        navigate('/listproduct/newproduct');
    };
    const token = window.localStorage.getItem("token");
    const [prdtList, setPrdtList] = useState([])
    useEffect(() => {
        const fetchPrdt = async () => {
            const emp = await productApi.getAll(token);
            setPrdtList(emp)
        }
        fetchPrdt();
    }, [])
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 0,
        }).format(value);
    };
    return (
        <>
            <div className={styles.head}>
                <h2 className={styles.title}>Danh sách sản phẩm</h2>
                <button className={styles.btn} onClick={handleCreateProduct}>Tạo sản phẩm</button>
            </div>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Mã sản phẩm</th>
                        <th> Sản phẩm</th>
                        <th>Loại sản phẩm</th>
                        <th>Hãng</th>
                        <th>Giá bán</th>
                        <th>Tồn kho</th>
                        <th> Tình trạng</th>
                    </tr>
                </thead>
                <tbody>
                    {prdtList.map((data) => {
                        return (
                            <>
                                <tr >
                                    <td>{data.productID}</td>
                                    <td>{data.name}</td>
                                    <td>{data.type}</td>
                                    <td>{data.brand}</td>
                                    <td>{formatCurrency(data.priceSelling)}</td>
                                    <td>{data.quantityImport - data.quantitySold}</td>
                                    <td>{data.status === "in_stock" ? "Còn hàng" : "Hết hàng"}</td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
};

export default Productinfo;