import './navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <ul className="navbar">
            <li><a href="#Home" className="home">
                <FontAwesomeIcon className='home__icon' icon={faHouse} />
                Nét
            </a></li>
            <li><a href="#SignIn" className="login" >Đăng nhập</a></li>
            <li><a href="#cart" className="element"><FontAwesomeIcon icon={faCartPlus} /></a></li>
            <li><a href="#help" className="element"><FontAwesomeIcon icon={faCircleInfo} /></a></li>
            <li><a href="#search" className="element"><FontAwesomeIcon icon={faMagnifyingGlass} /></a></li>
            <li><a href="#Women" className="element" >Nữ</a></li>
            <li><a href="#Men" className="element" >Nam</a></li>
            <li><a href="#NewArrival" className="element" >Sản phẩm mới</a></li>
        </ul>
    );
}

export function NavbarHome() {
    return (
        <>
            <ul className="navbar" style={{ background: 'white' }}>
                <li><a href="#Home" className="home" style={{ color: 'black' }}>
                    <FontAwesomeIcon className='home__icon' icon={faHouse} />
                    Nét
                </a></li>
                <li><a href="#LogIn" className="login" style={{ color: 'black' }}>Đăng nhập</a></li>
                <li><a href="#cart" className="element"><FontAwesomeIcon icon={faCartPlus} style={{ color: 'black' }} /></a></li>
                <li><a href="#search" className="element"><FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: 'black' }} /></a></li>
                <li><a href="#Women" className="element" style={{ color: 'black' }} >Nữ</a></li>
                <li><a href="#Men" className="element" style={{ color: 'black' }} >Nam</a></li>
                <li><a href="#NewArrival" className="element" style={{ color: 'black' }} >Sản phẩm mới</a></li>
            </ul>

        </>
    );
}
export default Navbar;