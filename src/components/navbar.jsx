import "../index.css"
import { useNavigate } from 'react-router-dom';

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
                    <a className="navbar-brand nav-title" href="/home">Simulation blog</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item px-3 py-2">
                                <a className="nav-link " aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item px-3 py-2">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item px-3 py-2 dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Blogs
                                </a>
                                <ul className="dropdown-menu" >
                                    <li><a className="dropdown-item" href="/blogs">All</a></li>
                                    <li><a className="dropdown-item" href="/blogs">Technology</a></li>
                                    <li><a className="dropdown-item" href="/blogs">Culture</a></li>
                                    <li><a className="dropdown-item" href="/blogs">Human</a></li>
                                    <li><a className="dropdown-item" href="/blogs">Business</a></li>
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
