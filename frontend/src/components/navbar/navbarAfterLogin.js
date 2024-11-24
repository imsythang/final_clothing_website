import './navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import UserDropdown from '../dropdownUserIcon/dropdownUserIcon';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
function NavbarAfterLogin() {
    return (
        <ul className="navbar">
            <li><a href="#Home" className="home">
                <FontAwesomeIcon className='home__icon' icon={faHouse} />
                Nét
            </a></li>
            <li><a href="#Account" className="account" ><UserDropdown /></a></li>
            <li><a href="#cart" className="element"><FontAwesomeIcon icon={faCartPlus} /></a></li>
            <li><a href="#help" className="element"><FontAwesomeIcon icon={faCircleInfo} /></a></li>
            <li><a href="#search" className="element"><FontAwesomeIcon icon={faMagnifyingGlass} /></a></li>
            <li><a href="#Women" className="element" >Nữ</a></li>
            <li><a href="#Men" className="element" >Nam</a></li>
            <li><a href="#NewArrival" className="element" >Sản phẩm mới</a></li>
        </ul>
    );
}
export default NavbarAfterLogin;
