const { default: mongoose } = require("mongoose")
const Asset = require("../models/assetModel.JS")

exports.addAsset = async (req, res) => {


    console.log("api called");
    const {title, amount, date,email}  = req.body.data

    try {
        //validations
        if(!title || !amount || !date || !email){
            return res.status(400).json({message: 'All fields are required!'})
        }
        else{
            const asset = await Asset.create({
                email,title,amount,date
            }) 
        await asset.save()
        res.status(200).json({message: 'Asset Added'})
        }
    } catch (error) {
        console.log(`error ${error}`);
        res.status(500).json({message: 'Server Error'})
    }

}

exports.getAssets = async (req, res) =>{
    const email = req.query.email;
    try {
        const assets = await Asset.find({email}).sort({createdAt: -1})
        res.status(200).json(assets)
    } catch (error) {
        console.log(`error ${error}`);
        res.status(500).json({message: 'Server Error'})
    }
}

exports.deleteAsset = async (req, res) =>{
    const {id} = req.params;
    Asset.findByIdAndDelete(id)
        .then((asset) =>{
            res.status(200).json({message: 'Asset Deleted'})
        })
        .catch((err) =>{
            console.log(`error ${err}`);
            res.status(500).json({message: 'Server Error'})
        })
}