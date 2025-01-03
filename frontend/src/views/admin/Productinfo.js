import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import productApi from '../api/productApi';
import styles from '../../styles/productinfo.module.scss';
const Productinfo = () => {
    const navigate = useNavigate();
    const handleCreateProduct = () => {
        navigate('/listproduct/newproduct');
    };
    const [prdtList, setPrdtList] = useState([])
    useEffect(() => {
        const fetchPrdt = async () => {
            const emp = await productApi.getAll();
            setPrdtList(emp)
        }
        fetchPrdt();
    }, [])
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
                        <th>Kho</th>
                        <th> Loại sản phẩm</th>
                    </tr>
                </thead>
                <tbody>
                    {prdtList.map((data) => {
                        return (
                            <>
                                <tr onClick={() => navigate(`/listproduct/edit`)}>
                                    <td>{data.product_id}</td>
                                    <td>{data.describle}</td>
                                    <td>{data.location}</td>
                                    <td>{data.kind}</td>
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