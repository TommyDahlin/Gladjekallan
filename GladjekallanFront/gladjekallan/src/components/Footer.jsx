import "./footer.css"
import { Link } from "react-router-dom";
const Footer = () => {
    return (
    <div className="footer-container">
        <p>© 2024 Glädjekällans foodtruck</p>
        <nav className="link-container">
        <Link to ="/"><p>Hem</p></Link>
        <Link to ="/om"><p>Om oss</p></Link>
        <Link to ="/meny"><p>Meny</p></Link>
        <Link to ="/kontakt"><p>Kontakt</p></Link>
        </nav>
    </div>
    );
}

export default Footer;