const mongoose = require('mongoose');


const LiabilitySchema = new mongoose.Schema({
    email:{
        type:String,
    },
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    amount: {
        type: Number,
        required: true,
        maxLength: 20,
        trim: true
    },
  
    date: {
        type: String,

    },
  
}, {timestamps: true})

const Liability = mongoose.model('liability',LiabilitySchema)
module.exports = Liability;