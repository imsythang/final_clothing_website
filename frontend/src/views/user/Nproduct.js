import { faChevronDown, faChevronUp, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import axios from 'axios'; // Import Axios
import Filter from "../../components/Filter2/filter2";
import BasicBreadcrumbs from "../../components/breadcrumb/breadcrumb";
import Footer from '../../components/footer/footer';
import styles from "../../styles/Nproduct.module.scss";
import { Link } from 'react-router-dom';

function NProduct() {
    const breadcrumbLinks = [
        { name: 'Nét - Homepage', path: '/' },
        { name: 'Sản phẩm mới', path: '/' },
    ];

    const [openDiv, setOpenDiv] = useState(null);
    const [selectedOption, setSelectedOption] = useState('Nổi bật');
    const [products, setProducts] = useState([]); // Dữ liệu sản phẩm từ API
    const [loading, setLoading] = useState(true); // Trạng thái tải

    const handleFeaturedClick = (index, option) => {
        setOpenDiv(openDiv === index ? null : index);
        setSelectedOption(option);
    };

    // Gọi API khi component được mount
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8080/global/product/all'); // Gọi API bằng Axios
                console.log(response);
                setProducts(response.data); // Cập nhật danh sách sản phẩm
                setLoading(false); // Hoàn tất tải
            } catch (error) {
                console.error("Lỗi khi gọi API:", error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const Product = ({ product }) => {
        const { imageUrl, name, priceSelling, ratingCount, ratingAverage, productID } = product;

        return (
            <div className={`${styles.product} product product_${product.productID}`}>
                {/* Dùng Link để chuyển tới trang chi tiết sản phẩm */}

                <Link to={ `/product?productID=${productID}`}>
                    <img className={`image_${product.productID}`} src={imageUrl} alt={name} />
                </Link>


                <div style={{ padding: "0 0 15px 10px" }}>
                    <p className={styles.title}>{name}</p>
                    <p className={styles.price}>{priceSelling.toLocaleString()} VND</p>

                    {ratingAverage > 0 && (
                        <div className={styles.iconstar}>
                            <span>
                                {/* Hiển thị sao đầy đủ */}
                                {[...Array(Math.floor(ratingAverage))].map((_, index) => (
                                    <FontAwesomeIcon key={`full-${index}`} icon={faStar} />
                                ))}

                                {/* Hiển thị sao nửa nếu cần */}
                                {ratingAverage % 1 !== 0 && (
                                    <FontAwesomeIcon key="half" icon={faStarHalfAlt} style={{ opacity: 0.5 }} />
                                )}

                                {/* Hiển thị sao rỗng nếu có */}
                                {[...Array(5 - Math.ceil(ratingAverage))].map((_, index) => (
                                    <FontAwesomeIcon key={`empty-${index}`} icon={faStar} style={{ color: 'lightgray' }} />
                                ))}
                            </span>
                            <span style={{ fontSize: "20px", position: "relative", left: "5px", top: "-6px", color: "#000" }}>
                                ({ratingCount})
                            </span>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    const ProductList = () => (
        <div className={styles.product_list}>
            {products.map((product) => (
                <Product key={product.productID} product={product} />
            ))}
        </div>
    );

    return (
        <>
            <BasicBreadcrumbs links={breadcrumbLinks} />
            <div className={styles.container}>
                <div className={styles.left}>
                    <h2>Kết quả</h2>
                    <h3>{products.length} mục</h3>
                    <h4>Sản phẩm mới</h4>
                    <Filter />
                </div>
                <div className={styles.right}>
                    <h2 className={styles.Active}>Tìm kiếm</h2>
                    <button className={styles.New}>Mới</button>
                    <h2 className={styles.Sort}> Tìm kiếm theo</h2>
                    <div className={styles.featured} onClick={() => handleFeaturedClick(0, selectedOption)}>
                        {selectedOption}
                        {openDiv === 0 ? (
                            <FontAwesomeIcon className={styles.icon__item} icon={faChevronUp} />
                        ) : (
                            <FontAwesomeIcon className={styles.icon__item} icon={faChevronDown} />
                        )}
                    </div>
                    <CSSTransition
                        in={openDiv === 0}
                        timeout={300}
                        classNames={{
                            enter: styles['slide-enter'],
                            enterActive: styles['slide-enter-active'],
                            exit: styles['slide-exit'],
                            exitActive: styles['slide-exit-active'],
                        }}
                        unmountOnExit
                    >
                        <div className={styles.choose}>
                            <p onClick={() => handleFeaturedClick(0, 'Nổi bật')}>Nổi bật</p>
                            <p onClick={() => handleFeaturedClick(0, 'Mới nhất')}>Mới nhất</p>
                            <p onClick={() => handleFeaturedClick(0, 'Thấp tới cao')}>Thấp tới cao</p>
                            <p onClick={() => handleFeaturedClick(0, 'Cao tới thấp')}>Cao tới thấp</p>
                        </div>
                    </CSSTransition>

                    {/* Hiển thị loading hoặc danh sách sản phẩm */}
                    {loading ? <p>Đang tải sản phẩm...</p> : <ProductList />}

                    <Footer />
                </div>
            </div>
        </>
    );
}

export default NProduct;
