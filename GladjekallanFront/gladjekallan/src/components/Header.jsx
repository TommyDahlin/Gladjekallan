import Hamburger from "./hamburger/hamburger";

import "./header.css"


const Header = () => {
    return (
        <div className="header-container">
        <Hamburger />
        <div className="header-title">
        <h1>Gladjekällan</h1>
        </div>
        </div>
    );
}
export default Header;