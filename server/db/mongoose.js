var mongoose = require('mongoose');

//tell mongoose we want to use its Promise library
mongoose.Promise = global.Promise;
// needs to connect to db
mongoose.connect(process.env.MONGODB_URI);
module.exports = {mongoose}