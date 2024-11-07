import { SignupForm} from "./pages/signup"
import { SigninForm} from "./pages/signin"
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Home from "./pages/home";
import { ThemeProvider } from "@material-tailwind/react";


function App() {

  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignupForm />}/>
          <Route path="/signin" element={<SigninForm />}/>
          <Route path="/home" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
