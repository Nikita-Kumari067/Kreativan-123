function printHello(event){
    console.log("Hello!")
    console.log(event);

}
function handleHover(){
    console.log("hover")
}



export default function Button(){
    return(
        <div>
            <button onClick={printHello}>Click Me!</button>
            <button onMouseOver={handleHover}>Hey! I am Nikita</button>
        </div>
    )
}