const ToDoModel = require("../models/ToDoModel");

module.exports.getToDo = async (req, res) => {
    return await ToDoModel.find();
}

module.exports.saveToDo = (text) => {

    return ToDoModel.create({ text })
}

module.exports.deleteToDo = (_id) => {

    return ToDoModel
        .findByIdAndDelete(_id)
}

module.exports.updateToDo = (_id, text) => {
    return ToDoModel
        .findByIdAndUpdate(_id, { text })
}