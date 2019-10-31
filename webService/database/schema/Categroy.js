const mongoose = require('mongoose')
const Schema = mongoose.Schema

CategroySchema = new Schema({
    ID:{unique:true,type:String},
    MALL_CATEGORY_NAME:String,
    IMAGE:String, 
    TYPE:Number,
    SORT:Number
})

mongoose.model('Categroy',CategroySchema)