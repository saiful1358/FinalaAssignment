import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import ProductSkeleton from '../../skeleton/ProrductSkeleton';
import useProductStore from '../../../store/ProductStore';

const Product = () => {
    const { BrandList, BrandListRequest } = useProductStore(); // ✅ Get the function

    useEffect(() => {
        BrandListRequest(); // ✅ Fetch brands when component mounts
    }, []);

    console.log(BrandList);

    if (!BrandList || BrandList.length === 0) {
        return <ProductSkeleton />;
    }

    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <h1 className="headline-4 text-center my-2 p-0">Top Products</h1>
                    <span className="bodySmal mb-5 text-center">
                        Explore a World of Choices Across Our Most Popular <br />
                        Shopping Categories
                    </span>

                    {BrandList.map((item, i) => (
                        <div key={i} className="col-6 col-lg-4 col-md-4 p-2">
                            <Link to={`/by-brand/${item['_id']}`} className="card h-100 rounded-3 bg-white">
                                <div className="card-body text-center">
                                    <img alt="img" className="w-75" src={item['brandImg']} />
                                    <p className="bodySmal mt-3">{item['brandName']}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Product;



