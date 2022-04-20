import axios from 'axios'
import React, {  useState } from 'react'
import Joi from 'joi'
import { useNavigate } from 'react-router-dom'

export default function Login(props) {
    let naveg=useNavigate()
    const [errorList ,setList]=useState([])
    const [load ,setload]=useState(false)
    const [eror ,seError]=useState('')
    const [user,userInfomation]=useState({
     
        email:"",
        password:""

    })
    
function valdate(user){
    const schema =Joi.object({
      
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
  
    if (val.error){
       
        setList(val.error.details)


    }else{
        let {data}= await axios.post("https://route-egypt-api.herokuapp.com/signin",user)
    
        
        if(data.message === "success"){
          
        localStorage.setItem("usertocken" , data.token)
    
            props.userToken()
            naveg("/home")
        }else{
            seError(data)
           
        }
    }

}




  return (
    <div>

      <h1>Log in</h1>
<div className='mt-5'>
    <form onSubmit={sign}>

        <label htmlFor="email">email:</label>
        <input onChange={data} type="email" className='form form-control mb-3' name='email'/>
        <label htmlFor="password">password:</label>
    
       
        <input onChange={data} type="password" className='form form-control mb-3' name='password'/>
     

        {eror?   <div className='alert alert-danger '>{eror}</div>:""}
        <button className='btn btn-outline-info'>
            {load ? <i className="fa-solid fa-yin-yang fa-spin fs-4"></i>: "Login"}
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
