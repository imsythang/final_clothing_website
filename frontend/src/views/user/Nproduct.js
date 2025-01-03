import { faChevronDown, faChevronUp, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Filter from "../../components/Filter2/filter2";
import BasicBreadcrumbs from "../../components/breadcrumb/breadcrumb";
import Footer from '../../components/footer/footer';
import { default as image1, default as image6 } from '../../img/new/product1.jpg';
import { default as image2, default as image9 } from '../../img/new/product2.jpg';
import image3 from '../../img/new/product3.jpg';
import image4 from '../../img/new/product4.jpg';
import image5 from '../../img/new/product5.jpg';
import image7 from '../../img/new/product7.jpg';
import image8 from '../../img/new/product8.jpg';
import styles from "../../styles/Nproduct.module.scss";
function NProduct() {
    const breadcrumbLinks = [
        { name: 'Nét - Homepage', path: '/' },
        { name: 'Sản phẩm mới', path: '/' },
    ];

    const [openDiv, setOpenDiv] = useState(null);
    const [selectedOption, setSelectedOption] = useState('Nổi bật');

    const handleFeaturedClick = (index, option) => {
        setOpenDiv(openDiv === index ? null : index);
        setSelectedOption(option);
    };

    const products = [
        { id: 1, image: image1, title: 'Women', size: 'XS-XXL', description: 'Washable Knit Ribbed Pants', price: '389.000 VND', rating: 5, reviews: '(2)', colors: 7 },
        { id: 2, image: image2, title: 'Unisex', size: 'XS-XXL', description: 'Sweat Pants', price: '389.000 VND', rating: 5, reviews: '(4)', colors: 5 },
        { id: 3, image: image3, title: 'Men', size: 'S-L', description: 'Oversized Single Breasted Coat', price: '900.000 VND', rating: 0, reviews: '', colors: 2 },
        { id: 4, image: image4, title: 'Women', size: 'S-XXL', description: 'Cotton Relaxed Ankle Pants', price: '489.000 VND', rating: 4, reviews: '(56)', colors: 5 },
        { id: 5, image: image5, title: 'Women', size: 'XS-XXL', description: 'Rayon Skipper Blouse | 3/4 Sleeve', price: '489.000 VND', rating: 0, reviews: '', colors: 5 },
        { id: 6, image: image6, title: 'Women', size: 'XS-L', description: 'Cotton Skirt Embroidery', price: '269.000 VND', rating: 5, reviews: '(36)', colors: 3 },
        { id: 7, image: image7, title: 'Women', size: 'XS-XXL', description: 'Cotton Relaxed Ankle Pants', price: '489.000 VND', rating: 0, reviews: '', colors: 2 },
        { id: 8, image: image8, title: 'Men', size: 'XS-XXL', description: 'AIRism Cotton Sweatshirt', price: '200.000 VND', rating: 0, reviews: '', colors: 4 },
        { id: 9, image: image9, title: 'Unisex', size: 'XS-XXL', description: 'MAGIC FOR ALL x Yu Nagaba UT', price: '213.000 VND', rating: 5, reviews: '(47)', colors: 3 }
    ];

    const Product = ({ product }) => {
        const { image, title, size, description, price, rating, reviews, colors } = product;
        return (
            <div className={`product product_${product.id}`}>
                <img className={`image_${product.id}`} src={image} alt={description} />
                <div className={styles.color}>
                    {[...Array(colors)].map((_, index) => (
                        <i key={index} className={`color${index + 1}`} />
                    ))}
                </div>
                <p className={styles.title}>{title}</p>
                <p className={styles.size}>{size}</p>
                <p className={styles.description}>{description}</p>
                <p className={styles.price}>{price}</p>

                {rating > 0 && (
                    <div className={styles.iconstar}>
                        <span>
                            {[...Array(rating)].map((_, index) => (
                                <FontAwesomeIcon key={index} icon={faStar} />
                            ))}
                        </span>
                    </div>
                )}
                <span className={styles.count}>{reviews}</span>
            </div>

        );
    };

    const ProductList = () => (
        <div className={styles.product_list}>
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
    return (
        <>
            <BasicBreadcrumbs links={breadcrumbLinks} />
            <div className={styles.container}>
                <div className={styles.left}>
                    <h2 >Kết quả </h2>
                    <h3 >9 mục</h3>
                    <h4 >Sản phẩm mới</h4>
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
                    <ProductList />
                    <Footer />

                </div>
            </div>

        </>
    )

}
export default NProduct;