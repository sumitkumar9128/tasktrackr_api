const express = require("express")
const router = express.Router();
const {createTodo, getTodo, updateTodo, deleteTodo} = require("../controllers/todoController")

router.post("/", createTodo)
router.get("/", getTodo)
router.put("/:id", updateTodo)
router.delete("/:id", deleteTodo)

module.exports = router