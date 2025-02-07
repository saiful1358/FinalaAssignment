import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="bg-dark text-white pt-4">
      <div className="container text-center text-md-start">
        <div className="row">
          {/* Column 1 - About */}
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>We provide the best solutions for your business. Contact us for more details.</p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">


              <li><Link to={"/home"} href="#" className="text-white text-decoration-none">Home</Link></li>
              <li><Link to={"/about"} href="#" className="text-white text-decoration-none">About</Link></li>
              <li><Link to={"/blog"} href="#" className="text-white text-decoration-none">Blog</Link></li>
              <li><Link to={"/services"} href="#" className="text-white text-decoration-none">Services</Link></li>
              <li><Link to={"/contact"} href="#" className="text-white text-decoration-none">Contact</Link></li>



               
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: saifuddinmahmud74@gmail.com</p>
            <p>Phone: +880 1812 338914</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center py-3 border-top mt-3">
          <p className="mb-0">&copy; {new Date().getFullYear()} EquationIT. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
