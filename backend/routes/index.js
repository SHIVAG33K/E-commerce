import express from "express"
import authRouter from "./authRoutes.js";
import productRouter from "./productRoutes.js"
import session from "express-session"
import cartRouter from "./cartRoutes.js"
import ordersRouter from "./orderRoutes.js"

const router = express.Router();

router.use(session({
    secret: "amar",
    saveUninitialized: true,
    resave: false
}));

router.use("/auth",authRouter);
router.use("/products",productRouter);
router.use("/cart",cartRouter);
router.use("/orders", ordersRouter);

export default router;