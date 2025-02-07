const {createProductService, getProductsService} = require("../service/ProductService.js");


exports.creatProducts=async (req,res)=>{
    let result=await createProductService(req)
    return res.status(200).json(result)
}

// app.get("/api/products", async (req, res) => {
//     try {
//         const products = await Product.find();
//         res.status(200).json(products);
//     } catch (error) {
//         res.status(500).json({ message: "Error Fetching Products", error });
//     }

exports.getProducts=async (req,res)=>{
    let result=await  getProductsService(req)
    return res.status(200).json(result)
}