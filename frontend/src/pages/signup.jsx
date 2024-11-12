import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


  export function SignupForm() {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")
    const [number,setNumber] = useState("")
    const navigate = useNavigate()

    const updateData = async() => {
        const response =  await axios.post("http://localhost:3000/api/auth/signup" ,{
            email,
            name,
            password,
            number
        })
    };



    
    return (
      <div className="flex min-h-screen">
          <div className="w-1/2 bg-blue-600 flex flex-col justify-center items-center p-10 text-white">
          <div className="max-w-md text-center">
            <h2 className="text-3xl font-bold mb-4">Explore the world’s leading design portfolios.</h2>
            <p className="text-lg mb-6">
              Millions of designers and agencies around the world showcase their portfolio work on Flowbite - the home to the world’s best design and creative professionals.
            </p>
            <div className="flex items-center justify-center space-x-2">
              <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User 1" className="w-8 h-8 rounded-full" />
              <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="User 2" className="w-8 h-8 rounded-full" />
              <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="User 3" className="w-8 h-8 rounded-full" />
              <img src="https://randomuser.me/api/portraits/women/4.jpg" alt="User 4" className="w-8 h-8 rounded-full" />
              <span className="text-lg font-semibold">Over <span className="text-yellow-400">15.7k</span> Happy Customers</span>
            </div>
          </div>
        </div>

        <div className="flex-1 p-20 ml-20 pt-10 justify-around">
        <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              onChange={(e) => setName(e.target.value)}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
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
              Your Number
            </Typography>
            <Input
              size="lg"
              placeholder="Number"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              onChange={(e)=>setNumber(e.target.value)}
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
          <Button onClick={() => updateData()} className="mt-6" fullWidth>
            sign up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <span 
              onClick={()=> navigate('/signin')} 
              className="font-medium text-gray-900 cursor-pointer"
            >
              Sign In
            </span>
          </Typography>
        </form>
      </Card>
        </div>
        
      
      </div>

    );
  }
  