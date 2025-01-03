import { useParams } from "react-router-dom";
import styles from "../../styles/homepage.module.scss";
import SideBar from "../../components/NavigationBar/Navbar"
function Home() {
    const { shop_id } = useParams();
    return (
        <>
            <SideBar />
            <h1 className={styles.home}>Chi nhánh {shop_id}</h1>
            {/* <p className={styles.sub}>Hé lô cả nhà iu của kem</p> */}
        </>
    )
}
export default Home;