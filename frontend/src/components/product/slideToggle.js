import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import style from './slideToggle.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'


const SlideToggle = () => {
    const [openDiv, setOpenDiv] = useState(null); // null, 0, hoặc 1 để theo dõi div nào đang mở

    const handleToggleDiv = (index) => {
        setOpenDiv(openDiv === index ? null : index); // Đổi trạng thái giữa divs
    };

    return (
        <div>
            <div className={style.description__item} onClick={() => handleToggleDiv(0)}>
                Details
                {openDiv === 0 ? <FontAwesomeIcon className={style.item__icon} icon={faChevronUp} />
                    : <FontAwesomeIcon className={style.item__icon} icon={faChevronDown} />
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
                <div className={style.content}>
                    <p>- Comfortable 'AIRism' ribbed fabric with the look of cotton.</p>
                    <p>- Collar made with matching fabric.</p>
                    <p>- Fitted silhouette.</p>
                    <p>- Longer button placket creates a flattering, slim impression.</p>
                    <p>- Pearly buttons.</p>
                    <p>- Versatile shorter length.</p>
                    <p>- Ribbed fabric flatters the body's contours.</p>
                    <p>- Also looks great in a half-buttoned style.</p>
                </div>
            </CSSTransition>

            <div className={style.description__item} onClick={() => handleToggleDiv(1)}>
                Material / Cares
                {openDiv === 1 ? <FontAwesomeIcon className={style.item__icon} icon={faChevronUp} />
                    : <FontAwesomeIcon className={style.item__icon} icon={faChevronDown} />
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
                <div className={style.content}>
                    <p>Product ID 467070,465601</p>
                    <p>Please note that this product may have different product ID, even if it is the same item.</p>
                    <p className={style.regular}>Fabric details</p>
                    <p>48% Cotton, 43% Nylon, 9% Spandex</p>
                    <p className={style.regular}>Washing instructions</p>
                    <p>Machine wash cold, Dry Clean, Do not tumble dry.</p>
                    <p>- The images shown may include colors that are not available.</p>
                </div>
            </CSSTransition>
        </div>
    );
};

export default SlideToggle;
