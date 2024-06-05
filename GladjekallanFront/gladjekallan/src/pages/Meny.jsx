import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Meny.css";
const Meny = () => {
    return (
        <>
            <Header/>
            <h1 className="MENY">Meny</h1>
            <h2> Alla Burgare & Korv kan tillagas med glutenfritt bröd!</h2>
            
            <div className="meny-container">
            
            <div className="meny-part">
            <div className="meny-title">Hamburgare </div>
            <div className="hamburger-container">
            
            <ul className="meny-list">
            
            <div className="meny-type">
            <li className="meny-item">
            <div className="meny-name">Högrevs burger meny</div>
            <div className="meny-description">Burgare, pommes, dryck</div>
            <div className="meny-price"> 110kr</div>
                </li>

                <li className="meny-item">
            <div className="meny-name">Halloumi burger meny</div>
            <div className="meny-description">Burgare, pommes, dryck</div>
            <div className="meny-price"> 110kr</div>
                </li>
                
                <li className="meny-item">
            <div className="meny-name">Högrevs burgare med bröd</div>
            <div className="meny-price"> 90kr</div>
            
                </li>

                <li className="meny-item">
            <div className="meny-name">Halloumi burgare med bröd</div>
            <div className="meny-description">Friterad halloumi</div>
            <div className="meny-price"> 90kr</div>
                </li>
                
            </div></ul>
            <ul className="meny-list">
            <div className="hamburger-type-container">
            <div className="hamburger-type">
                <li className="meny-item">
            <div className="meny-name">Politikern</div>
            <div className="meny-description">Ost <br/> Bacon <br/> Stekt lök <br/>Hamburgerdressing<br/> Sallad <br/> Tomat <br/> BBQ Sås</div>
                </li>
                <li className="meny-item">
            <div className="meny-name">Atleten</div>
            <div className="meny-description">Ost <br/> Bacon <br/> Stekt lök <br/> Vitlöksmayo <br/> Sallad <br/> Jalapeño <br/> Sriracha Mayo </div>
                </li>
                <li className="meny-item">
            <div className="meny-name">Rockaren</div>
            <div className="meny-description">Ost <br/> Bacon x 2 <br/> Vitlöksmayo <br/> Sallad <br/> Rå lök <br/> Tomat <br/> BBQ Sås</div>
                </li></div>
            <div className="hamburger-type">
                <li className="meny-item">
            <div className="meny-name">Miss piggy</div>
            <div className="meny-description">Ost <br/> Bacon x 2 <br/> Stekt lök <br/> Sallad <br/> Picklad rödlök <br/> Tomat <br/> Tryffelmayo</div>
                </li>
                <li className="meny-item">
            <div className="meny-name">Butchern</div>
            <div className="meny-description">Ost <br/> Bacon x 2 <br/> Hamburgerdressing <br/> Sallad <br/> Rå lök <br/> Ketchup <br/> Senap </div>
                </li>
                <li className="meny-item">
            <div className="meny-name">Starke Adolf</div>
            <div className="meny-description">Ost <br/> Bacon <br/> Hamburgerdressing <br/> Sallad <br/> Jalapeño <br/> Tomat <br/> Sriracha </div>
                </li>
                </div>
                </div>
            </ul>

            </div>
            </div>
            <div className="meny-part">
            <div className="meny-title">Annat</div>
            <div className="sausage-type"><br/> Korvsorter: Fläsk, Kyckling, Vegetarisk</div>
            <div className="hamburger-container">
            

            
            <ul className="meny-list">
            <div className="hamburger-type-container">
            <div className="hamburger-type">
                <li className="meny-item">
            <div className="meny-name">Kycklingrulle</div>
            <div className="meny-description">Bröd, Kyckling, <br/>Sallad, Rå Lök <br/>Picklad Lök, Jalapeño <br/>Tomat, Valfri sås</div>
            <div className="meny-price"> 90kr</div>
                </li>
                <li className="meny-item">
            <div className="meny-name">Hel Special</div>
            <div className="meny-description">2 Korvar, Bröd, Mos <br/></div>
            <div className="meny-price"> 80kr</div>
                </li>
                <li className="meny-item">
            <div className="meny-name">Halv Special</div>
            <div className="meny-description">1 Korv, Bröd, Mos  </div>
            <div className="meny-price"> 70kr</div>
                </li>
                <li className="meny-item">
            <div className="meny-name">Pommes tallrik med tjock korv</div>
            <div className="meny-price"> 60kr</div>
                </li>
                <li className="meny-item">
            <div className="meny-name">Pommes tallrik med smal korv</div>
            <div className="meny-price"> 50kr</div>
                </li></div>
                <div className="hamburger-type">
                <li className="meny-item">
            <div className="meny-name">Toast falukorv</div>
            <div className="meny-description">Ost & Falukorv </div>
            <div className="meny-price"> 40kr</div>
                </li>
                
                <li className="meny-item">
            <div className="meny-name">Toast special</div>
            <div className="meny-description">Ost, Skinka, ägg </div>
            <div className="meny-price"> 40kr</div>
                </li>

                <li className="meny-item">
            <div className="meny-name">Toast</div>
            <div className="meny-description">Ost & Skinka </div>
            <div className="meny-price"> 30kr</div>
                </li>
                <li className="meny-item">
            <div className="meny-name">Tjock Korv med bröd</div>
            <div className="meny-price"> 35kr</div>
                </li>
                <li className="meny-item">
            <div className="meny-name">Smal Korv med bröd</div>
            <div className="meny-price"> 25kr</div>
                </li>
                <li className="meny-item">
            <div className="meny-name">Pommes Tallrik</div>
            <div className="meny-price"> 30kr</div>
                </li>
                <li className="meny-item">
            <div className="meny-name">Mos Tallrik</div>
            <div className="meny-price"> 30kr</div>
                </li>
                </div></div>
            </ul>
            </div>
            </div>
            
            
            
            </div><div className="meny-title">Drycker</div>
            <div className="dryck-container">
            
            
            <ul className="dryck-list">
                <div className="dryck-part"><div className="meny-description">
                
            <div className="meny-item">
                Pris 25 kr<br/> <br/>
                Pucko
                <br/>Powerking
                </div>
                </div>
                </div>
                <li className="meny-item"><div className="meny-description">
                Pris 20 kr
                </div>
                <div className="dryck-part">
            <div className="meny-description"> Kaffe             </div>
            <div className="meny-description"> Coca-Cola         </div>
            <div className="meny-description"> Coca-cola Zero   </div>
            <div className="meny-description"> Zingo Apelsin     </div>
            <div className="meny-description"> Ramlösa Citron    </div>
            <div className="meny-description"> Ramlösa Natural  </div>
            <div className="meny-description"> Sprite / 7-Up     </div>
                
                    </div>
                </li>
            
            </ul>
            </div>
            <Footer/>
        </>
    );
}

export default Meny;