import { useState } from "react"


export default function Loginform(){
    let[formData, setFormData]=useState({
        "fullName":"",
        "userName":"",
        "password":"",
        "email":"",
        "phoneNo":2

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
        "fullName":"",
        "userName":"",
        "password":"",
        "email":"",
        "phoneNo":""
        })
    }
    return(
        < form onSubmit={handleSubmit}>
        <label htmlFor="fullname">Full Name</label>
        <input placeholder="enter your name" type="text" value={formData.fullName} id="fullname" name="fullName" onChange={handleInputChange}/>
        <br></br>
        <br></br>
        <br></br>
        <label htmlFor="userName">User Name</label>
        <input placeholder="enter your username" type="text" value={formData.userName} id="userName" name="userName" onChange={handleInputChange}/>
        <br></br>
        <br></br>
        <br></br>
        <label htmlFor="password">Password</label>
        <input placeholder="enter your password" type="password" value={formData.password} id="password" name="password" onChange={handleInputChange}/>
        <br></br>
        <br></br>
        <br></br>
        <label htmlFor="email">Email</label>
        <input placeholder="enter your valid email" type="email" value={formData.email} id="email" name="email" onChange={handleInputChange}/>
        <br></br>
        <br></br>
        <br></br>
        <label htmlFor="phone No.">Phone No.</label>
        <input placeholder="enter your mobile no." type="number" value={formData.phoneNo} id="phone No." name="phoneNo" onChange={handleInputChange}/>
        <br></br>
        <br></br>
        <br></br>
        <button>Submit</button>







        </form>

        
    )
}