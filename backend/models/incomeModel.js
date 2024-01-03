const mongoose = require('mongoose');


const IncomeSchema = new mongoose.Schema({
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

const Income = mongoose.model('income',IncomeSchema)
module.exports = Income;