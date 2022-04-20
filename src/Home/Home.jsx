import React from 'react'
import axios from 'axios'
import  { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Home() {
 let  nav=useNavigate()
const imgUrl="https://image.tmdb.org/t/p/original"
  const [move ,setMove]=useState([])
  const [tv ,settv]=useState([])
 async function setData(media,callback){
  let {data}= await axios.get(`https://api.themoviedb.org/3/trending/${media}/week?api_key=f1aca93e54807386df3f6972a5c33b50`)
  callback(data.results)
 }
useEffect(() =>{

  setData("move" , setMove)
  setData("tv" , settv)

},[])

 function goToDetails(id){
  
nav({
  pathname:'/Movedata',
  search:`?id=${id}`
})
 }
 function goToTvDetails(id){
  nav({
    pathname:'/TvDatails',
    search:`?id=${id}`
  })

   }
  return (
    <div>
      <div className='row'> 
      
        <div className='col-md-4 textmove '>
        <div className='linetext my-2 w-25'></div>
          <h2>Trending</h2>
          <h2>movies</h2>
          <h2>to Watch now</h2>
          <p>most watched movies by days</p>
          <div className='linetext'></div>
        </div>
{move.map((move , index)=> 
      <div className='col-md-2 my-5 ' key={index}>
        <div onClick={()=>goToDetails(move.id) } className='imgdata'>
       
<img src={imgUrl+`${move.poster_path}`} className="w-100" alt="" />
     
     {move.title?<h6 className='text-light'>{move.title}</h6>:   <h6 className='text-light'>Not found</h6>}
        </div>
     
    
    </div>

)}


      </div>


      <div className='row'>
      
      <div className='col-md-4 textmove '>
      <div className='linetext my-2 w-25'></div>
        <h2>Trending</h2>
        <h2>tv</h2>
        <h2>to Watch now</h2>
        <p>most watched tv by days</p>
        <div className='linetext'></div>
      </div>
{tv.map((tv , index)=> 


    <div className='col-md-2 my-5 ' key={index}>
      <div onClick={()=>goToTvDetails(tv.id) } className="imgdata" >
<img src={imgUrl+`${tv.poster_path}`} className="w-100" alt="" />
   
   {tv.name?<h6 className='text-light'>{tv.name}</h6>:   <h6 className='text-light'>Not found</h6>}
   
      </div>
  
  
  </div>

)}


    </div>


    </div>
  )
}
