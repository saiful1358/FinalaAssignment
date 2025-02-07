const mongoose=require('mongoose');
const DataSchema=mongoose.Schema({

        productSl:{type:String,required:true},
        productName:{type:String,required:true},
        productPrice:{type:String,required:true},
        productDescription:{type:String,required:true},
        

      

    },
    {timestamps:true,versionKey:false}
)
const ProductrModel=mongoose.model('ProductrModel',DataSchema)

module.exports=ProductrModel