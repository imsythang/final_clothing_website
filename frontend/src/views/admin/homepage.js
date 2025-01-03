import { useParams } from "react-router-dom";
import styles from "../../styles/homepage.module.scss";
function Home() {
    const { shop_id } = useParams();
    return (
        <>
            <h1 className={styles.home}>Chi nhánh {shop_id}</h1>
            {/* <p className={styles.sub}>Hé lô cả nhà iu của kem</p> */}
        </>
    )
}
export default Home;