const {SliderListService}=require('../service/SliderService')





exports.ProductSliderList=async(req,res)=>{
    let result=await SliderListService();
    return res.status(200).json(result)
}
























