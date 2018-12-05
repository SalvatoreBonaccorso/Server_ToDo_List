var assert = require('assert');
var fake = require('../index');
describe('testiamo i toDo', function () {
    it('testiamo getToDo()', function () {
        fake.reset();
        assert.equal(fake.getToDo().length, 0);
    });
    it("Testiamo l'aggiunta di un toDo ,il delete e il count", function () {
        fake.reset();
        fake.addToDo('Trip', 'go at the beach', true, 'salvatore');
        assert.equal(fake.getToDo().length, 1);
        assert.equal(fake.getToDo()[0].id, 0);
        fake.addToDo('Hello', 'while you run', true, 'marco');
        assert.equal(fake.getToDo().length, 2);
        assert.equal(fake.getToDo()[1].id, 1);
        fake.count();
        assert.equal(fake.count(), 2);
        fake.deleteToDoById(0);
        fake.addToDo('Play', 'at the park', true, 'andrea');
        assert.equal(fake.getToDo().length, 2);
        assert.equal(fake.getToDo()[1].id, 2);

    })
    it('Testiamo il cambiamento dello stato', function () {
        fake.reset();
        fake.addToDo('Play', 'at the park', false, 'andrea');
        fake.addToDo('Hello', 'while you run', false, 'marco');
        fake.addToDo('Trip', 'go at the beach', false, 'salvatore');
        fake.editToDoStatusById(1, true);
        assert.equal(fake.getToDo()[1].completed, true);
    })
    it('Testiamo la lettura della lista dei toDo in base ad uno specifico utente', function () {
        fake.reset();
        fake.addToDo('Play', 'at the park', true, 'andrea');
        fake.addToDo('Hello', 'while you run', true, 'marco');
        fake.addToDo('Trip', 'go at the beach', true, 'salvatore');
        var filterUser = fake.findToDoByUser('salvatore');
        assert.equal(filterUser.length, 1);
    })
    it('testiamo getUsers()', function () {
        assert.equal(fake.getUsers().length, 5);
    });
    it('Testiamo la lettura della lista dei toDo completati', function () {
        fake.reset();
        fake.addToDo('Play', 'at the park', true, 'andrea');
        fake.addToDo('Hello', 'while you run', false, 'marco');
        fake.addToDo('Trip', 'go at the beach', true, 'salvatore');
        var filterComplete = fake.readToDoComplete();
        assert.equal(filterComplete.length, 2);
    })
})