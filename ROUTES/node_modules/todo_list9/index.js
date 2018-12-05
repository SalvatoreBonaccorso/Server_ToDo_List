var users = ['salvatore', 'marco', 'carlo', 'andrea', 'giuseppe']
var toDo = [];
var COUNTER = 0;

exports.getToDo = function () {
    return toDo;
}
exports.reset = function () {
    toDo = [];
    COUNTER = 0;
    return toDo;
}
exports.addToDo = function (name, description, completed, user) {
    if (users.includes(user)) {
        toDo.push({
            name: name,
            description: description,
            completed: completed,
            assignedTo: user,
            id: COUNTER++
        });
        return 'Add a new things todo a user "' + user + '"';
    }
    else {
        return 'is not possible add a todo because user "' + user + '" is not present !';
    }
}
exports.deleteToDoById = function (id) {
    for (var i = 0; i < toDo.length; i++) {
        if (toDo[i].id === id) {
            toDo.splice(i, 1);
            return toDo;
        }
    }
}
exports.editToDoStatusById = function (id, completed) {
    for (var i = 0; i < toDo.length; i++) {
        if (toDo[i].id === id) {
            if (toDo[i].completed !== completed) {
                toDo[i].completed = completed;
                return toDo[i];
            }
        }
    }
}
exports.findToDoByUser = function (user) {
    var filteredArray = [];
    for (var list of toDo) {
        if (list.assignedTo === user) {
            filteredArray.push(list);
        }
    }
    return filteredArray;
}
exports.getUsers = function () {
    return users;
}
exports.readToDoComplete = function () {
    var filteredArray = [];
    for (var list of toDo) {
        if (list.completed === true) {
            filteredArray.push(list);
        }
    }
    return filteredArray;
}
exports.count = function () {
    return toDo.length;
}