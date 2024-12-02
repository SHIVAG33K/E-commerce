import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie';

const ProtectedRoute = ({ children }) => {

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const token = Cookies.get("token");
  
  if (!isAuthenticated && token) {
    const data = async()=>{
      try{
        const response = await axios.post("http://localhost:3000/api/auth/check");
        return children;
      }catch(e){
        return <Navigate to="/signin" />;
      }
    }
    data()
  }


  if (!isAuthenticated && !token) {
    return <Navigate to="/signin" />;
  }


  return children;
};

export default ProtectedRoute;