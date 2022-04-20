
import { Navigate, Route, Routes , useNavigate } from 'react-router-dom'
import Nav from '../Nav/Nav'
import About from './../About/About';
import Home from './../Home/Home';
import Move from './../Movies/Move';
import Net from './../Network/Net';
import Register from './../Register/Register';
import Login from './../login/Login';
import jwtDecode from 'jwt-decode';
import {  useState ,useEffect } from 'react'
import Movedata from './../movedatils/Movedata';
import TvDatails from './../tvdatails/TvDatails';


export default function Allapp() {
  let x=useNavigate()
  const [userdecod,userDta]=useState(null)
  
useEffect (()=>{

if(localStorage.getItem("usertocken")){
  userToken()
}

},[])

  function userToken(){
let decode=jwtDecode(localStorage.getItem("usertocken"))
userDta(decode)
}


function logOut(){
  localStorage.removeItem("usertocken")
  userDta(null)
x('/login')
}

function ProtecttedRoute({children}){
  if(!localStorage.getItem('usertocken')){
   return <Navigate to='/login'/>
  }
 else {
   return  children
 }
}

  return (
<>

<Nav userdecod={userdecod} logOut={logOut} />
<div className='container'>
<Routes>

    <Route path='/' element={<Login/>}/>
    <Route path='home' element={<ProtecttedRoute> <Home /> </ProtecttedRoute>    }/>
    <Route path='about' element={<About/>}/>
    <Route path='move' element={<Move/>}/>
    <Route path='Movedata' element={<Movedata/>}>

    
</Route>
<Route path='TvDatails' element={<TvDatails/>}>
<Route path=':id' element={<TvDatails/>}/>
  </Route>
    <Route path='net' element={<Net/>}/>
    <Route path='Register' element={<Register/>}/>
    <Route path='login' element={<Login  userToken={userToken}/>}/>
</Routes>
</div>
</>




  )
}
