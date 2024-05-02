import { Link } from "react-router-dom"
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to='/' className="nav-item">Home</Link>
            <input type="text" className="searchbar" placeholder="Search for anything..." />
            <Link to='/jobs' className="nav-item">Jobs</Link>
            <Link to='/businesses' className="nav-item">Businesses</Link>
            <Link to='/auth' className="login-register-button">Login/Register</Link>
        </nav>
    );
}