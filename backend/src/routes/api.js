const express=require('express');
const UserController=require('../controllers/UserControllers.js')
const SliderContrller=require('../controllers/SliderController.js')
const ServiceController=require('../controllers/ServiceController.js')

const ProductController=require('../controllers/ProductController.js')
const fileupload=require('../controllers/FileUploadController.js')


const AuthVerification=require('../middleware/AuthVerification.js');
const {  upload } = require('../middleware/fileUploads.js');


const router=express.Router();




// User
router.get('/UserOTP/:email',UserController.UserOTP)
router.get('/VerifyLogin/:email/:otp',UserController.VerifyLogin)
router.get('/UserLogout',AuthVerification,UserController.UserLogout)
// router.post('/CreateProfile',AuthVerification,UserController.CreateProfile)
// router.post('/UpdateProfile',AuthVerification,UserController.UpdateProfile)
// router.get('/ReadProfile',AuthVerification,UserController.ReadProfile)

router.get('/ProductSliderList',SliderContrller.ProductSliderList)
router.get('/ProductBrandList',ServiceController.ProductBrandList)

router.post('/creatProducts',ProductController.creatProducts)
router.get('/getProducts',ProductController.getProducts)
// router.post("/file-uplod", upload.array("file", 20), FileUploadController.fileupload)





















module.exports=router;