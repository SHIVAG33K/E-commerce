import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';  
import { user } from "../features/userSlice";
import cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

export function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const updateData = async (event) => {
    event.preventDefault(); // Prevent form from reloading the page
    const url = "https://backend-production-06f4.up.railway.app/api/auth/signup";
    try {
      const response = await axios.post(url, {
        email,
        name,
        password,
        number,
      }, {
        withCredentials: true
      });
      if( response.data.token){
        cookies.set("token", response.data.token);
        const decoded = jwtDecode(response.data.token);
        dispatch(user(decoded));
        navigate('/');
      }
    } catch (error) {
      console.error("Error during signup", error);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left section with image background */}
      <div className="hidden lg:block w-3/5 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}>
        <div className="w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center p-10 text-white">
          <h2 className="text-5xl font-bold mb-6">ShopSmart</h2>
          <p className="text-2xl mb-8 max-w-lg text-center">
            Your one-stop destination for all your shopping needs. Find great deals and exclusive products.
          </p>
        </div>
      </div>

      {/* Right section with sign-in form */}
      <div className="w-full lg:w-2/5 flex">
        <div className="w-full h-full flex flex-col p-8">
          <div className="flex pt-20 flex-col justify-center items-center text-center space-y-4 mb-8">
            <h3 className="text-3xl font-bold">Sign up</h3>
            <p className="text-gray-600">Enter your email below to login to your account</p>
          </div>
          <div className="flex flex-col justify-center flex-grow">
            <form className="space-y-4" onSubmit={updateData}>
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  id="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="number" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  id="number"
                  type="text"
                  placeholder="Phone Number"
                  onChange={(e) => setNumber(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="terms" className="text-sm font-medium text-gray-700">
                  I agree to the terms and conditions
                </label>
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign up
              </button>
            </form>
            <div className="mt-4 text-center text-sm">
              already have an account?{" "}
              <span
                onClick={() => navigate('/signin')}
                className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
              >
                Sign in
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
