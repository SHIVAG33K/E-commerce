import express from "express"
import authRouter from "./authRoutes.js";
import productRouter from "./productRoutes.js"
import session from "express-session"
import cartRouter from "./cartRoutes.js"
import ordersRouter from "./orderRoutes.js"
import {authMiddleware} from "./middleware.js"

const router = express.Router();

router.use(session({
    secret: 'amar',
    saveUninitialized: true,
    resave: false,
    cookie: {
      secure: false,  
      httpOnly: true, 
      sameSite: 'None'
    }
  }));

  

router.use("/auth",authRouter);
router.use("/products",authMiddleware, productRouter);
router.use("/cart",authMiddleware,cartRouter);
router.use("/orders",authMiddleware, ordersRouter);

export default router;