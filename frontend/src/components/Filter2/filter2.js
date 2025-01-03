import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import style from './filter2.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

const SlideToggle = () => {
    const [openDiv, setOpenDiv] = useState(null); // null, 0, hoặc 1 để theo dõi div nào đang mở

    const handleToggleDiv = (index) => {
        setOpenDiv(openDiv === index ? null : index); // Đổi trạng thái giữa divs
    };
    const [selectedSizes, setSelectedSizes] = useState([]);
    const handleSizeClick = (size) => {
        setSelectedSizes(prevSizes => {
            if (prevSizes.includes(size)) {
                // Nếu kích thước đã được chọn, loại bỏ khỏi mảng
                return prevSizes.filter(s => s !== size);
            } else {
                // Nếu kích thước chưa được chọn, thêm vào mảng
                return [...prevSizes, size];
            }
        });
    };
    // Hàm thay đổi màu sắc khi người dùng click vào đối tượng
    const [selectedColors, setSelectedColor] = useState([]);
    const colors = ['', '', '', '', '', '', '', '', '', ''];

    // Array of actual color values corresponding to each empty string
    const colorValues = [
        '#D9D9D9', '#1F2124', '#F2F2F2', '#FFA5E1', '#FC2222',
        '#82F964', '#6C9BFF', '#F0DC8A', '#9747FF', '#D2BCA0'
    ];
    const handleColorClick = (color) => {
        setSelectedColor(prevColors => {
            if (prevColors.includes(color)) {
                // Nếu kích thước đã được chọn, loại bỏ khỏi mảng
                return prevColors.filter(s => s !== color);
            } else {
                // Nếu kích thước chưa được chọn, thêm vào mảng
                return [...prevColors, color];
            }
        });
    };
    const [selectedPricing, setSelectedPricing] = useState([]);
    const handlePricingClick = (pricing) => {
        setSelectedPricing(prevPricing => {
            if (prevPricing.includes(pricing)) {
                // Nếu kích thước đã được chọn, loại bỏ khỏi mảng
                return prevPricing.filter(s => s !== pricing);
            } else {
                // Nếu kích thước chưa được chọn, thêm vào mảng
                return [...prevPricing, pricing];
            }
        });
    };

    return (
        <div class="filter">
            <div class="decription__item1" onClick={() => handleToggleDiv(0)}>
                Kích thước
                {openDiv === 0 ? <FontAwesomeIcon className="icon__item1" icon={faChevronUp} />
                    : <FontAwesomeIcon className="icon__item1" icon={faChevronDown} />
                }
            </div>
            <CSSTransition
                in={openDiv === 0}
                timeout={300}
                classNames={{
                    enter: style['slide-enter'],
                    enterActive: style['slide-enter-active'],
                    exit: style['slide-exit'],
                    exitActive: style['slide-exit-active'],
                }}
                unmountOnExit
            >
                <div className='size'>
                    {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                        <div
                            key={size}
                            className={`$'sizeItem' ${selectedSizes.includes(size) ? 'selected' : 'sizeItem'}`}
                            onClick={() => handleSizeClick(size)}
                        >
                            {size}
                        </div>
                    ))}
                </div>
            </CSSTransition>

            <div class="decription__item2" onClick={() => handleToggleDiv(1)}>
                Màu sắc
                {openDiv === 1 ? <FontAwesomeIcon className='icon__item2' icon={faChevronUp} />
                    : <FontAwesomeIcon className='icon__item2' icon={faChevronDown} />
                }
            </div>
            <CSSTransition
                in={openDiv === 1}
                timeout={300}
                classNames={{
                    enter: style['slide-enter'],
                    enterActive: style['slide-enter-active'],
                    exit: style['slide-exit'],
                    exitActive: style['slide-exit-active'],
                }}
                unmountOnExit
            >
                <div className="color">
                    {colors.map((color, index) => (
                        <div
                            key={index}
                            className={`colorItem ${selectedColors.includes(colorValues[index]) ? 'selectedColor' : ''}`}
                            onClick={() => handleColorClick(colorValues[index])}
                            style={{ backgroundColor: colorValues[index] }}
                        />
                    ))}
                </div>
            </CSSTransition>
            <div class="decription__item3" onClick={() => handleToggleDiv(2)}>
                Mức giá
                {openDiv === 2 ? <FontAwesomeIcon className='icon__item3' icon={faChevronUp} />
                    : <FontAwesomeIcon className='icon__item3' icon={faChevronDown} />
                }
            </div>
            <CSSTransition
                in={openDiv === 2}
                timeout={300}
                classNames={{
                    enter: style['slide-enter'],
                    enterActive: style['slide-enter-active'],
                    exit: style['slide-exit'],
                    exitActive: style['slide-exit-active'],
                }}
                unmountOnExit
            >
                <div className='pricing'>
                    {/* 100.000 VND - 300.000 VND */}
                    <div
                        className={`$'icon1' ${selectedPricing.includes('100-300') ? 'selectedPricing' : 'icon1'}`}
                        onClick={() => handlePricingClick('100-300')}
                    >
                        <FontAwesomeIcon icon={faCircleCheck} />
                    </div>
                    <p className={`$'pricing1' ${selectedPricing.includes('100-300') ? 'pricing1' : 'pricing1'}`}>
                        100.000 VND - 300.000 VND
                    </p>

                    {/* 300.000 VND - 500.000 VND */}
                    <div
                        className={`$'icon2' ${selectedPricing.includes('300-500') ? 'selectedPricing' : 'icon2'}`}
                        onClick={() => handlePricingClick('300-500')}
                    >
                        <FontAwesomeIcon icon={faCircleCheck} />
                    </div>
                    <p className={`$'pricing2' ${selectedPricing.includes('300-500') ? 'pricing2' : 'pricing2'}`}>
                        300.000 VND - 500.000 VND
                    </p>

                    {/* 500.000 VND - 800.000 VND */}
                    <div
                        className={`$'icon3' ${selectedPricing.includes('500-800') ? 'selectedPricing' : 'icon3'}`}
                        onClick={() => handlePricingClick('500-800')}
                    >
                        <FontAwesomeIcon icon={faCircleCheck} />
                    </div>
                    <p className={`$'pricing3' ${selectedPricing.includes('500-800') ? 'pricing3' : 'pricing3'}`}>
                        500.000 VND - 800.000 VND
                    </p>

                    {/* > 800.000 VND */}
                    <div
                        className={`$'icon4' ${selectedPricing.includes('>800') ? 'selectedPricing' : 'icon4'}`}
                        onClick={() => handlePricingClick('>800')}
                    >
                        <FontAwesomeIcon icon={faCircleCheck} />
                    </div>
                    <p className={`$'pricing4' ${selectedPricing.includes('>800') ? 'pricing4' : 'pricing4'}`}>
                        &gt; 800.000 VND
                    </p>
                </div>
            </CSSTransition>
        </div>
    );
};

export default SlideToggle;
