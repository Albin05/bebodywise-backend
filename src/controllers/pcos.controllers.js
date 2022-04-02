const express=require("express");
const router=express.Router()
const PCOS=require("../models/pcos.model")


router.post("",async(req,res)=>{
    try{
        const pcos=await PCOS.create(req.body)
        return res.status(200).send(pcos)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})

router.get("",async(req,res)=>{
    try{
        const pcos=await PCOS.find().lean().exec()
        return res.status(200).send(pcos)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})

router.patch("/:id",async(req,res)=>{
    try{
        const pcos=await PCOS.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.status(200).send(pcos)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})
router.delete("/:id",async(req,res)=>{
    try{
        const pcos=await PCOS.findByIdAndDelete(req.params.id)
        return res.status(200).send(pcos)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})
module.exports=router;