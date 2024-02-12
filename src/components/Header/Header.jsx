import { Link } from "react-router-dom";
import './Header.css';
const Header = () => {
    return(
        <div className="header-container">
            <Link className="nav-item" to="/">Home</Link>
            <Link className="nav-item" to='/cart'>Cart</Link>
        </div>
    )
}

export default Header;