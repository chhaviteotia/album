import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./albumPage.css";

// import {Link}from 'react-router-dom';

const AlbumPage = () => {

  const [album, setAlbum] = useState([]);

  const navigate =useNavigate();

  const albumId = localStorage.getItem("album")
  console.log(albumId)
  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/albums/?userId=${albumId}`)
        .then((response)=>{
            setAlbum(response.data)
            console.log(response.data)
        }            
        )
  })
const showPhotos = (e)=>{
  console.log(e.target.id)
  localStorage.setItem("photos",e.target.id)
  navigate('/photos')
} 

  return (
    <div className='album-container'><h1> Album</h1>
            {album.length > 0 && (
                <ul>
                    {album.map(data =>(
                            
                            
                            <div className='album-card'>
                               <p><strong>Title:</strong><span>{data.title}</span></p>
                               <button id ={data.userId} onClick={showPhotos} >Open Photos</button>  
                            </div>
                            
                    )

                        )
                    }
                </ul>

            )
            }
        </div>
  )
}

export default AlbumPage