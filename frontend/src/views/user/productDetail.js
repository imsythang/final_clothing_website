import clsx from "clsx";
import { useState } from 'react';
import { Link } from "react-router-dom";

import Footer from '../../components/footer/footer';
import ImageSlider from '../../components/product/imageSlider';
import SlideToggle from '../../components/product/slideToggle';

import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import style1 from "../../styles/grid.module.scss";
import style from '../../styles/product.module.scss';

import image1 from '../../img/product_image1.avif';
import image2 from '../../img/product_image2.avif';
import image3 from '../../img/product_image3.avif';
import image4 from '../../img/product_image4.avif';


function Product() {
    const [quantity, setQuantity] = useState(1);

    const handleChange = (e) => {
        setQuantity(e.target.value);
    }

    return (
        <>
            <div className={style.container}>
                <div className={clsx(style1.grid, style1.wide)}>
                    <h1 className={style.heading}>Thông tin sản phẩm</h1>
                    <div className={clsx(style1.row, style.row1)}>
                        <div className={clsx(style.content, style1.col, style1['l-7'])}>
                            <div className={clsx(style.slider, style1.row)}>
                                <div className={clsx(style1.col, style1['l-3'])}>

                                </div>
                                <div className={clsx(style1.col, style1['l-8'])}>
                                    {/* <img src={image1} alt='Product Image' className={style['image-show']} /> */}
                                    <ImageSlider>
                                        <img src={image1} alt="anh1" className={style['image-show']} />
                                        <img src={image2} alt="anh1" className={style['image-show']} />
                                        <img src={image3} alt="anh1" className={style['image-show']} />
                                        <img src={image4} alt="anh1" className={style['image-show']} />
                                    </ImageSlider>
                                </div>
                            </div>

                            <div className={style.description}>
                                <div className={clsx(style.flex, style['space-between'], style.title)}>
                                    <h1 className={style.description__title}>DESCRIPTION</h1>
                                    <div>
                                        <p className={style.Desproduct__name}>Product ID</p>
                                        <p className={style.Product__id}>467070</p>
                                    </div>
                                </div>
                                <SlideToggle />

                            </div>
                            <div className={style.review}>
                                <div className={clsx(style.flex, style['space-between'], style.title)}>
                                    <h1 className={style.description__title}>REVIEWS</h1>
                                    <div className={style.relative}>
                                        <span>
                                            <FontAwesomeIcon className={style.product__star} icon={faStar} />
                                            <FontAwesomeIcon className={style.product__star} icon={faStar} />
                                            <FontAwesomeIcon className={style.product__star} icon={faStar} />
                                            <FontAwesomeIcon className={style.product__star} icon={faStar} />
                                            <FontAwesomeIcon className={style.product__star} icon={faStar} />
                                        </span>
                                        <span className={style.reviews__count}>(149)</span>
                                    </div>

                                </div>
                                <div className={clsx(style.review, style.flex, style['space-between'])}>
                                    <h2 className={style.reviews__title}>RATING</h2>
                                    <h2 className={style.reviews__title}>HOW DOES IT FIT?</h2>
                                </div>
                                <div className={clsx(style.flex, style['space-between'])}>
                                    <div className={clsx(style.flex, style['flex-column'], style['product-rating'])}>
                                        <div>
                                            <span>
                                                <FontAwesomeIcon className={style.product__star} icon={faStar} />
                                                <FontAwesomeIcon className={style.product__star} icon={faStar} />
                                                <FontAwesomeIcon className={style.product__star} icon={faStar} />
                                                <FontAwesomeIcon className={style.product__star} icon={faStar} />
                                                <FontAwesomeIcon className={style.product__star} icon={faStar} />
                                            </span>
                                            <span className={style.reviews__count}>(149)</span>
                                        </div>
                                        <div>
                                            <span>
                                                <FontAwesomeIcon className={style.product__star} icon={faStar} />
                                                <FontAwesomeIcon className={style.product__star} icon={faStar} />
                                                <FontAwesomeIcon className={style.product__star} icon={faStar} />
                                                <FontAwesomeIcon className={style.product__star} icon={faStar} />
                                                <FontAwesomeIcon className={clsx(style.product__star, style['disable-star'])} icon={faStar} />
                                            </span>
                                            <span className={style.reviews__count}>(9)</span>
                                        </div><div>
                                            <span>
                                                <FontAwesomeIcon className={style.product__star} icon={faStar} />
                                                <FontAwesomeIcon className={style.product__star} icon={faStar} />
                                                <FontAwesomeIcon className={style.product__star} icon={faStar} />
                                                <FontAwesomeIcon className={clsx(style.product__star, style['disable-star'])} icon={faStar} />
                                                <FontAwesomeIcon className={clsx(style.product__star, style['disable-star'])} icon={faStar} />
                                            </span>
                                            <span className={style.reviews__count}>(0)</span>
                                        </div><div>
                                            <span>
                                                <FontAwesomeIcon className={style.product__star} icon={faStar} />
                                                <FontAwesomeIcon className={style.product__star} icon={faStar} />
                                                <FontAwesomeIcon className={clsx(style.product__star, style['disable-star'])} icon={faStar} />
                                                <FontAwesomeIcon className={clsx(style.product__star, style['disable-star'])} icon={faStar} />
                                                <FontAwesomeIcon className={clsx(style.product__star, style['disable-star'])} icon={faStar} />
                                            </span>
                                            <span className={style.reviews__count}>(0)</span>
                                        </div><div>
                                            <span>
                                                <FontAwesomeIcon className={style.product__star} icon={faStar} />
                                                <FontAwesomeIcon className={clsx(style.product__star, style['disable-star'])} icon={faStar} />
                                                <FontAwesomeIcon className={clsx(style.product__star, style['disable-star'])} icon={faStar} />
                                                <FontAwesomeIcon className={clsx(style.product__star, style['disable-star'])} icon={faStar} />
                                                <FontAwesomeIcon className={clsx(style.product__star, style['disable-star'])} icon={faStar} />
                                            </span>
                                            <span className={style.reviews__count}>(0)</span>
                                        </div>
                                    </div>
                                    <div className={style.product__fit}>
                                        <div className={clsx(style.flex, style['space-between'])}>
                                            <h4>Tight</h4>
                                            <h4>(0)</h4>
                                        </div>
                                        <div className={clsx(style.flex, style['space-between'])}>
                                            <h4>True to size</h4>
                                            <h4>(103)</h4>
                                        </div>
                                        <div className={clsx(style.flex, style['space-between'])}>
                                            <h4>Loose</h4>
                                            <h4>(46)</h4>
                                        </div>
                                    </div>
                                </div>
                                <Link to='/writereview' className={style.reivew__write}>WRITE TO REVIEW</Link>
                            </div>

                            <div className={style.confy}>
                                <div className={clsx(style.confyandstylish, style.flex, style['space-between'])}>
                                    <h2>COMFY AND STYLISH</h2>
                                    <p>12/08/2024</p>
                                </div>
                                <span className={style['product-rating']}>
                                    <FontAwesomeIcon className={style.product__star} icon={faStar} />
                                    <FontAwesomeIcon className={style.product__star} icon={faStar} />
                                    <FontAwesomeIcon className={style.product__star} icon={faStar} />
                                    <FontAwesomeIcon className={style.product__star} icon={faStar} />
                                    <FontAwesomeIcon className={style.product__star} icon={faStar} />
                                </span>

                                <p className={style.confy__text1}>Purchased size: M</p>
                                <p className={style.confy__text2}>How it fits:True to size</p>
                                <p className={style.confy__text3}>My mom loved the shirt! I bought her a few pieces in different colors.
                                    Size is accurate and the material is super comfy and light.
                                    First time to try the airism line and I found our new favorite.
                                </p>
                                <Link to="/" className={style.reivew__write}>VIEW MORE</Link>
                            </div>

                        </div>


                        <div className={clsx(style1.col, style1['l-4'])}>
                            <h1 className={style.product__heading}>AIRism Cotton Ribbed Polo Shirt</h1>
                            <h1 className={style.product__price}>203.000 VND</h1>
                            <div className={style.product__reviews}>
                                <span>
                                    <FontAwesomeIcon className={style.product__star} icon={faStar} />
                                    <FontAwesomeIcon className={style.product__star} icon={faStar} />
                                    <FontAwesomeIcon className={style.product__star} icon={faStar} />
                                    <FontAwesomeIcon className={style.product__star} icon={faStar} />
                                    <FontAwesomeIcon className={style.product__star} icon={faStar} />
                                </span>
                                <span className={style.reviews__count}>(149)</span>
                            </div>
                            <div className={style.product__option}>
                                <h2 className={style.option__heading}>COLOR</h2>
                                <div className={style.product__color}>
                                    <div className={style.product__picker}>
                                        <input type="radio" value="01" name="product-color-picker" id="color1"></input>
                                        <label htmlFor="color1" className={clsx(style.picker__label, style.picker__label1)}></label>
                                    </div>
                                    <div className={style.product__picker}>
                                        <input type="radio" value="02" name="product-color-picker" id="color2"></input>
                                        <label htmlFor="color2" className={clsx(style.picker__label, style.picker__label2)}></label>
                                    </div><div className={style.product__picker}>
                                        <input type="radio" value="03" name="product-color-picker" id="color3"></input>
                                        <label htmlFor="color3" className={clsx(style.picker__label, style.picker__label3)}></label>
                                    </div><div className={style.product__picker}>
                                        <input type="radio" value="04" name="product-color-picker" id="color4"></input>
                                        <label htmlFor="color4" className={clsx(style.picker__label, style.picker__label4)}></label>
                                    </div><div className={style.product__picker}>
                                        <input type="radio" value="05" name="product-color-picker" id="color5"></input>
                                        <label htmlFor="color5" className={clsx(style.picker__label, style.picker__label5)}></label>
                                    </div>
                                </div>

                                <h2 className={style.option__heading}>SIZE</h2>
                                <div className={style.product__color}>
                                    <div className={style.product__picker}>
                                        <input type="radio" value="01" name="product-size-picker" id="size1"></input>
                                        <label htmlFor="size1" className={clsx(style['size-background'], style.picker__label, style.picker__label1)}>
                                            <span className={style['picker__lable-text']}>XS</span>
                                        </label>
                                    </div>
                                    <div className={style.product__picker}>
                                        <input type="radio" value="02" name="product-size-picker" id="size2"></input>
                                        <label htmlFor="size2" className={clsx(style['size-background'], style.picker__label, style.picker__label2)}>
                                            <span className={style['picker__lable-text']}>S</span>
                                        </label>
                                    </div><div className={style.product__picker}>
                                        <input type="radio" value="03" name="product-size-picker" id="size3"></input>
                                        <label htmlFor="size3" className={clsx(style['size-background'], style.picker__label, style.picker__label3)}>
                                            <span className={style['picker__lable-text']}>M</span>
                                        </label>
                                    </div><div className={style.product__picker}>
                                        <input type="radio" value="04" name="product-size-picker" id="size4"></input>
                                        <label htmlFor="size4" className={clsx(style['size-background'], style.picker__label, style.picker__label4)}>
                                            <span className={style['picker__lable-text']}>L</span>
                                        </label>
                                    </div><div className={style.product__picker}>
                                        <input type="radio" value="05" name="product-size-picker" id="size5"></input>
                                        <label htmlFor="size5" className={clsx(style['size-background'], style.picker__label, style.picker__label5)}>
                                            <span className={style['picker__lable-text']}>XL</span>
                                        </label>
                                    </div><div className={style.product__picker}>
                                        <input type="radio" value="06" name="product-size-picker" id="size6"></input>
                                        <label htmlFor="size6" className={clsx(style['size-background'], style.picker__label, style.picker__label6)}>
                                            <span className={style['picker__lable-text']}>XXL</span>
                                        </label>
                                    </div>
                                </div>

                                <div className={style.flex}>
                                    <h2 className={style.option__heading}>QUANTITY</h2>
                                    <input type="number" value={quantity} name='quantity' className={style.product__quantity} onChange={handleChange}></input>
                                </div>
                            </div>
                            <p className={style.product__status}>In Stock</p>
                            <button className={style.btn__submit} type="submit">ADD TO CART</button>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
}

export default Product;