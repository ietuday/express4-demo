var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/puppies');
// connect to a database so the below will work.

// what's happening is that we're createing a new schema
// and making a todos collection and a Todo model.

// We then create new Todo.
// So in the mongo shell in the terminal,
// connect to your database and uery it there
// and see if you see the todo below log in the terminal
// run node server/db.Tester to execute this file
// MAKE SURE MONGOD is RUNNING

var TodoSchema = new mongoose.Schema({
    name: String,
    completed: Boolean
});

var Todo = mongoose.model('todo', TodoSchema);

Todo.create({
        name: 'todo1 - clean room',
        completed: false
    })
    .then(function(err, todo) {
        console.log(err, 'todo->', todo);
    });