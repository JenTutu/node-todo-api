// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5bffcc6f05f2e0d50855e031")
  // }, {
  //   $set: { // this is an update operator, you have to use these
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
    
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5bf7069a72167d033307612f")
  }, {
    $set: { // this is an update operator, you have to use these
      name: 'Jen'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
    
  })  
  // db.close();
});
