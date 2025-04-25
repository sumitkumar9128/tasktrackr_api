const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const connectedDb = require("./src/config/conn")
const routes = require("./src/routes/todoRoutes")
const {errorHandler} = require("./src/middleware/errorMiddleware")

const PORT = process.env.PORT|| 5000;

app.get("/", (req, res)=>{
    res.send("hlw sumit");
})

// Actual stuff

connectedDb()
app.use(express.json())
app.use("/api/todos", routes)
app.use(errorHandler)

app.listen(PORT, ()=>{
    console.log(`Server is Running at Port ${PORT}`);
})