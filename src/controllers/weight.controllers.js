const express=require("express");
const router=express.Router()
const Weight=require("../models/weight.model")


router.post("",async(req,res)=>{
    try{
        const weight=await Weight.create(req.body)
        return res.status(200).send(weight)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})

router.get("",async(req,res)=>{
    try{
        const weight=await Weight.find().lean().exec()
        return res.status(200).send(weight)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})

router.patch("/:id",async(req,res)=>{
    try{
        const weight=await Weight.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.status(200).send(weight)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})
router.delete("/:id",async(req,res)=>{
    try{
        const weight=await Weight.findByIdAndDelete(req.params.id)
        return res.status(200).send(weight)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})
module.exports=router;