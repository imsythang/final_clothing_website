import Navbar from "../components/NavigationBar/Navbar";
import styles from "../styles/homepage.module.scss"
import { useParams } from "react-router-dom";
function Home() {
    const { shop_id } = useParams();
    return (
        <>
            <Navbar />
            <h1 className={styles.home}>Chi nhánh {shop_id}</h1>
            {/* <p className={styles.sub}>Hé lô cả nhà iu của kem</p> */}
        </>
    )
}
export default Home;