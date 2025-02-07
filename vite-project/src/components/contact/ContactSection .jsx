import React from "react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <section className="contact-section py-5">
            <div className="container">
                <div className="row">
                    
                    {/* Left Column - Contact Form */}
                    <div className="col-lg-6 col-md-12 bg-light p-4 rounded">
                        <h2 className="text-success fw-bold mb-4">Get in Touch</h2>
                        
                        <form>
                            <div className="mb-3">
                                <label className="form-label"><FaUser className="me-2" /> Name</label>
                                <input type="text" className="form-control" placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label"><FaEnvelope className="me-2" /> Email</label>
                                <input type="email" className="form-control" placeholder="Enter your email" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label"><FaPhone className="me-2" /> Phone</label>
                                <input type="text" className="form-control" placeholder="Enter your phone number" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label"><FaMapMarkerAlt className="me-2" /> Message</label>
                                <textarea className="form-control" rows="4" placeholder="Your message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-success w-100">Send Message</button>
                        </form>
                    </div>

                    {/* Right Column - Google Map */}
                    <div className="col-lg-6 col-md-12 mt-4 mt-lg-0">
                        <div className="map-container rounded shadow">
                            <iframe
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24183.79980701908!2d-74.01344890809844!3d40.71277544372681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316c351953%3A0x9f4848b9efc5f082!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1619152548337!5m2!1sen!2sus"
                                width="100%"
                                height="350"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Contact;
