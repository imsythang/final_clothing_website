import React, { useState, useEffect } from "react";
import clsx from "clsx";
import style from './imageSlider.module.scss';

function ImageSlider({ children }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [slideDone, setSlideDone] = useState(true);
    const [timeID, setTimeID] = useState(null);

    useEffect(() => {
        // Kiểm tra nếu children là mảng và không phải undefined
        if (Array.isArray(children) && children.length > 0) {
            if (slideDone) {
                setSlideDone(false);
                setTimeID(
                    setTimeout(() => {
                        slideNext();
                        setSlideDone(true);
                    }, 7000)
                );
            }
        }
    }, [slideDone, children]);  // Thêm `children` vào dependency

    const slideNext = () => {
        if (Array.isArray(children)) {
            setActiveIndex((val) => {
                if (val >= children.length - 1) {
                    return 0;
                } else {
                    return val + 1;
                }
            });
        }
    };

    const slidePrev = () => {
        if (Array.isArray(children)) {
            setActiveIndex((val) => {
                if (val <= 0) {
                    return children.length - 1;
                } else {
                    return val - 1;
                }
            });
        }
    };

    const AutoPlayStop = () => {
        if (timeID > 0) {
            clearTimeout(timeID);
            setSlideDone(false);
        }
    };

    const AutoPlayStart = () => {
        if (!slideDone) {
            setSlideDone(true);
        }
    };

    return (
        <>
            <div
                className={style.container__slider}
                onMouseEnter={AutoPlayStop}
                onMouseLeave={AutoPlayStart}
            >
                {/* Kiểm tra nếu children là mảng trước khi gọi map */}
                {Array.isArray(children) && children.length > 0 && children.map((item, index) => {
                    return (
                        <div
                            className={clsx(style.slider__item, {
                                [style[`slider__item-active-${activeIndex + 1}`]]: true
                            })}
                            key={index}
                        >
                            <img key={index} src={item} alt={`Product image ${index + 1}`} className={style['image-show']} />
                        </div>
                    );
                })}
                <button
                    className={style['slider__btn-next']}
                    onClick={(e) => {
                        e.preventDefault();
                        slideNext();
                    }}
                >
                    {">"}
                </button>
                <button
                    className={style['slider__btn-prev']}
                    onClick={(e) => {
                        e.preventDefault();
                        slidePrev();
                    }}
                >
                    {"<"}
                </button>
            </div>

            <div className={style.container__slider__links}>
                {/* Tương tự kiểm tra ở đây nếu cần */}
                {Array.isArray(children) && children.length > 0 && children.map((item, index) => {
                    return (
                        <img
                            key={index}
                            className={clsx(style['container__slider__links-small'], {
                                [style['container__slider__links-small-active']]: activeIndex === index
                            })}
                            src={item}
                            onClick={(e) => {
                                e.preventDefault();
                                setActiveIndex(index);
                            }}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default ImageSlider;
