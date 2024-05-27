import "./hamburger.css";

const Hamburger = () => {
    return (
        <nav class="menu--left" role="navigation">
    <div class="menuToggle">
      <input type="checkbox"/>
      <span></span>
      <span></span>
      <span></span>
      <ul class="menuItem">
        <li><a href="#">Hem</a></li>
        <li><a href="#">Om oss</a></li>
        <li><a href="#">Meny</a></li>
        <li><a href="#">Kontakt</a></li>
      </ul>
    </div>
  </nav>
    );
}

export default Hamburger;