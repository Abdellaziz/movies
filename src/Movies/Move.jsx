import React from 'react'
import axios from 'axios'
import  { useEffect, useState } from 'react'

export default function Home() {
 
const imgUrl="https://image.tmdb.org/t/p/original"
  const [move ,setMove]=useState([])
 console.log(move)
 async function setData(){
  let {data}= await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=f1aca93e54807386df3f6972a5c33b50`)
  setMove(data.results)
 }
useEffect(() =>{

  setData()


},[])


 
 

  return (
  <div className='row'>
{move.map((move , index)=> 
      <div className='col-md-2 my-5' key={index}>
        <div>
     
<img src={imgUrl+`${move.poster_path}`} className="w-100" alt="" />
     
     {move.title?<h6 className='text-light'>{move.title}</h6>:   <h6 className='text-light'>Not found</h6>}
        </div>
     
    
    </div>

)}
  </div>
  )
}

