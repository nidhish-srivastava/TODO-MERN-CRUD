const express = require("express")
const pool = require("./db.js")
const app = express()

app.use(express.json())

// ROUTES
app.post("/",async(req,res)=>{
    const {description} = req.body
    const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *",[description])
    res.json(newTodo.rows[0])
})

app.get("/",async(req,res)=>{
    const response = await pool.query("SELECT * FROM todo")
    res.json(response.rows)
})

app.get("/:id",async(req,res)=>{
    const {id} = req.params
    const response = await pool.query("SELECT * FROM todo WHERE todo_id = $1",[id])
    res.json(response.rows[0])
})

app.put("/:id",async(req,res)=>{
    const {description} = req.body
    const {id} = req.params
    const response = await pool.query("UPDATE todo SET description = $1 WHERE todo_id=$2",[description,id])
    res.json("Todo was updated")
})

app.delete("/:id",async(req,res)=>{
    const {id} = req.params
    await pool.query("DELETE FROM todo WHERE todo_id=$1",[id])
    res.json("deleted successfully")
})

app.listen(5000,()=>{
    console.log("Server running on port 5000");
})