const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5c04500aec7321a405fb1f5e11';

// if (!ObjectID.isValid(id)) {
//   console.log('Id not valid');
  
// }
// Todo.find({
//   _id: id // no need to convert to id mongoose handles
// }).then((todos) => {
//   console.log('Todos', todos);
  
// })

// Todo.findOne({
//   _id: id // no need to convert to id mongoose handles
// }).then((todo) => {
//   console.log('Todo', todo); 
// })

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
    
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

var userId = "5c013a11fcbd83b00438adc4"
User.findById(userId).then((user) => {
  if (!user) {
   return console.log('No user found');
    
  }
 
  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e); 
})