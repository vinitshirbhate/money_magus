const { default: mongoose } = require("mongoose")
const Liability = require("../models/liabilityModel.JS")

exports.addLiability = async (req, res) => {
    const {title, amount, date,email}  = req.body.data

    try {
        //validations
        if(!title || !amount || !date || !email){
            return res.status(400).json({message: 'All fields are required!'})
        }
        else{
            const liability = await Liability.create({
                email,title,amount,date
            }) 
        await liability.save()
        res.status(200).json({message: 'Expense Added'})
        }
    } catch (error) {
        console.log(`error ${error}`);
        res.status(500).json({message: 'Server Error'})
    }

}

exports.getLiabilities = async (req, res) =>{
    const email = req.query.email;
    try {
        const liabilities = await Liability.find({email}).sort({createdAt: -1})
        res.status(200).json(liabilities)
    } catch (error) {
        console.log(`error ${error}`);
        res.status(500).json({message: 'Server Error'})
    }
}

exports.deleteLiability = async (req, res) =>{
    const {id} = req.params;
    Liability.findByIdAndDelete(id)
        .then((liability) =>{
            res.status(200).json({message: 'Liability Deleted'})
        })
        .catch((err) =>{
            console.log(`error ${err}`);
            res.status(500).json({message: 'Server Error'})
        })
}