import "./Productt.css";
import Price from "./Price.jsx";

function Productt({title, idx, description}){
    let oldPrices=["12,495", "11,900", "1,599", "599"]
    let newPrices=["8,999", "9,199", "899","278"]
   

    

    return(
    <div className="Productt">
        <h4>{title}</h4>
        <p>{description[idx][0]}</p>
        <p>{description[idx][1]}</p>

        <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
    </div>
    )
}
export default Productt;