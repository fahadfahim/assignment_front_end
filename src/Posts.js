import React, { useState } from 'react'
import { Consumer } from './context'
import Post from './Post';
import './App.css'
const Posts = () => {
    const [visible,setVisible] = useState(10);
    const showMoreItems = () => setVisible(prev => prev +10);
    return (
        <Consumer>
            {value =>{
                const {posts} = value;
                console.log(posts);
                return(
                    <>
                    <div className='blog_head'>
                    <h2>Blog Posts</h2>
                    </div>
                    <div className="container">
                        <div className='row'>
                            
                        {posts.slice(0,visible).map(post =>(
                        <div className='col-md-4 col-sm-12'>
                        <Post key={post.id} post={post} />
                        </div>
                        ))}         
                     </div>
                    </div>
                    <div className='btn-div text-center'>
                    <button className='btn bg-dark text-light text-center mb-3' onClick={showMoreItems}>Load More</button>
                    </div>
                    </>
                )
            }}
        </Consumer>
    )
}

export default Posts
