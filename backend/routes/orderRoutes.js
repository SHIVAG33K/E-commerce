import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();


router.get("/", async(req,res)=>{
    
    const {id} = req.session.user;

    try{
        const orders = await prisma.orders.findMany({
            where : {
                user_id : id
            }
        })
        res.send(orders);
    }catch(e){
        res.send(e)
    }

});


router.post("/", async(req,res)=>{
    
    const {id} = req.session.user
    const product_id = req.body.product_id;
    try{
        const order = await prisma.orders.create({
            data:{
                user_id : id,
                product_id: product_id,
                status : "order placed"
            }
        });
        res.send("order placed")
    }catch(e){
        res.send(e)
    }
});

router.get("/:orderId", async(req,res)=>{

    const {id} = req.session.user
    const orderId = req.params.orderId

    try{
        const orderDetails = await prisma.orders.findUnique({
            where:{
                id : Number(orderId)
            }
        })
        res.send(orderDetails)
    }catch(e){
        res.send(e)
    }

});

export default router;