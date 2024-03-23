const mongoose = require('mongoose');

const caseSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    due_date: {
        type: Date,
        required: true
    },
    company_name: {
        type: String,
        required: true
    },
    company_email: {
        type: String,
        required: true
    },
    file_storage_function: {
        type: String,
        required: true
    },
    person_in_charge: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Case', caseSchema);
