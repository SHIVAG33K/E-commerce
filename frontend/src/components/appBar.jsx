import { useState, useRef, useEffect } from 'react';
import { Search, User, MenuIcon, ShoppingCart, X, CreditCard, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { logout } from '../features/userSlice';

const AppBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const items = useSelector(state => state.cart.items.length);
  
  
  const userMenuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleUserMenu = () => setIsUserMenuOpen(prev => !prev);

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };

    if (isUserMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isUserMenuOpen]);

  const userLogout = ()=>{
    Cookies.remove('token');
    dispatch(logout);
    navigate('/signin');

  }



  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="-ml-2 rounded-md bg-white p-2 text-gray-400"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Logo */}
          <div className="flex lg:flex-1">
            <a className="flex items-center">
              <span className="sr-only">Your Company</span>
              <span className="text-lg pr-0 font-bold text-gray-900" onClick={() => navigate("/")}>Store</span>
            </a>
          </div>

          {/* Navigation links */}
          <nav className="hidden md:flex md:space-x-6 mr-6 items-center" aria-label="Main navigation">
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
              Women
            </a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
              Men
            </a>
            <span onClick={() => navigate("/orders")} className="text-sm font-medium text-gray-700 hover:text-gray-800">
              Orders
            </span>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
              <span className="sr-only">Search</span>
              <Search className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>

          {/* Right section */}
          <div className="flex items-center">
            <div 
              className="relative" 
              ref={userMenuRef}
            >
              <button
                className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 focus:outline-none"
                onClick={toggleUserMenu}
                aria-expanded={isUserMenuOpen}
                aria-haspopup="true"
              >
                <span className="sr-only">Open user menu</span>
                <User className="h-6 w-6" aria-hidden="true" />
              </button>
              {isUserMenuOpen && (
                <div
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex={-1}
                >
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    tabIndex={-1}
                    onClick={() => {
                      setIsUserMenuOpen(false);
                      console.log("Profile clicked");
                    }}
                  >
                    <User className="mr-3 h-5 w-5" aria-hidden="true" />
                    Profile
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    tabIndex={-1}
                    onClick={() => {
                      setIsUserMenuOpen(false);
                      console.log("Payments clicked");
                    }}
                  >
                    <CreditCard className="mr-3 h-5 w-5" aria-hidden="true" />
                    Payments
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    tabIndex={-1}
                    onClick={() => {
                      setIsUserMenuOpen(false);
                      console.log("Logout clicked")
                      userLogout();
                    }}
                  >
                    <LogOut className="mr-3 h-5 w-5" aria-hidden="true" />
                    Logout
                  </a>
                </div>
              )}
            </div>
            <div className="ml-4 flow-root lg:ml-8">
              <span onClick={() => navigate("/cart")} className="group -m-2 flex items-center p-2">
                <ShoppingCart className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{items}</span>
                <span className="sr-only">items in cart, view bag</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        id="mobile-menu"
        aria-labelledby="mobile-menu-button"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
            Women
          </a>
          <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
            Men
          </a>
          <span onClick={() => navigate("/orders")} className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
            Orders
          </span>
        </div>
      </div>
    </div>
  );
}

export default AppBar;
