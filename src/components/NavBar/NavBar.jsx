import "./NavBar.css";
import { Link } from "react-router-dom";
function NavBar() {
    return (
        <nav>
            <ul className="navbar">
                <li class="nav-item"><Link to="/">Home</Link></li>
                <li class="nav-item"><Link to="/about">About</Link></li>
                {/* <li class="nav-item"><a  href="">Project</a></li>
                <li class="nav-item"><a  href="">Resume</a></li> */}
            </ul>
        </nav>
    )
}

export default NavBar;