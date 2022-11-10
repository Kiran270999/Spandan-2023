
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let contact = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phoneNumber: {
        type: Number
    },
    Your_Message: {
        type: String
    }
}, {
    collection: 'contact'
})
module.exports = mongoose.model('contact', contact)
