const { addAsset, deleteAsset, getAssets } = require('../controllers/asset');
const { addExpense, getExpenses, deleteExpense } = require('../controllers/expense');
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income');
const { addLiability, getLiabilities, deleteLiability } = require('../controllers/liability');

const router = require('express').Router();


router.post('/add-income', addIncome)
router.get('/get-incomes', getIncomes)
router.delete('/delete-income/:id', deleteIncome)
router.post('/add-expense', addExpense)
router.get('/get-expenses', getExpenses)
router.delete('/delete-expense/:id', deleteExpense)
router.post('/add-asset',addAsset)
router.get('/get-assets',getAssets)
router.delete('/delete-asset/:id',deleteAsset)
router.post('/add-liability',addLiability)
router.get('/get-liabilities',getLiabilities)
router.delete('/delete-liability/:id',deleteLiability)



module.exports = router