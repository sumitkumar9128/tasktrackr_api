const mongoose = require("mongoose")

const connectDb = async()=>{
    try{
        const con = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`mongodb connect ${con.connection.host}`);
    }catch(error){
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDb;