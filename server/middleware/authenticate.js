const {User} = require('./../models/user');

// creating middleware
var authenticate = (req, res, next) => {
  var token = req.header('x-auth');

  User.findByToken(token).then((user) => {
    if (!user) {
      return Promise.reject();
    }
    req.user = user;
    req.token = token;
    next(); //call next so that the next function executes
  }).catch((e) => {
    res.status(401).send();
  });
}

module.exports = {authenticate};