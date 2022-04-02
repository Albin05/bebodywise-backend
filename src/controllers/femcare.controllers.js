const express=require("express");
const router=express.Router()
const Femcare=require("../models/femcare.model")


router.post("",async(req,res)=>{
    try{
        const femcare=await Femcare.create(req.body)
        return res.status(200).send(femcare)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})

router.get("",async(req,res)=>{
    try{
        const femcare=await Femcare.find().lean().exec()
        return res.status(200).send(femcare)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})

router.patch("/:id",async(req,res)=>{
    try{
        const femcare=await Femcare.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        return res.status(200).send(femcare)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})
router.delete("/:id",async(req,res)=>{
    try{
        const femcare=await Femcare.findByIdAndDelete(req.params.id).lean().exec()
        return res.status(200).send(femcare)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})
module.exports=router;