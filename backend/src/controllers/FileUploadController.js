//  const fileupload=(req, res) =>{
//     try {
//         if(req.files.length>0){
//             return res.status(200).json({status: true,file: req.files, msg: "File Upload sucessful"})
//         }else{
//             return res.status(200).json({status: false, msg: "NO File Upload "})
//         }
//     } catch (error) {
//         return ({status: false, error:error})
//     }
// }

// module.exports = fileupload;