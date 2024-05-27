import Hamburger from "./hamburger/hamburger";

import "./header.css"


const Header = () => {
    return (
        <div className="header-container">
            <Hamburger />
        <h1>Gladjekällan</h1>
        </div>
    );
}
export default Header;