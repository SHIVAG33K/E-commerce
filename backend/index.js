import express from "express";
import cors from "cors";
import mainRouters from  "./routes/index.js"
import cookieParser from 'cookie-parser';

const app = express();


app.use(cookieParser());
app.use(cors({
<<<<<<< HEAD
    origin: 'http://localhost:5173',  
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  
    credentials: true, 
  }));
=======
    origin: 'http://localhost:5173',  // The frontend URL (change this for production)
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allow these HTTP methods
<<<<<<< HEAD
    credentials: true,  // Allow sending cookies with requests
  }));
=======
    credentials: true,  // Allow sending cookies with request
    optionsSuccessStatus: 200, // Some legacy browsers choke on 20
}));
>>>>>>> origin/main
>>>>>>> e1cc12c15c39f7eebb02d86bc0b9928054d76f7b
  
app.use(express.json());
app.use("/api", mainRouters);

app.listen(3000,() => {
    console.log("server started")
})
