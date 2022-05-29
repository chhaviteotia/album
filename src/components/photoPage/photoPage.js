import React, { useState,useEffect } from 'react';
import axios from 'axios';
import "./photoPage.css";

const PhotoPage = () => {

  const [photos, setPhotos] = useState([]);

    const photoId = localStorage.getItem("photos")
    console.log(photoId)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/photos/?albumId=${photoId}`)
            .then((response)=>{
                setPhotos(response.data)
                console.log(response.data)
            }            
            )
      },[photoId])

  return (
    <div className='photos-container'><h1>Photos</h1>
        <div>
        {photos.length > 0 && (
                <ul>
                    {photos.map(photo =>(
                            <>
                            <div  className='photos-card'>
                            <p><strong>Title:</strong><span>{photo.title}</span></p>
                            <div className='url-div'><img src={photo.url} alt="url"/></div>
                            <div className='thumbnail-div'><img src={photo.thumbnailUrl} alt="thumbnail"/></div>

                            </div>
                            </>
                    )
                        )
                    }
                </ul>
            )
            }
        </div>
    </div>
  )
}

export default PhotoPage