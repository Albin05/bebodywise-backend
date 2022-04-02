const express=require("express");
const router=express.Router()
const Hair=require("../models/hair.model")


router.post("",async(req,res)=>{
    try{
        const hair=await Hair.create(req.body)
        return res.status(200).send(hair)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})

router.get("",async(req,res)=>{
    try{
        const hair=await Hair.find().lean().exec()
        return res.status(200).send(hair)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})

router.patch("/:id",async(req,res)=>{
    try{
        const hair=await Hair.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.status(200).send(hair)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})
router.delete("/:id",async(req,res)=>{
    try{
        const hair=await Hair.findByIdAndDelete(req.params.id)
        return res.status(200).send(hair)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})
module.exports=router;