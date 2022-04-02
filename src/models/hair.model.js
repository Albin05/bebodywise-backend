const mongoose=require("mongoose")

const hairSchema=mongoose.Schema({
    url:{type:String,required:true},
    ratings:{type:Number,required:true},
    heading:{type:String,required:true},
    price:{type:Number,required:true},
    strikedprice:{type:Number,required:true,default: null},
    use:{type:String,required:true},
    ingredients:{type:String,required:true}
})
const Hair =mongoose.model("hair",hairSchema)
module.exports=Hair;