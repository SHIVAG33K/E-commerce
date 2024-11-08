import express from "express"
import authRouter from "./authRoutes.js";
import productRouter from "./productRoutes.js"

const router = express.Router();

router.use("/auth",authRouter);
router.use("/products",productRouter);

export default router;