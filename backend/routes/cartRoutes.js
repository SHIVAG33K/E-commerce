import { PrismaClient } from "@prisma/client";
import express from "express";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/" ,async(req,res)=> {
    const id = req.user.id
    const cart = await prisma.cart.findMany({
        where:{
            user_id:id
        },
        include: {
            product: true,
          },
    })
    res.send(cart);
    });

router.post("/", async(req,res)=>{
    const id = req.user.id
    
    const {product_id,quantity} = req.body
    try{
        const cart = await prisma.cart.create({
            data :{
                user_id:id,
                product_id,
                quantity
            }
        })
    
        res.send(cart)
    }catch(e){
        res.send(e)
    }

});

router.delete("/:itemId", async(req,res)=>{
    const id = req.user.id
    const item_id = req.params.itemId
    try{
        const card = await prisma.cart.delete({
            where:{

                id:Number(item_id) 
            }
        })
        res.send("deleted")
    }catch(e){
        res.send(e)
    }

});

export default router;