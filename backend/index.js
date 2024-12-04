import express from "express";
import cors from "cors";
import mainRouters from  "./routes/index.js"
import cookieParser from 'cookie-parser';

const app = express();


app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',  
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  
    credentials: true, 
  }));
  
app.use(express.json());
app.use("/api", mainRouters);

app.listen(3000,() => {
    console.log("server started")
})
