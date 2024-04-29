import "./Product.css";

function Product({title, price}){
    // let isDiscount= price>30000? "Discount of 5%":""
let styles={backgroundColor:price>30000? "pink":""};
    return(
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <h5>{price}</h5>
           {price>30000 ? <p>Get Discount of 5%</p>:null}
            
        </div>
    );
}
export default Product;


/* <p>{features}</p> */
            // <p>{features2.a}</p>