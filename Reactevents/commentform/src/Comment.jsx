import { useState } from "react"

export default function Comment(){
    let[formData, setFormData]=useState({
        userName:"",
        remarks:"",
        rating:5
    })
    let handleInputChange=(event)=>{
        setFormData((currData)=>{
            return{...currData, [event.target.name]:event.target.value}
        })

    }

    let handleSubmit=(event)=>{
        event.preventDefault()
        console.log(formData)
        setFormData({
            userName:"",
            remarks:"",
            rating:5

        })
    }

    
    return(
    <div>
        <h4>Give a Comment</h4>

        <form onSubmit={handleSubmit}>
        <label htmlFor="userName">User Name </label>
        <input placeholder="Enter username" type="text" value={formData.userName} id="userName" onChange={handleInputChange} name="userName"/>
        
        <br></br>
        <br></br>
        <br></br>

        <label htmlFor='remark'>Remarks</label>
        <textarea value={formData.remarks} placeholder="remarks" onChange={handleInputChange} id="remark" name="remarks">Remarks</textarea>
        
        <br></br>
        <br></br>
        <br></br>

        <label htmlFor="rating">Rate us!</label>
        <input placeholder="rate between 1-5" type="number" value={formData.rating} min={1} max={5} id="rating" onChange={handleInputChange} name="rating"/>
        
        <br></br>
        <br></br>
        <br></br>

<button>Add Comment</button>

       </form>
        </div>


        
    )
}