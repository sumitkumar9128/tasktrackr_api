const mongoose = require("mongoose")

const todoSche = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    completed:{
        type: Boolean,
        default: false
    },
},{
    timestamps:true
});
const Todo = mongoose.model("Todo", todoSche);
module.exports = Todo;