import express from "express";
import { PrismaClient } from "@prisma/client";
import { number } from "zod";


const router = express.Router();
const prisma = new PrismaClient();


router.get("/",async(req,res)=>{

    const products = await prisma.products.findMany();
    res.send(products);
})

router.get("/:id", async(req,res) => {

    const id = req.params.id
    console.log(id);
    const item = await prisma.products.findFirst({
        where:{
            id : Number(id)
        }
    });
    
    res.send(item);
});




export default router;