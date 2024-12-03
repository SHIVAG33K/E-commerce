import express from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import z from "zod"


const router = express.Router();
const prisma = new PrismaClient();

router.post("/signup", async (req,res) => {

    const signupSchema = z.object({
        email: z.string().email(),
        password: z.string().min(6),
        name: z.string().min(1),
        number: z.string().optional(),
    });

    const parseResult = signupSchema.safeParse(req.body);

    if (!parseResult.success) {
        return res.status(400).json({ message : "incorrect credentials"})
    }

    const {email,name,number} = req.body;
    const epassword = req.body.password
    const password = await bcrypt.hash(epassword,10)

    const check = await prisma.user.findFirst({
        where:{
            email : email
        }
    })
    if(check){
        return res.status(400).json({ message : "User already exist"});
    }

    const user = await prisma.user.create({
        data: {
            email,
            name,
            number,
            password
        },
    });

      
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

  
    res.json({token : token})
    
});

router.post("/signin", async (req,res) => {

    const signinSchema = z.object({
        email: z.string().email(),
        password: z.string().min(6),
    });
    const parseResult = signinSchema.safeParse(req.body);
    if(!parseResult.success){
        return res.status(400).json({ message : "incorrect credentials"})
    }

    const {email,password} = req.body;

    const user = await prisma.user.findFirst({
        where : {
            email
        }
    });
    if (!user){
        return res.status(400).json({ message : "No user found"})
    }

    const match = await bcrypt.compare(password, user.password);

    if(!match){
        return res.status(400).json({ message : "wrong password"})
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);




    res.json({
        token : token
    });

});

router.post("/check", async (req,res) => {

    
  const token = req.cookies['token'];

  if (!token)
    return res.status(401).json({
      message: "Unauthorised user!",
    });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if(decoded){
        res.json({
            msg : "authorised user!"
        });
    }


  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Unauthorised user!",
    });
  }
});





export default router;









