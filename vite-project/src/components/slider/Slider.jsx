import React from 'react';


import {Link} from "react-router-dom";
import SliderStore from './../../../store/SliderStore';
import SliderSkeleton from '../../skeleton/SliderSkleton.jsx';

const Slider = () => {

    const { SliderList} = SliderStore();
   

    if (SliderList===null) {
        return <SliderSkeleton/>
    }else{
        return (
            <>
            <div>
                <div id="carouselExampleDark" className="carousel bg-white hero-bg carousel-dark slide">
                    <div className="carousel-indicators">

                        {
                            SliderList.map((item,index)=>{
                                return (

                                    <button key={index} type="button" data-bs-target="#carouselExampleDark"
                                            data-bs-slide-to={index}
                                            className="active"
                                            aria-current="true" aria-label=""></button>

                                )
                            })
                        }


                    </div>
                    <div className="carousel-inner py-5">

                        {
                            SliderList.map((item, index) => {
                                let active="carousel-item"
                                if(index===0){
                                    active="carousel-item active"
                                }
                                return (

                                    <div key={index} className={active} data-bs-interval="10000">
                                        <div className="container ">
                                            <div className="row justify-content-center">
                                                <div className="col-12 col-lg-5 col-sm-12 col-md-5 p-5">
                                                    <h1 className="headline-1">{item['title']}</h1>
                                                    <p>{item['des']}</p>
                                                    <Link to="" className="btn text-white btn-success px-5">Buy
                                                        Now</Link>
                                                </div>
                                                <div className="col-12 col-lg-5 col-sm-12 col-md-5 p-5">
                                                    <img src={item['image']} className="w-100" alt="img"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                )
                            })
                        }


                    </div>
                    <button className="carousel-control-prev btn rounded-5" type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next btn" type="button" data-bs-target="#carouselExampleDark"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>


            </>
        );
    }
};

export default Slider;