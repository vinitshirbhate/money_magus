require('dotenv').config();
const mongoose=require('mongoose');

const db=async()=>{
    try {
    
        await mongoose.connect( "mongodb+srv://vinitshirbhate:shivanipatil@moneymagus.dduylmh.mongodb.net/")
        console.log('DB Connected successfully');
    } catch (error) {
        console.log('DB Connection error');
        console.log(error);
    }
}
module.exports={db}