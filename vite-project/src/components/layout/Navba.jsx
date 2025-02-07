
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import UserStore from '../../../store/UserStore';
import UserSubmitButton from '../user/UserSubmibutton';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);


  const navigate = useNavigate();

   
    const {isLogin,UserLogoutRequest}=UserStore();
    const onLogout=async () => {
        await UserLogoutRequest();
        sessionStorage.clear();
        localStorage.clear();
        navigate("/");
    }





  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
      <div className="container">
        <a className="navbar-brand" href="#">EquationIT</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link" href="#">Home</Link>
            </li>
            <li className="nav-item">
              <Link to={"/about"} className="nav-link" href="#">About</Link>
            </li>
            <li className="nav-item">
              <Link to={"/blog"} className="nav-link" href="#">Blog</Link>
            </li>
            <li className="nav-item">
              <Link to={"/services"} className="nav-link" href="#">Services</Link>
            </li>
            <li className="nav-item">
              <Link to={"/contact"} className="nav-link" href="#">Contact</Link>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-success"><Link to={"/dashboard"} className="nav-link" href="#">Dashboard</Link></button>
            </li>
            {
                            isLogin()?(

                                <>
                                    <UserSubmitButton onClick={onLogout} text="Logout" className="btn ms-3 btn-success d-flex"/>
                                    
                                </>
                            ):(
                                <>
                                    <Link type="button" className="btn ms-3 btn-success d-flex" to="/">Login</Link>
                                </>
                            )
                        }
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
