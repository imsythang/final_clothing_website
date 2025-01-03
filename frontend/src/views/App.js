
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ForgotPasswordFormApp from "../components/ForgotPassword/forgotPassword";
import CategoryPage from '../components/categoryPage/categoryPage';
import Navbar from '../components/navbar/navbar';
import ProductPage from '../components/productPage/productPage';
import ProtectedRoute from '../components/protectedRoute';
import SignInFormApp from '../components/signIn/signInForm';
import SignUpFormApp from '../components/signUp/signUpForm';
import Warehouse from '../components/warehouse/warehouse';
import MenProduct from './user/Menpro';
import NProduct from './user/Nproduct';
import WomenProduct from './user/Womenpro';
import HomePage from './user/homePage';
import Profile from './infoCustomer';
import Product from "./productDetail";
import ShoppingCart from './user/shoppingCart';
import WriteReview from "./writeReview";
import SizeGuild from './user/sizeGuild';
function App() {
  const isLoggedIn = window.localStorage.getItem("LoggedIn");
  const role = window.localStorage.getItem("role");


  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          {/* unauthorized route */}
          <Route path='/' element={<HomePage />} />
          <Route path="/newArrival" element={<NProduct />} />
          <Route path="/men" element={<MenProduct />} />
          <Route path="/women" element={<WomenProduct />} />
          <Route path="/help" element= {<SizeGuild />} />

          <Route path="/signin" element={<SignInFormApp />} />
          <Route path="/signup" element={<SignUpFormApp />} />
          <Route path="/forgotpassword" element={<ForgotPasswordFormApp />} />
          <Route path="/product" element={<Product />} />
          <Route path='/cart' element={<ShoppingCart />} />

          <Route path="/writereview" element={<WriteReview />} />

          {/* protected route */}
          <Route element={<ProtectedRoute />}>



          </Route>
          {/* admin */}
          <Route path="/categorypage" element={<CategoryPage />} />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/warehouse" element={<Warehouse />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;