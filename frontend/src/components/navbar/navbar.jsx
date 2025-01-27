import { faCartPlus, faCircleInfo, faClock, faHouse, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { Link, useNavigate } from 'react-router-dom';
import NavbarAdmin from '../NavigationBar/Navbar';
import './navbar.scss';

function Navbar() {
    const isLoggedIn = window.localStorage.getItem("LoggedIn");
    const role = window.localStorage.getItem("role");
    const navigate = useNavigate();

    // Logout function
    const handleLogout = () => {
        window.localStorage.removeItem("LoggedIn");
        window.localStorage.removeItem("token"); // Assuming you store token under 'token'
        window.localStorage.removeItem("role");

        // Redirect to home or login page
        navigate("/"); // Redirect to the homepage or any other page
    };

    const handNavigate = () => {
        navigate("/myInfo");
    }

    return (
        <>
            {!isLoggedIn && (<>
                <ul className={clsx("navbarall", { "logged-in": isLoggedIn, "guest": !isLoggedIn })}>
                    <li>
                        <Link to="/" className="home">
                            <FontAwesomeIcon className="home__icon" icon={faHouse} />
                            Nét
                        </Link>
                    </li>

                    <div style={{ display: "flex" }}>
                        <li>
                            <Link to="/newArrival" className="element">
                                Sản phẩm mới
                            </Link>
                        </li>

                        <li>
                            <Link to="/men" className="element">
                                Nam
                            </Link>
                        </li>
                        <li>
                            <Link to="/women" className="element">
                                Nữ
                            </Link>
                        </li>
                        <li>
                            <Link to="#search" className="element">
                                <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: 'black' }} />
                            </Link>
                        </li>
                        <li>
                            <Link to="/signin" className="login" style={{ color: 'black' }}>
                                Đăng nhập
                            </Link>
                        </li>
                    </div>
                </ul>
            </>)}

            {(isLoggedIn && role === "ADMIN") ?
                <NavbarAdmin />
                :
                (isLoggedIn && (
                    <ul className={clsx("navbarall", { "logged-in": isLoggedIn, "guest": !isLoggedIn })}>
                        <li>
                            <Link to="/" className="home">
                                <FontAwesomeIcon className="home__icon" icon={faHouse} />
                                Nét
                            </Link>
                        </li>

                        <div style={{ display: "flex" }}>
                            <li>
                                <Link to="/newArrival" className="element">
                                    Sản phẩm mới
                                </Link>
                            </li>

                            <li>
                                <Link to="/men" className="element">
                                    Nam
                                </Link>
                            </li>
                            <li>
                                <Link to="/women" className="element">
                                    Nữ
                                </Link>
                            </li>
                            <li>
                                <Link to="/cart" className="element">
                                    <FontAwesomeIcon icon={faCartPlus} />
                                </Link>
                            </li>
                            <li>
                                <Link to="/help" className="element">
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                </Link>
                            </li>
                            <li>
                                <Link to="/history" className="element">
                                    <FontAwesomeIcon icon={faClock} />
                                </Link>
                            </li>
                            <li style={{marginLeft:"25px", display: "flex", alignItems: "center", position: "relative", marginRight: "60px" }}>
                                <div className="user__icon">
                                    <FontAwesomeIcon icon={faUser} style={{ display: "block" }} />
                                    <div className="show__option">
                                        <button onClick={handleLogout} className="logout">
                                            Đăng xuất
                                        </button>
                                        <button onClick={handNavigate} className="logout">
                                            Thông tin
                                        </button>
                                    </div>
                                </div>
                            </li>
                        </div>
                    </ul>

                ))
            }
        </>
    );
}

export default Navbar;
