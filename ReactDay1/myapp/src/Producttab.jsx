

import Product from "./Product";

function Producttab(){
    return(
        <>
            <Product title="laptop" price={30000} />
            <Product title="mobile" price={40000}/>
            <Product title="pen" price={20}/>
            </>
        
    );
}

export default Producttab;

// features={["hi-tech", "durable", "fast"]}  features2={{a:"hi-tech", b:"durable", c:"fast"}}