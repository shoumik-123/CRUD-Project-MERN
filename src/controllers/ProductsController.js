const ProductsModel = require('../models/ProductsModel');


//Create

exports.CreateProduct =(req,res)=>{
    let reqBody = req.body;

    ProductsModel.create(reqBody)
        .then((result) => {
            res.status(200).json({status: "Success", data: result})
        })
        .catch((err) => {
            res.status(400).json({status: "Fail", data: err})
        })
}


//Read


exports.ReadProduct =(req,res)=>{
    ProductsModel.find()
        .then((data)=>{
            res.status(200).json({status: "Success", data: data})
        })
        .catch((err)=>{
            res.status(400).json({status: "Fail", data: err})
        });
}
exports.ReadProductByID =(req,res)=>{

    let id =req.params.id;
    let Query = {_id:id}
    ProductsModel.find(Query)
        .then((data)=>{
            res.status(200).json({status: "Success", data: data})
        })
        .catch((err)=>{
            res.status(400).json({status: "Fail", data: err})
        });
}



//Update
exports.UpdateProduct =(req, res)=>{
    let id =req.params.id;
    let Query = {_id:id}
    let reqBody = req.body;
    ProductsModel.updateOne(Query,reqBody)
        .then((data)=>{
            res.status(200).json({status: "Updated", data: data})
        })
        .catch((err)=>{
            res.status(400).json({status: "Fail", data: err})
        });
}


//Delete
exports.DeleteProduct =(req, res)=>{

    let id =req.params.id;
    let Query = {_id:id}

    ProductsModel.deleteOne(Query)
        .then((data)=>{
            res.status(200).json({status: "Deleted", data: data})
        })
        .catch((err)=>{
            res.status(400).json({status: "Fail", data: err})
        });
}



















