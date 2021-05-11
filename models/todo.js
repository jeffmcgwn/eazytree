const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for todo
const TodoSchema = new Schema({
  band: {
    type: String,
    required: [true, 'The todo text field is required']
  },
  website: {
    type: String,
    required: [false]
  },
  facebook: {
    type: String,
    required: [false]
  },
  patreon: {
    type: String,
    required: [false]
  },
   instagram: {
    type: String,
    required: [false]
  },
  twitter: {
    type: String,
    required: [false]
  },
  youtube: {
    type: String,
    required: [false]
  },
  spotify: {
    type: String,
    required: [false]
  },
  bandcamp: {
    type: String,
    required: [false]
  },
  twitch: {
    type: String,
    required: [false]
  },
  snapchat: {
    type: String,
    required: [false]
  },
  image: {
    type: String,
    required: [false]
  },
  logo: {
    type: String,
    required: [false]
  },
  id: {
    type: String
  }
})

//create model for todo
const Todo = mongoose.model('todo', TodoSchema);

module.exports = Todo;