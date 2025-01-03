import React from "react";
import styles from '../Header/Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className={styles.header}></div>
            <FontAwesomeIcon icon={faEnvelope} className={styles.logo} onClick={() => navigate(`/neworder`)} />
        </>

    );
};

export default Header;
