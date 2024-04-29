import Productt from "./Productt.jsx";

function Producttabb(){
    let description=[["8,000 DPI","5 Programmable buttons"],["Intuitive touch surface","designed for iPad Pro"],["Intuitive touch surface","designed for iPad Pro"],["wireless mouse 2.4Ghz", "optical orientation"]

];
    let styles={
        display:"flex",
        flexWrap:"Wrap",
        justifyContent:"center",
        alignItems:"center",
        gap:10

    }
   
    return(
        
        <div style={styles}>

            <Productt title="Logitech MX Master" idx={0} description={description}/>
            <Productt title="Apple Pencil (2nd Gen)" idx={1} description={description}/>
            <Productt title="Zebronics Zeb-transformer" idx={2} description={description}/>
            <Productt title="Petronics Toad 23" idx={3} description={description}/>

        </div>
    )
}
export default Producttabb;