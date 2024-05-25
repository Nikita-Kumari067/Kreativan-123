import { useEffect,useState } from "react"

export default function Home(){
    let[products,setProducts]=useState([])
    useEffect(()=>{
        const fetchProducts=async()=>{
            const response=await fetch("https://dummyjson.com/products")
            const data=await response.json()
            console.log(data)

        }
        fetchProducts()
    })

    return(
        <>



        </>
    )
}