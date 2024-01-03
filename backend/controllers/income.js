const { default: mongoose } = require("mongoose")
const Income = require("../models/incomeModel.JS")

exports.addIncome = async (req, res) => {
    const {title, amount, date, email}  = req.body.data;

    try {
        //validations
        if(!title || !date || !amount || !email){
            return res.status(400).json({message: 'All fields are required!'})
        }
        
        else{
            const income = await Income.create({
                email,title,amount,date
            }) 
        await income.save()
        res.status(200).json({message: 'Income Added'})
        }
    } catch (error) {
        console.log(`error ${error}`);
        res.status(500).json({message: 'Server Error'})
    }

}

exports.getIncomes = async (req, res) =>{
    const email = req.query.email;
    console.log(email);
  
    try {
        const incomes = await Income.find({email}).sort({createdAt: -1});
        console.log(incomes);
        res.status(200).json(incomes)
    } catch (error) {
        console.log(`error ${error}`);
        res.status(500).json({message: 'Server Error'})
    }
}

exports.deleteIncome = async (req, res) =>{
    const {id} = req.params;
    Income.findByIdAndDelete(id)
        .then((income) =>{
            res.status(200).json({message: 'Income Deleted'})
        })
        .catch((err) =>{
            console.log(`error ${err}`);
            res.status(500).json({message: 'Server Error'})
        })
}