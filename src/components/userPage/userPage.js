import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./userPage.css";

const UserPage = () => {
    const [users, setUsers] = useState([]);

    const navigate =useNavigate();

    const fetchUser = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsers(data)
                console.log(data)
            })
    }


    // const showAlbum = (e) => {
    //     console.log(e)
    //     fetch(`https://jsonplaceholder.typicode.com/users/${e.target.id}`)
    //       .then(response => {
    //         return response.json()
    //       })
    //       .then(data => {
    //         setAlbum(data)
    //         console.log(data)
    //       })    
    //   }

    const showAlbum = (e)=>{
        console.log(e.target.id)
        localStorage.setItem("album",e.target.id)
        navigate('/albums')
    }

    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <>
        <div className='user-container'><h1>Users</h1>
            {users.length > 0 && (
                <ul >
                    {users.map(user =>(
                            
                            
                            <div className='user-card'>
                                <p > <strong>Name:</strong> <span>{user.name}</span></p>
                                {/* <p >ID <span>{user.id}</span></p> */}
                                <p><strong>Email:</strong> <span>{user.email}</span></p>
                                <p><strong>Address:</strong> <span>{user.address.street}{user.address.suite}{user.address.city}{user.address.zipcode}</span></p>
                                <p><strong>Phone:</strong> <span>{user.email}</span></p>
                                <p><strong>Website:</strong><span>{user.email}</span></p>
                                <p><strong>Company:</strong><span>{user.email}</span></p>
                                <button id ={user.id} onClick={showAlbum} >Open Album</button>

                                
                            </div>
                            
                    )

                        )
                    }
                </ul>

            )
            }
        </div>
        </>
    )
}

export default UserPage