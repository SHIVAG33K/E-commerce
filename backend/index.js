import express from "express";
import cors from "cors";
import mainRouters from  "./routes/index.js"
import cookieParser from 'cookie-parser';

const app = express();


app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',  // The frontend URL (change this for production)
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allow these HTTP methods
    credentials: true,  // Allow sending cookies with request
    optionsSuccessStatus: 200, // Some legacy browsers choke on 20
}));
  
app.use(express.json());
app.use("/api", mainRouters);

app.listen(3000,() => {
    console.log("server started")
})
