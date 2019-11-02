const mongoose = require('mongoose')
const Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
const FloorSchema = new Schema({
    id:ObjectId,
    image:String,
    goodsId:String,
})

mongoose.model('FloorTwo',FloorSchema)