import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from "axios";


export const FinancialOverview = () => {

    const email= localStorage.getItem("email");

    const assetDefaultValues = {
        title: "",
        amount: "",
        date: "",
        email: "",
    }


    const incomeDefaultValues = {
        title: "",
        amount: "",
        date: "",
        email: "",
    }

    const expenseDefaultValues = {
        title: "",
        amount: "",
        date: "",
        email: "",
    }

    const [incomeData, setIncomeData] = useState(incomeDefaultValues);
    const [expenseData, setExpenseData] = useState(expenseDefaultValues);
    const [liabilityData, setLiabilityData] = useState(expenseDefaultValues);
    const [assetData, setAssetData] = useState(assetDefaultValues);


    function onIncomeChange(e) {
        setIncomeData({ ...incomeData, [e.target.name]: e.target.value });
    }

    function onExpenseChange(e) {
        setExpenseData({ ...expenseData, [e.target.name]: e.target.value });
    }

    function onLiabilityChange(e) {
        setLiabilityData({ ...liabilityData, [e.target.name]: e.target.value });
    }

    function onAssetChange(e) {
        setAssetData({ ...assetData, [e.target.name]: e.target.value });

    }

    async function saveIncome() {
        incomeData.email = email

        try {
            const config = {
                headers: {
                    "content-type": "application/json"
                }
            }
            const response = await axios.post("http://localhost:5000/add-income", { data: incomeData }, config);
            window.alert(response.data.message)
        } catch (error) {

            window.alert(error.response.data.message)
        }

    }

    async function saveExpense(){
        expenseData.email=email
        console.log(expenseData);
        try {
            const config = {
                headers: {
                    "content-type": "application/json"
                }
            }
            const response = await axios.post("http://localhost:5000/add-expense", { data: expenseData }, config);
            window.alert(response.data.message)
        } catch (error) {

            window.alert(error.response.data.message)
        }

    }
        async function saveLiability(){
            liabilityData.email=email
            console.log(liabilityData);
            try {
                const config = {
                    headers: {
                        "content-type": "application/json"
                    }
                }
                const response = await axios.post("http://localhost:5000/add-liability", { data: liabilityData }, config);
                window.alert(response.data.message)
            } catch (error) {
    
                window.alert(error.response.data.message)
            }
    

    }


    async function saveAsset(){
        assetData.email=email
        console.log(assetData);
        try {
            const config = {
                headers: {
                    "content-type": "application/json"
                }
            }
            const response = await axios.post("http://localhost:5000/add-asset", { data: assetData }, config);
            window.alert(response.data.message)
        } catch (error) {

            window.alert(error.response.data.message)
        }


}


    return (
        <div className=" financial-overview" >

            {/* Income */}
            <div className="bg-white m-8 flex flex-col gap-2 px-8 py-8 rounded-lg form-container" >
                <h1 className='text-2xl md:text-3xl font-medium mb-4' >Income</h1>
                <TextField id="outlined-basic" onChange={(e) => {
                    onIncomeChange(e);
                }} name="title" label="Title" variant="outlined" />
                <TextField id="outlined-basic" onChange={(e) => {
                    onIncomeChange(e);
                }} name="amount" label="Amount in Rs" type='number' prefix='Rs' variant="outlined" />
                <TextField id="outlined-basic" onChange={(e) => {
                    onIncomeChange(e);
                }} name="date" type='date' variant="outlined" />
                <Button onClick={saveIncome} sx={{
                    marginTop: "10px"
                }} variant='contained'>Save</Button>

            </div>
            {/* Asset */}
            <div className="bg-white m-8 flex flex-col gap-2  px-6  py-8  rounded-lg form-container" >
                <h1 className='text-2xl md:text-3xl font-medium mb-4' >Assets</h1>
                <TextField id="outlined-basic" onChange={(e) => {
                    onAssetChange(e)
                }} label="Title" name="title" variant="outlined" />
                <TextField id="outlined-basic" onChange={(e) => {
                    onAssetChange(e)
                }} label="Amount in Rs" name="amount" type='number' variant="outlined" />
                <TextField id="outlined-basic" onChange={(e) => {
                    onAssetChange(e)
                }} type='date' name="date" variant="outlined" />
                <Button onClick={saveAsset} sx={{
                    marginTop: "10px"
                }} variant='contained'>Save</Button>
            </div>
            {/* Expenses */}
            <div className="bg-white m-8 flex flex-col gap-2  px-6  py-8  rounded-lg form-container" >
                <h1 className='text-2xl md:text-3xl font-medium mb-4' >Expenses</h1>
                <TextField id="outlined-basic" onChange={(e) => {
                    onExpenseChange(e)
                }} label="Title" name="title" variant="outlined" />
                <TextField id="outlined-basic" onChange={(e) => {
                    onExpenseChange(e)
                }} label="Amount in Rs" name="amount" type='number' variant="outlined" />
                <TextField id="outlined-basic" onChange={(e) => {
                    onExpenseChange(e)
                }} type='date' name="date" variant="outlined" />
                <Button onClick={saveExpense} sx={{
                    marginTop: "10px"
                }} variant='contained'>Save</Button>
            </div>
            {/* Liabilities */}
            <div className="bg-white m-8 flex flex-col gap-2  px-6  py-8  rounded-lg form-container" >
                <h1 className='text-2xl md:text-3xl font-medium mb-4' >Liabilities</h1>
                <TextField id="outlined-basic" onChange={(e) => {
                    onLiabilityChange(e)
                }} label="Title" name="title" variant="outlined" />
                <TextField id="outlined-basic" onChange={(e) => {
                    onLiabilityChange(e)
                }} label="Amount in Rs" name="amount" type='number' variant="outlined" />
                <TextField id="outlined-basic" onChange={(e) => {
                    onLiabilityChange(e)
                }} type='date' name="date" variant="outlined" />
                <Button onClick={saveLiability} sx={{
                    marginTop: "10px"
                }} variant='contained'>Save</Button>
            </div>
        </div>
    )
}