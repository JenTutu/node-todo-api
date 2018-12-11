const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
  
// })

// Todo.findOneAndRemove
// Todo.findByIdAndRemove
Todo.findOneAndRemove({_id: '5c0be6dd8ad2f1190d19a006'}).then((todo) => {
  
});

Todo.findByIdAndRemove('5c0be6dd8ad2f1190d19a006').then((todo) => {
  console.log(todo);
  
})