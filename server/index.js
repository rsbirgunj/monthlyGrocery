const express = require('express')
const chalk = require("chalk")
const cors = require('cors');
const app = express()
app.use(cors());
app.options('*', cors());
require("./models/mongo.js");
app.use(express.json());

const dataManipulationRoute = require('./routes/itemMangementRoute')
app.use('/groccery',dataManipulationRoute)

app.listen(3000,()=>{
    console.log(chalk.greenBright("Server is running on port https://localhost:3000"))
})