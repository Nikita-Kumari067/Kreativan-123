import {useState} from "react"

export default function Input(){
    let[city, setCity]=useState(null)
    let[search, setSearch]=useState("")
    
    let handleSearch=(event)=>{
        setSearch(event.target.value)
    }

    let handleSubmit=async(event)=>{
        event.preventDefault()
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=8439920a95672942f0b22a7de774a541&units=metric`;
        const response=await fetch(URL);
        const data=await response.json();
        console.log(data);
        setCity(data)
        setSearch("")
        
    }
 
    
        

    

     return(
        <div>
        <form onSubmit={handleSubmit}>
            <input placeholder="Enter City Name" type="text" value={search} onChange={handleSearch} required/>
            <button type="submit">Search Here!</button>
            </form>
            
             {!city ? (
                <div>
                    <p>No data found</p>
                </div>
            ) : (
                <div>
                    <h3>Location: {city?.name}</h3>
                    <h3>Temperature: {city?.main?.temp}</h3>
                    <h3>Humidity: {city?.main?.humidity}</h3>
                </div>
            )}
            </div>
            

            
    )
}


