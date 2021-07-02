import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link, useParams } from 'react-router-dom'
import './App.css'
import './App.css'
const PostDetails = () => {
    
    const {id} = useParams();
    const [details,setDetails] = useState([''])

    useEffect(async() =>{

        const comments = await axios.get(
            `https://jsonplaceholder.typicode.com/comments/`
        );
        let cmt =comments.data;
        setDetails(cmt);
    },[]);
    return (
        <div className='container'>
            <div className='post-details my-5 text-center'>
                <h2>Post Details</h2>
            </div>
            <div className='row'>
        {details.map((detail,index) =>{
            if(detail.postId == id){
                return (
                    <div key={index} className='col-md-4 col-sm-12'>
                    <div  className='card p-4 m-2 h-auto'>
                        <div className='card-title'>
                        <h4>{detail.name}</h4>
                        </div>
                        <hr />
                        <p>{detail.email}</p>
                        <hr />
                        <p>{detail.body}</p>
                    </div>
                    </div>
                )
            }
        })}
        <div className='bck_hm text-center my-4'>
        <Link className='back_home  text-decoration-none p-3 btn-secondary' to='/'>Back to Home</Link>
        </div>
        </div>
        </div>
    )
}

export default PostDetails
