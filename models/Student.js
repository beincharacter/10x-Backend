const mongoose = require('mongoose')
const {Schema} = mongoose;

const StudentSchema = new Schema({
    name: {
        type: String,
        required: true,

    },
    classId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'classes'
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
        
    }
})
const User = mongoose.model('students',StudentSchema)
User.createIndexes()
module.exports = User