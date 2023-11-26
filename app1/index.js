const express = require('express');
const app = express();
const dotenv = require('dotenv');

// Environment Variable Configuration
dotenv.config();

//Env Variables
const PORT = process.env.PORT;
const DB = process.env.DB;

// require('./DB/conn.js');

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Routes
app.get('/', (req, res)=>{
    res.send("naan ready dha varava running...")
})

app.listen(PORT, ()=>console.log("Server is running at port "+ PORT));