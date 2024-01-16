const Asset = require("../models/assetModel.JS")
const Income = require("../models/incomeModel.JS")
const Expense = require("../models/expenseModel.JS")
const Liability = require("../models/liabilityModel.JS")

const getValuesController = async (req,res)=>{

    try{
        const email = req.query.email;
        const asset = await Asset.find({email});
        const income = await Income.find({email});
        const expense = await Expense.find({email});
        const liability = await Liability.find({email})
        
        var assetSum = getSum(asset);
        var incomeSum = getSum(income);
        var expenseSum = getSum(expense);
        var liabilitySum = getSum(liability);
       

        res.status(200).json({values:{
            assetSum,incomeSum,expenseSum,liabilitySum
        }})
        
    }
    
    catch(e){
        res.status(501).json({msg:"Internal Server Error"})

    }
   
}


function getSum(arr){
    let sum = 0;
    for(let i = 0 ; i<arr.length ;i++){
        sum = sum + arr[i].amount;
    }

    return sum;
}


module.exports = getValuesController;