
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { Consumer } from './context';
import TextInputGroup from './TextInputGroup';


function EditPost() {
    let history = useHistory();
    const {id} = useParams();
   const [post,setPost] = useState({
       title:'',
       body:'',
    
   })

   useEffect( async() =>{
   
     
        const res =await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${id}`
          );
          const post = res.data;
          setPost(post)
     
   },[])
   
   const {title,body} = post;

   const onInputChange = e =>{
       setPost({...post,[e.target.name]: e.target.value})
   }

    const onsubmit = async (dispatch, e) => {
    e.preventDefault();

    const updPost = {
     title,
     body
    };
   
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      updPost
    );

    dispatch({ type: 'UPDATE_POST', payload: res.data });

    // Clear State
    setPost({
        title: '',
        body: '',
    });

    history.push('/');
  };
    return (
        <Consumer>
            {value =>{
                const {dispatch} = value;
                return(
                    <div className='container'>
                    <div className='card mb-3'>
                        <div className='card-header'>
                            Edit Post
                        </div>
                        <div className='card-body'>
                            <form onSubmit={onsubmit.bind(this, dispatch)}>
                                <TextInputGroup 
                                label='Title'
                                name='title'
                                placeholder='Update your Post Title'
                                value={title}
                                onChange={e => onInputChange(e)}
                                
                                />
                                 <TextInputGroup 
                                label='Body'
                                name='body'
                                placeholder='Update your Post body'
                                value={body}
                                onChange={e => onInputChange(e)}
                                
                                />
                                    <input
                    type="submit"
                    value="Update Post"
                    className="btn btn-danger btn-block"
                  />
                            </form>
                        </div>
                    </div>
                    </div>
                )
            }}
        </Consumer>
    )
}

export default EditPost
