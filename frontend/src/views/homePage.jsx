


import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from "react-router-dom";
import image2 from '../img/HomepageImg/HomeIMG2.avif';
import image3 from '../img/HomepageImg/HomeIMG3.avif';
import image4 from '../img/HomepageImg/HomeIMG4.avif';
import logoImg from '../img/HomepageImg/logo.png';
import style from '../styles/homepage.module.scss';
import Navbar from '../components/navbar/navbar';

function Header() {
    return (
        <div className={style.img_header}>
            <div className={style.logo_text}>Nét</div>
            <div className={style.describe_text}>Letting your true beauty shine</div>
            <Link to="/newArrival" >
                <button className={style.box} style={{ }}>
                    Shop now
                </button>
            </Link>


        </div>
    );
}

function Body() {
    return (
        <div className={style.box_body}>
            <div className={style.box_group_6}>
                <div className={style.box_who_are_we}>Who We Are</div>
                <div className={style.box_offer}>
                    <img src={logoImg} alt="logo" className={style.logo_img}></img>
                    offers a well-curated range of fashion items for men and women.
                </div>
                <div className={style.box_offer} style={{ top: 180 }}>
                    We aim to provide an enjoyable shopping experience for all our customers.
                </div>
            </div>
            <img src={image2} className={style.side_img}></img>

            <div className={style.box_who_are_we} style={{ top: 750, left: 65 }}>What We Offer</div>
            <div className={style.gender_box}>
                <img src={image3} alt="women" style={{ position: "absolute", width: 358, height: 534 }}></img>
                <div className={style.gender_text}>Clothes for her</div>
            </div>
            <div className={style.gender_box} style={{ left: 1000 }}>
                <img src={image4} alt="men" style={{ position: "absolute", width: 358, height: 534 }}></img>
                <div className={style.gender_text} style={{ left: -200, top: 454 }}>Clothes for him</div>
            </div>
        </div>
    );
}
function Footer() {
    return (
        <div className={style.footer_box}>
            <div className={style.contact_box}>Contact Infomation</div>
            <div className={style.info_box}>Address</div>
            <div className={style.info_box} style={{ top: 200, fontFamily: 'Josefin Sans', fontStyle: 'italic', fontWeight: 200 }}>12 abc Street, Ho Chi Minh City</div>
            <div className={style.info_box} style={{ top: 250 }}>Phone</div>
            <div className={style.info_box} style={{ top: 300, fontFamily: 'Josefin Sans', fontStyle: 'italic', fontWeight: 200 }}>0123456789</div>
            <div className={style.info_box} style={{ top: 350 }}>Email</div>
            <div className={style.info_box} style={{ top: 400, fontFamily: 'Josefin Sans', fontStyle: 'italic', fontWeight: 200 }}>netshop@gmail.com</div>
            <div className={style.footer__connect}>
                <FontAwesomeIcon className={style.footer__icon} icon={faFacebook} />
                <FontAwesomeIcon className={style.footer__icon} icon={faInstagram} />
                <FontAwesomeIcon className={style.footer__icon} icon={faTiktok} />
            </div>
        </div>
    );
}
export default function HomePage() {


    return (
        <>
            <Navbar />
            <Header />
            <Body />
            <Footer />
        </>

    );
}