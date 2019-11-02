const mongoose = require('mongoose')
const Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
const RecommendSchema = new Schema({
    id:ObjectId,
    mallPrice:Number,
    image:String,
    goodsId:String,
    price:Number ,
    goodsName:String,
})

mongoose.model('Recommend',RecommendSchema)