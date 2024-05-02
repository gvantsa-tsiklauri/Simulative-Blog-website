import "../index.css"
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function Navbar() {
    const logOut = () => {
        window.localStorage.clear();
      }
      const navigate = useNavigate();

      const handleWriteNowClick = () => {
        navigate('/addblog');  
      };
    return(
        <>
            <nav className="navbar navbar-expand-lg navigation">
                <div className="container-md">
                    <Link to="/home" className="navbar-brand nav-title">Simulation blog</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item px-3 py-2">
                                <Link to="/home" className="nav-link " aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item px-3 py-2">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item px-3 py-2 dropdown">
                                <Link to="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Blogs
                                </Link>
                                <ul className="dropdown-menu" >
                                    <li><Link to="/blogs" className="dropdown-item">All</Link></li>
                                    <li><Link to="blogs" className="dropdown-item">Technology</Link></li>
                                    <li><Link to="/blogs" className="dropdown-item">Culture</Link></li>
                                    <li><Link to="/blogs" className="dropdown-item">Human</Link></li>
                                    <li><Link to="/blogs" className="dropdown-item">Business</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item px-3 py-2 dropdown">
                                <div className="pfp px-3 py-2 " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"></div>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <h6>Profile settings:</h6>
                                    <p>email: {
                                            localStorage.getItem('email')
                                        } </p>
                                    <button className="navbar-button " onClick={handleWriteNowClick}>Write Now</button>

                                    <button onClick={logOut} className="btn btn-sm btn-danger">Log out</button>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
