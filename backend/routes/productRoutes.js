import express from "express";
import { PrismaClient } from "@prisma/client";
import { number } from "zod";


const router = express.Router();
const prisma = new PrismaClient();


router.get("/products",async(req,res)=>{

    // const products = await prisma.products.({})
})

router.get("/:id", async(req,res) => {

    const id = req.params.id
    const item = await prisma.products.findFirst({
        where:{
            id : Number(id)
        }
    })
    
    res.send(item);
});




export default router;