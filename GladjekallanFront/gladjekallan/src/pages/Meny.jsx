import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Meny.css";
const Meny = () => {
    return (
        <>
            <Header/>
            <div className="meny-container">
            <h1 className="MENU">Meny</h1>
            <div className="hamburger-container">
            <div className="menu-title">Hamburgare </div>
            <ul className="menu-list">
                <li className="menu-item">
            <div className="menu-name">Politikern</div>
            <div className="menu-description">En klassisk hamburgare med ost, sallad, tomat, lök och dressing</div>
                </li>
            </ul>
            </div>
            </div>
            <Footer/>
        </>
    );
}

export default Meny;