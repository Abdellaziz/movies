import axios from 'axios'
import React, { useState } from 'react'
import Joi from 'joi'
import { useNavigate } from 'react-router-dom'

export default function Register() {
    let naveg=useNavigate()
    const [errorList ,setList]=useState([])
    const [load ,setload]=useState(false)
    const [eror ,seError]=useState('')
    const [user,userInfomation]=useState({
        first_name:"",
        last_name:"",
        age:0,
        email:"",
        password:""

    })
    
function valdate(user){
    const schema =Joi.object({
        first_name:Joi.string().alphanum().min(3).max(30).required(),
        last_name:Joi.string().alphanum().min(3).max(30).required(),
        age:Joi.number().min(16).max(70).required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    })
    return schema.validate(user , {abortEarly:false})
}
function data(e){
let userData={...user}
userData[e.target.name]=e.target.value
userInfomation(userData)
}
async function sign(e){
    e.preventDefault()
    setload(true)
    let val=valdate(user)
   console.log(val)
    if (val.error){
      
        setList(val.error.details)


    }else{
        let {data}= await axios.post("https://route-egypt-api.herokuapp.com/signup",user)
        
        if(data.message === "success"){
            naveg("/login")
  
        }else{
            seError(data)
          
        }
    }

}




  return (
    <div>

      <h1>Registeration Form</h1>
<div className='mt-5'>
    <form onSubmit={sign}>
        <label htmlFor="first_name">first name:</label>
        <input onChange={data} type="text" className='form form-control mb-3' name='first_name'/>

        <label htmlFor="last_name">last name:</label>
        <input onChange={data} type="text" className='form form-control mb-3' name='last_name'/>
        <label htmlFor="age">Age:</label>
        <input onChange={data} type="number" className='form form-control mb-3' name='age'/>
        <label htmlFor="email">email:</label>
        <input onChange={data} type="email" className='form form-control mb-3' name='email'/>
        <label htmlFor="password">password:</label>
    
       
        <input onChange={data} type="password" className='form form-control mb-3' name='password'/>
     

        {eror?   <div className='alert alert-danger'>{eror}</div>:""}
        <button className='btn btn-outline-info'>
            {load ? <i className="fa-solid fa-yin-yang fa-spin fs-4"></i>: "Register"}
         </button>
         {errorList.map((err , index)=>
{
    if (index===4)
    {
     return   <div key={index} className='alert alert-danger'>password is required</div>
    }else{
        return  <div key={index} className='alert alert-danger'>{err.message}</div>
    }
}
      
        )}
    </form>
</div>


    </div>
  )
}
