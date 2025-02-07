
const ProductSliderModel=require('../model/SliderModel')

const mongoose =require('mongoose');

const ObjectId=mongoose.Types.ObjectId;


const BrandListService = async () => {
        try {
           let data= await ProductSliderModel.find();
           return {status:"success",data:data}
        }
        catch (e) {
            return {status:"fail",data:e}.toString()
        }
}













module.exports={
    
    BrandListService
    
}