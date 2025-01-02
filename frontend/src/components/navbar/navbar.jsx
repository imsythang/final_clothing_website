import './navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import clsx from 'clsx';

function Navbar() {
    const isLoggedIn = window.localStorage.getItem("LoggedIn");
    const navigate = useNavigate();

    // Logout function
    const handleLogout = () => {
        // Remove token and login status from localStorage
        window.localStorage.removeItem("LoggedIn");
        window.localStorage.removeItem("token"); // Assuming you store token under 'token'

        // Redirect to home or login page
        navigate("/"); // Redirect to the homepage or any other page
    };

    return (
        <ul className={clsx("navbar", { "logged-in": isLoggedIn, "guest": !isLoggedIn })}>
            <li>
                <Link to="/" className="home">
                    <FontAwesomeIcon className="home__icon" icon={faHouse} />
                    Nét
                </Link>
            </li>


            <div>
                <li>
                    <Link to="/women" className="element">
                        Nữ
                    </Link>
                </li>

                <li>
                    <Link to="/men" className="element">
                        Nam
                    </Link>
                </li>
                <li>
                    <Link to="/newArrival" className="element">
                        Sản phẩm mới
                    </Link>
                </li>
            </div>
            {isLoggedIn ? (
                <div>
                    <li>
                        <button onClick={handleLogout} className="login">
                            Đăng xuất
                        </button>
                    </li>
                    <li>
                        <Link to="/cart" className="element">
                            <FontAwesomeIcon icon={faCartPlus} />
                        </Link>
                    </li>
                    <li>
                        <Link to="#help" className="element">
                            <FontAwesomeIcon icon={faCircleInfo} />
                        </Link>
                    </li>
                    <li>
                        <Link to="#search" className="element">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </Link>
                    </li>

                </div>

            ) : (
                <>
                    <li>
                        <Link to="/signin" className="login" style={{ color: 'black' }}>
                            Đăng nhập
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart" className="element">
                            <FontAwesomeIcon icon={faCartPlus} style={{ color: 'black' }} />
                        </Link>
                    </li>
                    <li>
                        <Link to="#search" className="element">
                            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: 'black' }} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/women" className="element" style={{ color: 'black' }}>
                            Nữ
                        </Link>
                    </li>
                    <li>
                        <Link to="/men" className="element" style={{ color: 'black' }}>
                            Nam
                        </Link>
                    </li>
                    <li>
                        <Link to="/newArrival" className="element" style={{ color: 'black' }}>
                            Sản phẩm mới
                        </Link>
                    </li>
                </>
            )}
        </ul>
    );
}

export default Navbar;
