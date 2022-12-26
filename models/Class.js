const mongoose = require('mongoose')
const {Schema} = mongoose;

const ClassSchema = new Schema({
    class: {
        type: String,
        required: true,
    },
    studentCount: {
        type: String,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
        
    }
})

module.exports = mongoose.model('classes',ClassSchema)