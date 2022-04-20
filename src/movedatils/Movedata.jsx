/*
import { useParams } from 'react-router-dom'
import axios from 'axios'
import  { useEffect } from 'react'
*/
import React from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect , useState } from 'react';


export default function Movedata() {
let [searchParam,setsearchParam]=useSearchParams();
const imgUrl="https://image.tmdb.org/t/p/original"
let [details,setDetails]=useState({})
let[genres,setgenres]=useState([])

let id=(searchParam.get("id"))
async function getdata(){
  let { data } =await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US`)
  setDetails(data)
  setgenres(data.genres)
  
}
useEffect(()=>{
  getdata()
},[])


  return (
    <div className='row mt-3'>
      <div className='col-md-5'>
        <img src={imgUrl+`${details.poster_path}`} className="w-75" alt="" />

      </div>
<div className='col-md-6 mt-5'>
  <p className='text-light mb-2'>{details.title}</p>
<p className='text-muted my-2'>{details.tagline}</p>

<div className="d-flex ">{genres.map((dat,index)=>
<h6 className=' my-2 mx-2 genres ' key={index}>{dat.name}</h6>
)} </div>


<h3 className='text-light my-2'>Vote:{details.vote_average}</h3>
<h3 className='text-light my-2'>Vote count:{details.vote_count}</h3>
<h3 className='text-light my-2'>popularity:{details.popularity}</h3>
<h3 className='text-light my-2'>release_date:{details.release_date}</h3>
<p className='text-muted mm'>{details.overview}</p>
</div>
    </div>
  )
}
