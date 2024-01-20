const ToDoModel = require("../db/model");

const getToDo = async (req, res) => {
    return await ToDoModel.find();
}

const saveToDo = (text) => {

    return ToDoModel.create({ text })
}

const deleteToDo = (_id) => {

    return ToDoModel
        .findByIdAndDelete(_id)
}

const updateToDo = (_id, text) => {
    return ToDoModel
        .findByIdAndUpdate(_id, { text })
}

module.exports = {
    saveToDo,deleteToDo,updateToDo,getToDo
}