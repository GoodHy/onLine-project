const mongoose = require('mongoose')
const Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
const CategroyMain = new Schema({
    id:ObjectId,
    mallCategoryId:String,
    mallCategoryName:String,
    bxMallSubDto:Array,
    image:String,
    comments:String
})

mongoose.model('CategroyMain',CategroyMain)