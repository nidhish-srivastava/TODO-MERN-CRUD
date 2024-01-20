const { Router } = require("express");

const { getToDo, saveToDo, deleteToDo, updateToDo } = require("../controllers/ToDoController");

const router = Router();

router.get("/",async(req,res)=>{
    try {
       const response = await getToDo()
       res.json(response)
    } catch (error) {
        res.status(500).send(`Error`)
    }
} 
);

router.post("/", async(req,res)=>{
    const {text} = req.body
    try {
        await saveToDo(text)
        res.status(201).send(`Created Successfully`)
    } catch (error) {
        res.status(500).send(`Server error`)
    }
}
);

router.patch("/", async(req,res)=>{
    const { _id, text } = req.body
    try {
        await updateToDo(_id,text)
        res.status(201).send(`Updated successfully`)
    } catch (error) {
        res.status(500).send(`Error while updating`)
    }
})

router.delete("/", async(req,res)=>{
    const { _id } = req.body;
    try {
        await deleteToDo(_id)
        res.status(201).send(`Deleted successfully`)
    } catch (error) {
        res.status(500).send(`Error while deleting`)
    }
})

module.exports = router;