import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);


  if (!isAuthenticated) {
    return navigate('/signin');
  }

  return children;
};

export default ProtectedRoute;