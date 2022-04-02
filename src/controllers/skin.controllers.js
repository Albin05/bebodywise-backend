const express=require("express");
const router=express.Router()
const Skin=require("../models/skin.model")


router.post("",async(req,res)=>{
    try{
        const skin=await Skin.create(req.body)
        return res.status(200).send(skin)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})

router.get("",async(req,res)=>{
    try{
        const skin=await Skin.find().lean().exec()
        return res.status(200).send(skin)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})

module.exports=router;