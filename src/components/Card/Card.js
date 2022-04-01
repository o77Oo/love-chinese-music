import "./Card.scss";
import Header from "../Header/Header"
import Wind from "../../assets/icons/wind.jpeg";
import BowedString from "../../assets/icons/bowedstring.jpeg";
import Percussion from "../../assets/icons/percussion.jpeg";
import PluckedString from "../../assets/icons/pluckedstring.jpeg";

function Card() {
    return (
        <>
        <Header />
        <div className="cards__box">
      <div className="cards__container">
           <div class="cards__wrapper">
          <img
            class="cards__img"
            src={Wind}
            alt="instrument"
          />
         
        </div> 
  <div class="cards__wrapper">
          <img
            class="cards__img"
            src={BowedString}
            alt="instrument"
          />
         
        </div> 
        </div>
        <div className="cards__container1">
         <div class="cards__wrapper">
          <img
            class="cards__img"
            src={Percussion}
            alt="instrument"
          />
         
        </div> 
        <div class="cards__wrapper">
          <img
            class="cards__img"
            src={PluckedString}
            alt="instrument"
          />
          
        </div> 
      </div>
      </div>
      </>
    );
  }
  
  export default Card;