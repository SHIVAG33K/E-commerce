import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();


router.get("/", async(req,res)=>{
    
    // const {id} = req.session.user;
    
    const id = req.user.id
    try{
        const orders = await prisma.orders.findMany({
            where : {
                user_id : id
            },
            include: {
                product: true,
              },
        })
        res.send(orders);
    }catch(e){
        res.send(e)
    }

});


router.post("/", async (req, res) => {
    const id = req.user.id;
    const product_ids = req.body.product_id;

    if (!Array.isArray(product_ids) || product_ids.length === 0) {
        return res.status(400).send("Invalid product_ids");
    }
    
    console.log(product_ids, id);

    try {
        const orders = await prisma.orders.createMany({
            data: product_ids.map(product_id => ({
                user_id: Number(id),
                product_id: Number(product_id),
                status: "order placed"
            }))
        });
        res.send("order placed");
    } catch (e) {
        res.status(500).send(e);
    }
});


router.get("/:orderId", async(req,res)=>{

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