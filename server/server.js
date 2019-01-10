var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});


// var newTodo = new Todo({
//   text: true
// });
//
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo: ', doc)
// }, (e) => {
//   console.log('Unable to save todo', e);
// });

// user model
// email - required and trimmed, string, min length of 1
var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

var User = new User({
  email: "silas@tulane.edu"
});

User.save().then((doc) => {
  console.log('Saved new user: ', doc);
}, (e) => {
console.log('Unable to save new user', e);
});
