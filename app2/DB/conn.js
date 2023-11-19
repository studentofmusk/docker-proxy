const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/GoCelCatcher')
.then(()=>console.log("DB connected!"))
.catch((err)=>console.log("DB Connection Faild!\nDue to "+err.message));