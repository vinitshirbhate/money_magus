const { default: mongoose } = require("mongoose")
const Expense = require("../models/expenseModel.JS")

exports.addExpense = async (req, res) => {
    const {title, amount, date,email}  = req.body.data

    try {
        //validations
        if(!title || !amount || !date || !email){
            return res.status(400).json({message: 'All fields are required!'})
        }
        else{
            const expense = await Expense.create({
                email,title,amount,date
            }) 
        await expense.save()
        res.status(200).json({message: 'Expense Added'})
        }
    } catch (error) {
        console.log(`error ${error}`);
        res.status(500).json({message: 'Server Error'})
    }

}

exports.getExpenses = async (req, res) =>{
    const email = req.query.email;
    try {
        const expenses = await Expense.find({email}).sort({createdAt: -1})
        res.status(200).json(expenses)
    } catch (error) {
        console.log(`error ${error}`);
        res.status(500).json({message: 'Server Error'})
    }
}

exports.deleteExpense = async (req, res) =>{
    const {id} = req.params;
    Expense.findByIdAndDelete(id)
        .then((expense) =>{
            res.status(200).json({message: 'Expense Deleted'})
        })
        .catch((err) =>{
            console.log(`error ${err}`);
            res.status(500).json({message: 'Server Error'})
        })
}