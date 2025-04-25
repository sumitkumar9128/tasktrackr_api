const Todo = require("../models/todo");

const createTodo = async (req, res)=>{
    const {title} = req.body;
    const to = await Todo.create({title})
    res.status(201).json(to);
}

const getTodo = async(req, res)=>{
    const to = await Todo.find();
    res.status(200).json(to);
}

const updateTodo = async(req, res)=>{
    const {id} = req.params;
    const to = await Todo.findByIdAndUpdate(id, req.body, {new: true});
    res.status(200).json(to)
}

const deleteTodo = async (req, res)=>{
    const {id} = req.params
    await Todo.findOneAndDelete(id)
    res.status(200).json({message: "todo delete"})
}

module.exports = {createTodo, getTodo, updateTodo, deleteTodo};