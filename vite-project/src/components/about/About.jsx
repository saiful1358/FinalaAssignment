import React from "react";
import aboutImg from "../assets/img/about.jpg"


const About = () => {
    return (
        <section className="about-section py-5" style={{ backgroundColor: "#f8f9fa" }}>
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Column - Description */}
                    <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                        <h2 className="text-success fw-bold">About Our Company</h2>
                        <p className="text-muted">
                            We are a leading software development firm specializing in 
                            MERN stack solutions. Our expertise includes inventory 
                            management systems designed for stock management and 
                            import businesses. Our goal is to provide scalable, 
                            high-performance applications to streamline business 
                            operations.
                        </p>
                        <p className="text-muted">
                            With a team of experienced developers and a client-first 
                            approach, we ensure that our solutions are tailored to meet 
                            the specific needs of businesses. Join us on this journey 
                            to revolutionize the way inventory is managed!
                        </p>
                    </div>

                    {/* Right Column - Image */}
                    <div className="col-lg-6 col-md-12 text-center">
                        <img 
                            src={aboutImg}
                            alt="About Us" 
                            className="img-fluid rounded shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
