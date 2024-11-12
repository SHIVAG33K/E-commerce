import express from "express";
import cors from "cors";
import mainRouters from  "./routes/index.js"

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", mainRouters);

app.listen(3000,() => {
    console.log("server started")
})
