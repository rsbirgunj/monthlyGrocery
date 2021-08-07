const mongoose = require("mongoose")
const chalk = require("chalk")
mongoose.connect(`mongodb+srv://rahul:rahul123@cluster0.yspqo.mongodb.net/grocerry?retryWrites=true&w=majority`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log(chalk.greenBright.bold("Connected to Database Suceesfully !!!"))
})