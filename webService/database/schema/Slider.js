const mongoose = require('mongoose')
const Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
const SliderSchema = new Schema({
    id:ObjectId,
    image:String,
    goodsId:String,
})

mongoose.model('Slider',SliderSchema)