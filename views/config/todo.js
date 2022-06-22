const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task:{
        type:String,
        required: true
    },
    date :{
        type:String,
        required: true
    },
      description :{
        type:String,
        required: true
    },
    category :{
      type:String,
      required: true
  }

  });

  const todos = mongoose.model('todos',todoSchema)

  module.exports = todos;