import { SignupForm} from "./pages/signup"
import { SigninForm} from "./pages/signin"
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Home from "./pages/home";
import Products from "./pages/products";
import Product from "./pages/productid";
import Cart from "./pages/cart";
import Orders from "./pages/orders";
import ProtectedRoute from './components/ProtectedRoute.jsx';

function App() {

  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignupForm />}/>
          <Route path="/signin" element={<SigninForm />}/>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/products" element={<ProtectedRoute><Products /></ProtectedRoute>} /> 
          <Route path="/products/:id" element={<ProtectedRoute><Product /></ProtectedRoute>} /> 
          <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} /> 
          <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} /> 
          {/* <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />}/> 
          <Route path="/products/:id" element={<Product /> }/> 
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/orders" element={<Orders />} />  */}
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App