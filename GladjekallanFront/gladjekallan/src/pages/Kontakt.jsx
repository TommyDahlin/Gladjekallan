import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Kontakt.css";
const Kontakt = () => {
    return (
        <>
        <Header/>
        <div className="contact-container">
            <h1>Kontakt</h1>
            <p>Glädjekällans foodtruck Kontakt:</p>
            <p>Telefon: 0735028351</p>
            <p>Email: niclas@slakthusetskottbod.se</p>
            <p><br/>Vi får vårat kött från Slakthusets Köttbod i Olskroken.</p>
            <p>Telefon: 0735141011</p>
            <p>Borgaregatan 19, 416 66 Göteborg </p>
            <p><br/>Öppettider: 
                <br/>Måndag-Fredag: 9-18 
                <br/> Lördag: 9-14 
                <br/> Söndag: Stängt
                <br/>
            </p>
        </div>
            <Footer/>
        </>
        )
}

export default Kontakt;