const mongoose = require('mongoose')
const Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
const HotGoodSchema = new Schema({
    id:ObjectId,
    mallPrice:Number,
    image:String,
    goodsId:String,
    price:Number ,
    name:String,
})

mongoose.model('HotGood',HotGoodSchema)