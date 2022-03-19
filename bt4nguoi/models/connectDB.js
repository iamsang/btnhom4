const mongoose = require('mongoose')                // gọi mongoose vào để dùng'

mongoose.connect('mongodb+srv://sang1409:sang123@cluster0.0kwab.mongodb.net/add?retryWrites=true&w=majority');

module.exports = mongoose