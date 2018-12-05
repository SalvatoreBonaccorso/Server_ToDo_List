var express = require('express');
var router = express.Router();
var fake = require('todo_list9');

var toDo = [];
toDo.push(fake.addToDo('Play', 'at the park', true, 'andrea'));
toDo.push(fake.addToDo('Hello', 'while you run', false, 'marco'));
toDo.push(fake.addToDo('Trip', 'go at the beach', true, 'salvatore'));

// GET introduzione al mio server
router.get('/', function (req, res) {
    res.json('Welcome! I am Bonaccorso Salvatore and this is my server that help you for remember things that you do.')
})
// GET lettura di tutti i toDo disponibili e filtrati per nome
router.get("/listToDo", function (req, res) {
    if ((req.query.assignedTo == undefined)) {
        return res.status(200).json({ "toDoList": fake.getToDo() });
    }
    else
        if (req.query.assignedTo != undefined) {
            return res.status(200).json({ "message": fake.findToDoByUser(req.query.assignedTo) });
        }
})
//GET lettura di tutti gli utenti disponibili
router.get('/users', function (req, res) {
    res.json(fake.getUsers());
})
// GET lettura di tutti i ToDo filtrata per stato di completamento
router.get("/status", function (req, res) {
    res.status(200).json({ "status": fake.readToDoComplete(req.query.completed) });
})
// POST Di Creazione ToDo
router.post('/newToDo', function (req, res) {
    fake.addToDo(req.body.name, req.body.description, req.body.completed, req.body.assignedTo);
    res.status(201).json({"newToDo": fake.findToDoByUser(req.body.assignedTo)});
});
//PUT di modifica di ToDo in base all'id
router.put("/change", function(req, res){
    fake.editToDoStatusById(req.body.id, req.body.completed);
    res.status(200).json({"newStatus": fake.editToDoStatusById(req.body.completed)}); 
})
// DELETE Cancellazione di un ToDo
router.delete("/:id",function(req, res){
    id = parseInt(req.params.id);
    if(fake.deleteToDoById(id)){
        return res.status(200).json({"message": "toDo eliminated"});
    }
    else{
        return res.status(404).json({"error": "toDo already eliminated"});
    }
})
module.exports = router;