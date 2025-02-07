
const ProductModel=require("../model/ProductModel.js")




const createProductService = async (req) => {
     try {
        let reqBody=req.body;

        let data= await ProductModel.create(reqBody);
        return {status:"true", data:data, message:"Poduct Create Sucess"}

     }catch (e) {
         return {status:"fail", message:e}
     }
}

const getProductsService = async (req) => {
    try {
        let data = await ProductModel.find(); // Fetch all products
        return { status: "success", data: data };
    } catch (e) {
        return { status: "fail", message: e.message };
    }
};



module.exports={
    createProductService,
    getProductsService
   
}

