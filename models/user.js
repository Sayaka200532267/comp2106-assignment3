// set the required information for user auth
let mongoose = require('mongoose');
let plm = require('passport-local-mongoose');

let user = new mongoose.Schema({
    username: { 
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    }
});


user.plugin(plm);

module.exports = mongoose.model('User', user);