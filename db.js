const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://mukesh:mukesh@cluster0.jsf4yao.mongodb.net/curd_10x";

connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongoose successfully")
    })
}
module.exports = connectToMongo