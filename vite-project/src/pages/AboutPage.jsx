import React from 'react';

import Layout from '../components/layout/Layout';
import About from '../components/about/About';
import TeamSection from '../components/about/Team';

const AboutPage = () => {
    return (
        <Layout>
            <About/>
            <TeamSection/>
        </Layout>
    );
};

export default AboutPage;