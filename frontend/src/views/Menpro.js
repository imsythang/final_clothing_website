import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BasicBreadcrumbs from "../components/breadcrumb/breadcrumb"
import NavbarAfterLogin from "../components/navbar/navbarAfterLogin"
import styles from "../styles/Menpro.module.scss"
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Filter from "../components/Filter2/filter2"
import image1 from '../img/Men/Product1.jpg';
import image2 from '../img/Men/Product2.jpg';
import image3 from '../img/Men/Product3.jpg';
import image4 from '../img/Men/Product4.jpg';
import image5 from '../img/Men/Product5.jpg';
import image6 from '../img/Men/Product6.jpg';
import image7 from '../img/Men/Product7.jpg';
import image8 from '../img/Men/Product8.jpg';
import image9 from '../img/Men/Product9.jpg';
import Footer from '../components/footer/footer';
import { CSSTransition } from 'react-transition-group';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
function MenProduct() {
    const breadcrumbLinks = [
        { name: 'Nét - Homepage', path: '/' },
        { name: 'Trang phục nam', path: '/' },
    ];

    const [openDiv, setOpenDiv] = useState(null);
    const [selectedOption, setSelectedOption] = useState('Nổi bật');

    const handleFeaturedClick = (index, option) => {
        setOpenDiv(openDiv === index ? null : index);
        setSelectedOption(option);
    };

    const products = [
        { id: 1, image: image1, title: 'Men', size: 'XS-XXL', description: 'Broadcloth Shirt | Button Down', price: '300.000 VND', rating: 5, reviews: '(52)', colors: 1 },
        { id: 2, image: image2, title: 'Men', size: 'XS-XXL', description: 'Broadcloth Shirt | Button Down', price: '300.000 VND', rating: 5, reviews: '(20)', colors: 1 },
        { id: 3, image: image3, title: 'Men', size: 'S-L', description: 'Broadcloth Shirt | Button Down', price: '300.000 VND', rating: 5, reviews: '(59)', colors: 1 },
        { id: 4, image: image4, title: 'Unisex', size: 'XS-XXL', description: 'KAWS + Warhol UT', price: '203.000 VND', rating: 4, reviews: '(106)', colors: 1 },
        { id: 5, image: image5, title: 'Unisex', size: 'XS-XXL', description: 'KAWS + Warhol Sweat Pants', price: '589.000 VND', rating: 0, reviews: '', colors: 1 },
        { id: 6, image: image6, title: 'Unisex', size: 'XS-XXL', description: 'MAGIC FOR ALL x Yu Nagaba Sweatshirt', price: '500.000 VND', rating: 5, reviews: '(6)', colors: 1 },
        { id: 7, image: image7, title: 'Men', size: 'XS-XXL', description: 'KENSHI YONEZU Short Sleeve UT (Ghibli)', price: '200.000 VND', rating: 5, reviews: '(15)', colors: 1 },
        { id: 8, image: image8, title: 'Men', size: 'XS-XXL', description: 'The Louvre x Camille Hernot UT', price: '200.000 VND', rating: 0, reviews: '', colors: 1 },
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
            <NavbarAfterLogin />
            <BasicBreadcrumbs links={breadcrumbLinks} />
            <div className={styles.container}>
                <div className={styles.left}>
                    <h2 >Kết quả </h2>
                    <h3 >9 mục</h3>
                    <h4 >Trang phục nam</h4>
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
export default MenProduct;