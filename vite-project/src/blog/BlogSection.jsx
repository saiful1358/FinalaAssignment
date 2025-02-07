import React from "react";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "The Future of Web Development",
    description: "Discover the latest trends and technologies shaping the future of web development.",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*lXVK7KYpfH3YfYCWNYpXbw.jpeg",
    link: "/blogs/web-development"
  },
  {
    id: 2,
    title: "Mastering UI/UX Design",
    description: "Learn how to create visually stunning and user-friendly designs.",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*lXVK7KYpfH3YfYCWNYpXbw.jpeg",
    link: "/blogs/ui-ux"
  },
  {
    id: 3,
    title: "SEO Strategies for 2025",
    description: "Boost your website traffic with these proven SEO techniques.",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*lXVK7KYpfH3YfYCWNYpXbw.jpeg",
    link: "/blogs/seo-strategies"
  },

  {
    id: 1,
    title: "The Future of Web Development",
    description: "Discover the latest trends and technologies shaping the future of web development.",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*lXVK7KYpfH3YfYCWNYpXbw.jpeg",
    link: "/blogs/web-development"
  },
  {
    id: 2,
    title: "Mastering UI/UX Design",
    description: "Learn how to create visually stunning and user-friendly designs.",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*lXVK7KYpfH3YfYCWNYpXbw.jpeg",
    link: "/blogs/ui-ux"
  },
  {
    id: 3,
    title: "SEO Strategies for 2025",
    description: "Boost your website traffic with these proven SEO techniques.",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*lXVK7KYpfH3YfYCWNYpXbw.jpeg",
    link: "/blogs/seo-strategies"
  }
];

const BlogSection = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Latest Blog Posts</h2>
        <p className="text-center mb-4">
          Stay updated with the latest insights in web development, UI/UX design, and digital marketing.
        </p>

        <div className="row">
          {blogs.map((blog) => (
            <div key={blog.id} className="col-lg-4 col-md-6 col-12 mb-4 ">
              <div className="card shadow-sm border-0 blog-card w-100 h-100">
                <img src={blog.image} alt={blog.title} className="card-img-top " />
                <div className="card-body">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text text-muted">{blog.description}</p>
                  <Link to={blog.link} className="btn btn-primary btn-sm">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
