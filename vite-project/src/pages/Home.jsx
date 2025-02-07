import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Slider from '../components/slider/Slider';
import About from '../components/about/About';

import Contact from '../components/contact/ContactSection ';

import ServiceSection from './../service/Service';
import BlogSection from '../blog/BlogSection';
import SliderStore from '../../store/SliderStore';

import useProductStore from '../../store/ProductStore';
import Product from '../components/Product/Product';





const Home = () => {

    const { SliderListRequest } = SliderStore();
    const {BrandListRequest}=useProductStore;

    useEffect(() => {
        (async () => {
            await SliderListRequest();
            await BrandListRequest ();
        })();
    }, []);



    return (
        <Layout>
            <Slider/>
           
            <About/>
            <BlogSection/>
            <ServiceSection/>
           
          <Product/>
          <Contact/>
        </Layout>
    );
};

export default Home;