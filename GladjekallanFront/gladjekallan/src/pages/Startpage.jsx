import "./Startpage.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Familytransparent from "../assets/family-transparent.png";
const Startpage = () => {
    return (
        <>
        <Header />
        <div className="startpage-container">
        <h1>Välkommen till Glädjekällans Foodtruck</h1>
        
        <img src={Familytransparent} alt="family" className="family-image"></img>
        <p><br/>Vi är en familjeägd foodtruck som serverar mat med kärlek och glädje.<br/>Vi finns i Göteborg och tar oss gärna till erat event för att tillhandahålla era matbehov.<br/>Håll utkik på vår hemsida för att se var vi befinner oss just nu!</p>
        </div>
        <Footer />
        </>
    )
}
export default Startpage;