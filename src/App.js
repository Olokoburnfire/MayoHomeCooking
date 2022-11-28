import Homepage from './pages/home';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Categories from './pages/categories';
import Blogs from './pages/blog';
import Cart from './pages/cart';
import Faqs from './pages/faq';
import Search from './pages/search';
import Login from './components/miscellaneous/login';
import Signup from './components/miscellaneous/signup';
import Dashboard from './pages/Dashboard';
import RequestPage from './pages/Request-Made';
import Order from './pages/Order';
import AddressPage from './pages/Address';
import Payment from './pages/Payment';
import AccountDetails from './pages/AccountDetail';



function App() {
  return (
    <div className="">
      {/* For the navigation bar */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Homepage/> }/>
          <Route path='/categories' element= {<Categories/> }/>
          <Route path='/blog' element= {<Blogs/> }/>
          <Route path='/cart' element= {<Cart/> }/>
          <Route path='/faq' element= {<Faqs/> }/>
          <Route path='/search' element= {<Search/> }/>
          <Route path='/login' element= {<Login/> }/>
          <Route path='/signup' element= {<Signup/> }/>
          <Route path='/dashboard' element= {<Dashboard/> }/>
          <Route path='/request' element= {<RequestPage/> }/>
          <Route path='/order' element= {<Order/> }/>
          <Route path='/address' element= {<AddressPage/> }/>
          <Route path='/payment-method' element= {<Payment/> }/>
          <Route path='/account-details' element= {<AccountDetails/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
