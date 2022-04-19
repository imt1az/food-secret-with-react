
import './App.css';
import Header from './Pages/Shared/Header';
import { Routes,Route } from 'react-router-dom';
import Footer from './Pages/Shared/Footer';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Order from './Pages/Order/Order';
import Checkout from './Pages/Order/Checkout/Checkout';
import Thankyou from './Pages/Order/Checkout/Thankyou';
import Blog from './Pages/Blog/Blog';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/order' element={<Order></Order>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
      <Route path='/about' element={<Blog></Blog>}></Route>
      <Route path='/service/:serviceId' element={<RequireAuth>
         <ServiceDetail></ServiceDetail>
       </RequireAuth>}></Route>

       <Route path='/order/checkout' element={<RequireAuth>
       <Checkout></Checkout>
     </RequireAuth>}></Route>
     <Route path='/thankyou' element={<Thankyou></Thankyou>}></Route>
     </Routes>
     
     <Footer></Footer>
    </div>
  );
}

export default App;
