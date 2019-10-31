const mongoose = require('mongoose')
const Schema = mongoose.Schema

CategroySubSchema = new Schema({
    ID:{unique:true,type:String},
    MALL_CATEGORY_ID:Number,
    MALL_SUB_NAME:String,
    SORT:Number
})

mongoose.model('CategroySub',CategroySubSchema)