const mongoose= require('mongoose')
const DataSchema = mongoose.Schema({
    ProductName :{type:String},
    ProductCode :{type:String},
    Img :{type:String},
    UnitPrice :{type:String},
    Quantity :{type:String},
    TotalPrice :{type:String},
    CreateDate:{type:Date , default:Date.now()}
},{versionKey:false})


const ProductsModel = mongoose.model('products', DataSchema)

module.exports = ProductsModel;