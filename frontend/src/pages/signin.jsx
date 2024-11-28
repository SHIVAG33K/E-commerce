import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';



  export function SigninForm() {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")
    const navigate = useNavigate()

    const updateData = async() => {
      try{
        const response =  await axios.post("http://localhost:3000/api/auth/signin" ,{
          email,
          name,
          password
      },{
        withCredentials: true
      });

      Cookies.set("token", response.data.token);
      console.log("done");
      navigate('/')

      }catch(e){
        return "invalid credentials"
      }
    };



    
    return (
    <div className="flex min-h-screen">
        <div className="w-1/2 bg-blue-600 flex flex-col justify-center items-center p-10 text-white">
          <div className="max-w-md text-center">
            {/* Add an eCommerce-related image */}
            <img 
              src="https://via.placeholder.com/400x300?text=Ecommerce+Store" 
              alt="Ecommerce Store" 
              className="mb-6 rounded-lg shadow-lg"
            />
            {/* Store name and tagline */}
            <h2 className="text-3xl font-bold mb-4">ShopSmart</h2>
            <p className="text-lg mb-6">
              Your one-stop destination for all your shopping needs. Find great deals and exclusive products.
            </p>
          </div>
        </div>



      <div className="flex-1 p-20 ml-20 justify-around">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your login details.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              onChange={(e)=>setEmail(e.target.value)}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              onChange={(e)=>setPassword(e.target.value)}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button onClick={() => {updateData()
          }} className="mt-6" fullWidth>
            sign In
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have an account?{" "}
            <span 
              onClick={()=>   navigate('/signup')} 
              className="font-medium text-gray-900 cursor-pointer"
            >
              Sign Up
            </span>
          </Typography>
        </form>
      </Card>
      </div> 
  </div>
    );
  }
  