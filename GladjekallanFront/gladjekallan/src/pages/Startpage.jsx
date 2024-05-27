import "./Startpage.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Startpage = () => {
    return (
        <>
        <Header />
        <div className="startpage-container">
        <h1>Välkommen till Glädjekällan</h1>
        <p>Vi är en foodtruck som serverar mat med kärlek och glädje.<br/>Vi finns i Göteborg och kör gärna till erat event för att tillhandahålla era matbehov.<br/>Håll utkik på vår hemsida för att se var vi befinner oss just nu!</p>
        </div>
        <Footer />
        </>
    )
}
export default Startpage;