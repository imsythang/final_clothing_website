import styles from "./footer.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footer__container}>
          <h1 className={styles.footer__heading}>Contact infomation</h1>
          <div className={styles.footer__format}>
            <div>
              <div className={styles.footer__information}>
                <p className={styles.footer__list}>Address</p>
                <p className={styles.footer__content}>12 abc Street, Ho Chi Minh City</p>
              </div>
              <div className={styles.footer__information}>
                <p className={styles.footer__list}>Phone</p>
                <p className={styles.footer__content}>0123456789</p>
              </div>
            </div>
            <div>
              <div className={styles.footer__information}>
                <p className={styles.footer__list}>Email</p>
                <p className={styles.footer__content}>netshop@gmail.com</p>
              </div>
              <div className={styles.footer__connect}>
                <FontAwesomeIcon className={styles.footer__icon} icon={faFacebook} />
                <FontAwesomeIcon className={styles.footer__icon} icon={faInstagram} />
                <FontAwesomeIcon className={styles.footer__icon} icon={faTiktok} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
