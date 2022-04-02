const mongoose=require("mongoose")

const weightSchema=mongoose.Schema({
    url:{type:String,required:true},
    ratings:{type:Number,required:true},
    heading:{type:String,required:true},
    price:{type:Number,required:true},
    strikedprice:{type:Number,default:null},
    use:{type:String,required:true},
    ingredients:{type:String,required:true}
},{
    timestamps:true,
    versionKey:false,
})
const Weight =mongoose.model("weight",weightSchema)
module.exports=Weight;