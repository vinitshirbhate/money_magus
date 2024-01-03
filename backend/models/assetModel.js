const mongoose = require('mongoose');


const AssetSchema = new mongoose.Schema({
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
        required: true,
        trim: true
    },
}, {timestamps: true})

const Asset = mongoose.model('asset',AssetSchema)
module.exports = Asset;