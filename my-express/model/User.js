var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Project = new Schema({
    username   : String,
    psw        : String,
    create_date: { type: Date, default: Date.now }
});
var UserModel = mongoose.model('Project', Project);
module.exports = UserModel;