import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BasicBreadcrumbs from "../components/breadcrumb/breadcrumb"
import NavbarAfterLogin from "../components/navbar/navbarAfterLogin"
import styles from "../styles/Womenpro.module.scss"
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Filter from "../components/Filter2/filter2"
import image1 from '../img/Women/Product1.jpg';
import image2 from '../img/Women/Product2.jpg';
import image3 from '../img/Women/Product3.jpg';
import image4 from '../img/Women/Product4.jpg';
import image5 from '../img/Women/Product5.jpg';
import image6 from '../img/Women/Product6.jpg';
import image7 from '../img/Women/Product7.jpg';
import image8 from '../img/Women/Product8.jpg';
import image9 from '../img/Women/Product9.jpg';
import image10 from '../img/Women/Product10.jpg';
import image11 from '../img/Women/Product11.jpg';
import image12 from '../img/Women/Product12.jpg';

import Footer from '../components/footer/footer';
import { CSSTransition } from 'react-transition-group';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
function WomenProduct() {
    const breadcrumbLinks = [
        { name: 'Nét - Homepage', path: '/' },
        { name: 'Trang phục nữ', path: '/Womenpro' },
    ];

    const [openDiv, setOpenDiv] = useState(null);
    const [selectedOption, setSelectedOption] = useState('Nổi bật');

    const handleFeaturedClick = (index, option) => {
        setOpenDiv(openDiv === index ? null : index);
        setSelectedOption(option);
    };

    const products = [
        { id: 1, image: image1, title: 'Women', size: 'XS-XXL', description: 'AIRism Cotton Ribbed Polo Shirt', price: '203.000 VND', rating: 5, reviews: '(149)', colors: 5 },
        { id: 2, image: image2, title: 'Women', size: 'XS-XXL', description: 'Halter Neck Bra Sleeveless Top', price: '319.000 VND', rating: 5, reviews: '(201)', colors: 5 },
        { id: 3, image: image3, title: 'Women', size: 'XS-XXL', description: 'Rayon Skipper Blouse | 3/4 Sleeve | Striped', price: '400.000 VND', rating: 5, reviews: '(59)', colors: 2 },
        { id: 4, image: image4, title: 'Women', size: 'S-XXL', description: 'Rayon Skipper Blouse | 3/4 Sleeve', price: '489.000 VND', rating: 4, reviews: '(56)', colors: 4 },
        { id: 5, image: image5, title: 'Women', size: 'XS-XXL', description: 'Rayon Skipper Blouse | 3/4 Sleeve', price: '489.000 VND', rating: 0, reviews: '', colors: 1 },
        { id: 6, image: image6, title: 'Women', size: 'XS-L', description: 'Cotton Skirt Embroidery', price: '269.000 VND', rating: 5, reviews: '(36)', colors: 3 },
        { id: 7, image: image7, title: 'Women', size: 'XS-XXL', description: 'MAGIC FOR ALL x Yu Nagaba UT', price: '189.000 VND', rating: 5, reviews: '(156)', colors: 1 },
        { id: 8, image: image8, title: 'Women', size: 'XS-XXL', description: 'MAGIC FOR ALL x Yu Nagaba UT', price: '200.000 VND', rating: 0, reviews: '', colors: 1 },
        { id: 9, image: image9, title: 'Women', size: 'XS-XXL', description: 'MAGIC FOR ALL x Yu Nagaba UT', price: '213.000 VND', rating: 5, reviews: '(47)', colors: 3 },
        { id: 10, image: image10, title: 'Unisex', size: 'XS-XXL', description: 'Sweat Pants', price: '389.000 VND', rating: 5, reviews: '(21)', colors: 4 },
        { id: 11, image: image11, title: 'Unisex', size: 'XS-XXL', description: 'Sweat Pants', price: '389.000 VND', rating: 5, reviews: '(21)', colors: 5 },
        { id: 12, image: image12, title: 'Unisex', size: 'XS-XXL', description: 'Sweat Pants', price: '400.000 VND', rating: 0, reviews: '', colors: 2 }

    ];

    const Product = ({ product }) => {
        const { image, title, size, description, price, rating, reviews, colors } = product;
        return (
            <div className={`product product-${product.id}`}>
                <img className={`image-${product.id}`} src={image} alt={description} />
                <div className="color">
                    {[...Array(colors)].map((_, index) => (
                        <i key={index} className={`color${index + 1}`} />
                    ))}
                </div>
                <p class='title'>{title}</p>
                <p class='size'>{size}</p>
                <p class='description'>{description}</p>
                <p class='price'>{price}</p>

                {rating > 0 && (
                    <div className="iconstar">
                        <span>
                            {[...Array(rating)].map((_, index) => (
                                <FontAwesomeIcon key={index} icon={faStar} />
                            ))}
                        </span>
                    </div>
                )}
                <span className="count">{reviews}</span>
            </div>

        );
    };

    const ProductList = () => (
        <div className="product-list">
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
    return (
        <>
            <NavbarAfterLogin />
            <BasicBreadcrumbs links={breadcrumbLinks} />
            <div class="container">
                <div class="left">
                    <h2 >Kết quả </h2>
                    <h3 >12 mục</h3>
                    <h4 >Trang phục nữ</h4>
                    <Filter />
                </div>
                <div class="right">
                    <h2 className="Active">Tìm kiếm</h2>
                    <button class="New">Nữ</button>
                    <h2 className="Sort"> Tìm kiếm theo</h2>
                    <div className="featured" onClick={() => handleFeaturedClick(0, selectedOption)}>
                        {selectedOption}
                        {openDiv === 0 ? (
                            <FontAwesomeIcon className="icon__item" icon={faChevronUp} />
                        ) : (
                            <FontAwesomeIcon className="icon__item" icon={faChevronDown} />
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
                        <div className="choose">
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
export default WomenProduct;