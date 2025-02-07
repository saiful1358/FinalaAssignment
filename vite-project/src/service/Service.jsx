import React from 'react';
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Build modern, responsive websites and web applications.",
    icon: "https://cdn-icons-png.flaticon.com/128/1828/1828506.png",
    link: "/services/web-development"
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Create stunning Android and iOS applications.",
    icon: "https://cdn-icons-png.flaticon.com/128/833/833472.png",
    link: "/services/mobile-app"
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Design engaging and user-friendly interfaces.",
    icon: "https://cdn-icons-png.flaticon.com/128/1055/1055666.png",
    link: "/services/ui-ux"
  },
  {
    id: 4,
    title: "SEO & Digital Marketing",
    description: "Improve visibility and grow your business online.",
    icon: "https://cdn-icons-png.flaticon.com/128/2991/2991148.png",
    link: "/services/seo-marketing"
  }
];

const ServiceSection = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Our Services</h2>
        <p className="text-center mb-4">
          We offer a wide range of services to help businesses grow and succeed.
        </p>

        <div className="row">
          {services.map((service) => (
            <div key={service.id} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
              <Link to={service.link} className="text-decoration-none">
                <div className="card shadow-sm text-center border-0 p-3 h-100 service-card">
                  <img src={service.icon} alt={service.title} className="service-icon mb-3" />
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text text-muted">{service.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;


