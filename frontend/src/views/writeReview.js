import clsx from "clsx";
import { Link } from "react-router-dom";
import Footer from '../components/footer/footer';


import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from "../components/navbar/navbar";
import image1 from '../img/product_image1.avif';
import style1 from '../styles/grid.module.scss';
import style from '../styles/writeReview.module.scss';


function WriteReview() {
    return (
        <>
            <Navbar />
            <div className={style.container}>
                <div className={clsx(style1.grid, style1.wide)}>
                    <h1 className={style.heading}>AIRism Cotton Ribbed Polo Shirt</h1>
                    <div className={clsx(style1.row, style.row1)}>
                        <div className={clsx(style.content, style1.col, style1['l-7'])}>
                            <div className={style.content__heading}>
                                <h1>WRITE A REVIEW</h1>
                                <p>Required*</p>
                            </div>

                            <div className={style['content-commom']}>
                                <h2 className={style.content__rating}>RATING</h2>
                                <span className={style['product-rating']}>
                                    <FontAwesomeIcon className={style.product__star} icon={faStar} />
                                    <FontAwesomeIcon className={style.product__star} icon={faStar} />
                                    <FontAwesomeIcon className={style.product__star} icon={faStar} />
                                    <FontAwesomeIcon className={style.product__star} icon={faStar} />
                                    <FontAwesomeIcon className={style.product__star} icon={faStar} />
                                </span>
                            </div>
                            <div className={style['content-commom']}>
                                <h2>FIT</h2>
                                <div className={style.content__fit}>
                                    <div>
                                        <label htmlFor='fit__choose1'>Tight</label>
                                        <input type='radio' name='fit' id='fit__choose1' />
                                    </div>
                                    <div>
                                        <label htmlFor='fit__choose2'>A bit tight</label>
                                        <input type='radio' name='fit' id='fit__choose2' />
                                    </div>
                                    <div>
                                        <label htmlFor='fit__choose3'>True to size</label>
                                        <input type='radio' name='fit' id='fit__choose3' />
                                    </div>
                                    <div>
                                        <label htmlFor='fit__choose4'>A bit loose</label>
                                        <input type='radio' name='fit' id='fit__choose4' />
                                    </div>
                                    <div>
                                        <label htmlFor='fit__choose5'>Loose</label>
                                        <input type='radio' name='fit' id='fit__choose5' />
                                    </div>
                                </div>
                            </div>
                            <div className={style['content-commom']}>
                                <h2>TITLE</h2>
                                <input className={style.content__title} name='title' type='text' placeholder='Summerize your review' />
                            </div>
                            <div className={style['content-commom']}>
                                <h2>COMMENT</h2>
                                <textarea className={style.content__comment} name="comment" rows="6" cols="45"></textarea>
                            </div>
                            <div className={style['content-commom']}>
                                <h2>PURCHASED SIZE</h2>
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
                            </div>
                            <div className={style['content-commom']}>
                                <h2>NICKNAME</h2>
                                <input className={style.content__title} name='nickname' type='text' placeholder='Please enter a nickname.' />
                            </div>
                            <div className={clsx(style.flex, style['space-between'], style.content__end)}>
                                <button className={style.btn__submit} type="submit">SUBMIT</button>
                                <Link to='/' className={style.product__return}>RETURN TO PRODUCT DETAILS</Link>
                            </div>
                        </div>


                        <div className={clsx(style1.col, style1['l-4'])}>
                            <img src={image1} alt='anh' className={style.image__upload} />
                            <div className={style.upload}>
                                <label htmlFor='upload__file'>Thêm ảnh/video</label>
                                <input type='file' multiple id="upload__file" name='choose__file' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />

        </>
    )
}

export default WriteReview;