
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ForgotPasswordFormApp from "../components/ForgotPassword/forgotPassword";
import CategoryPage from '../components/categoryPage/categoryPage';
import Navbar from '../components/navbar/navbar';
import ProductPage from '../components/productPage/productPage';
import ProtectedRoute from '../components/protectedRoute';
import SignInFormApp from '../components/signIn/signInForm';
import SignUpFormApp from '../components/signUp/signUpForm';
import Warehouse from '../components/warehouse/warehouse';
import Home from './admin/homepage';
import Profile from './admin/infoCustomer';
import History from './user/History';
import MenProduct from './user/Menpro';
import NProduct from './user/Nproduct';
import WomenProduct from './user/Womenpro';
import HomePage from './user/homePage';
import Product from "./user/productDetail";
import ShoppingCart from './user/shoppingCart';
import SizeGuild from './user/sizeGuild';
import WriteReview from "./user/writeReview";
import MyInfo from './user/MyInfo';
import Orders from './admin/Orders';
import OrderInfo from './admin/OrderInfo';
import Productinfo from './admin/Productinfo';
function App() {
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
          <Route path="/help" element={<SizeGuild />} />

          <Route path="/signin" element={<SignInFormApp />} />
          <Route path="/signup" element={<SignUpFormApp />} />
          <Route path="/forgotpassword" element={<ForgotPasswordFormApp />} />
          <Route path="/product" element={<Product />} />
          <Route path='/cart' element={<ShoppingCart />} />
          <Route path='/myInfo' element={<MyInfo />} />

          <Route path="/writereview" element={<WriteReview />} />

          <Route path="/history" element={<History />} />

          {/* protected route */}
          <Route element={<ProtectedRoute />}>



          </Route>


          {/* admin */}
          {/* <Route path='/customer' element= {<Customers />} /> */}

          {/* <Route path='/admin/orderInfo' element = {<OrderInfo />} /> */}
          <Route path='/admin/homepage' element={<Home />} />
          <Route path="/categorypage" element={<CategoryPage />} />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/warehouse" element={<Warehouse />} />
          <Route path="/listorder" element={<Orders />} />
          <Route path="/listorder/:order_id" element={<OrderInfo />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/listproduct' element={<Productinfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;