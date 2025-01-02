import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import NavbarAfterLogin from '../components/navbar/navbarAfterLogin';
import SignInFormApp from '../components/signIn/signInForm';
import SignUpFormApp from '../components/signUp/signUpForm';
import ProductPage from '../components/productPage/productPage';
import CategoryPage from '../components/categoryPage/categoryPage';
import ForgotPasswordFormApp from "../components/ForgotPassword/forgotPassword";
import Warehouse from '../components/warehouse/warehouse';
import OrderList from '../components/OrderList/orderList';
import Product from "./productInfo";
import WriteReview from "./writeReview";
import Profile from './infoCustomer';
// import WomenProduct from './Womenpro';
import MenProduct from './Menpro';
// import NProduct from './Nproduct';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signin" element={<SignInFormApp />} />
        <Route path="/signup" element={<SignUpFormApp />} />
        <Route path="/forgotpassword" element={<ForgotPasswordFormApp />} />
        {/* <Route path="/" element={<NProduct />} />
        <Route path="/women" element={<WomenProduct />} /> */}
        <Route path="/men" element={<MenProduct />} />
        {/* <Route path="/new" element={<NProduct />} /> */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/categorypage" element={<CategoryPage />} />
        <Route path="/writereview" element={<WriteReview />} />
        <Route path="/warehouse" element={<Warehouse />} />
      </Routes>
    </Router>
  );
}

export default App;