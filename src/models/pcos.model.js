const mongoose=require("mongoose")

const pcosSchema=mongoose.Schema({
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
const Pcos =mongoose.model("pcos",pcosSchema)
module.exports=Pcos;