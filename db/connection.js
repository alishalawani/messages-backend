const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/messages');
module.exports = mongoose;
