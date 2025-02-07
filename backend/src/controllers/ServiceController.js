const {BrandListService}=require('../service/ServiceServices.js')

exports.ProductBrandList=async(req,res)=>{
    let result=await BrandListService();
    return res.status(200).json(result)
}








