// import React, { useEffect, useState } from "react";

// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
// import { BrowserRouter } from 'react-router-dom';

// const Dashboard = () => {

// let [data, setData]=useState( {"productSl":"","productName":"","productPrice":"","productDescription":"","img":""});

// console.log(data)
  

//   return (
//     <>
//      <div>
//             <h1 className="bg-black text-white text-center p-5 ">Welcome To EquationIT Dashboard</h1>
//     </div>
//     <div className="container-fluid">
       
//         <div>
//             <Tabs>
//                 <TabList>
//                     <Tab>Add Product</Tab>
//                     <Tab>All Product </Tab>
//                 </TabList>

//                 <TabPanel>
//                     <h2>Add New Product</h2>
//                     <div className=" row">
//                         <div className="col-3">
//                         <label htmlFor="" className="">Product SL</label><br />
//                         <input onChange={(e) => setData({...data,productSl: e.target.value})} type="text"  placeholder="Enter Product SL"/>
//                         </div>
//                         <div className="col-3">
//                         <label htmlFor="" className="">Product Name</label><br />
//                         <input
//                         onChange={(e) => setData({...data,productName: e.target.value})}
//                          type="text"  placeholder="Enter Product Name"/>
//                         </div>
//                         <div className="col-3">
//                         <label className=" text-[14px] font-bold" htmlFor="">Product Price</label><br />
//                         <input
//                         onChange={(e) => setData({...data,productPrice: e.target.value})}
//                          type="text"  placeholder="Enter Product Price"/>
//                         </div>
//                         <div className="col-3">
//                         <label htmlFor="">Product Descrition</label><br />
//                         <input
//                         onChange={(e) => setData({...data,productDescription: e.target.value})}
//                          type="text"  placeholder="Enter Product Descrition"/>
//                         </div>
                        
                  
                    
//                     </div>
//                     <div className="col-4 my-3 ">
//                         <button type="submit" class="btn btn-primary">Add Product</button>
//                     </div>
//                 </TabPanel>
//                 <TabPanel>
//                     <h2>Any content 2</h2>
//                 </TabPanel>
//             </Tabs>


//         </div>


//     </div>

// </>  
//   );
// };

// export default Dashboard;


import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import ProductStore from './../../store/ProductStore';// Import global state

const Dashboard = () => {
    const { products = [], fetchProducts, addProduct } = ProductStore(); 


   
    const [formData, setFormData] = useState({
        productSl: "",
        productName: "",
        productPrice: "",
        productDescription: ""
    });

    useEffect(() => {
        fetchProducts();
       
    }, []);
 

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addProduct(formData);
        setFormData({ productSl: "", productName: "", productPrice: "", productDescription: "" });
    };

    return (
        <>
            <div>
                <h1 className="bg-black text-white text-center p-5">Welcome To EquationIT Dashboard</h1>
            </div>
            <div className="container-fluid">
                <Tabs>
                    <TabList>
                        <Tab>Add Product</Tab>
                        <Tab>All Products</Tab>
                    </TabList>

                    {/* Add Product Tab */}
                    <TabPanel>
                        <h2>Add New Product</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-3">
                                    <label>Product SL</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Product SL"
                                        value={formData.productSl}
                                        onChange={(e) => setFormData({ ...formData, productSl: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="col-3">
                                    <label>Product Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Product Name"
                                        value={formData.productName}
                                        onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="col-3">
                                    <label>Product Price</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Product Price"
                                        value={formData.productPrice}
                                        onChange={(e) => setFormData({ ...formData, productPrice: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="col-3">
                                    <label>Product Description</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Product Description"
                                        value={formData.productDescription}
                                        onChange={(e) => setFormData({ ...formData, productDescription: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-4 my-3">
                                <button type="submit" className="btn btn-primary">Add Product</button>
                            </div>
                        </form>
                    </TabPanel>

                    {/* All Products Tab */}
                    <TabPanel>
                        <h2>All Products</h2>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>SL</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.length > 0 ? (
                                    products.map((product, index) => (
                                        <tr key={index}>
                                            <td>{product.productSl}</td>
                                            <td>{product.productName}</td>
                                            <td>{product.productPrice}</td>
                                            <td>{product.productDescription}</td>
                                        </tr>
        ))
    ) : (
        <tr>
            <td colSpan="4" className="text-center">No products available</td>
        </tr>
    )}
</tbody>

                        </table>
                    </TabPanel>
                </Tabs>
            </div>
        </>
    );
};

export default Dashboard;


