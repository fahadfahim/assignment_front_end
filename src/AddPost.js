
import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Consumer } from './context';
import TextInputGroup from './TextInputGroup';
import { v4 as uuidv4 } from 'uuid';

function AddPost() {
    let history = useHistory();


   const [post,setPost] = useState({
       id: uuidv4(),
       title:'',
       body:'',

   })
   
   const {title,body} = post;

   const onInputChange = e =>{
       setPost({...post,[e.target.name]: e.target.value})
   }

    const onsubmit = async (dispatch, e) => {
    e.preventDefault();

    const newPost = {
        id:uuidv4(),
     title,
     body
    };

    const res = await axios.post(
      'https://jsonplaceholder.typicode.com/posts',
      newPost
    );

    dispatch({ type: 'ADD_POST', payload: res.data });

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
                            Add Contact
                        </div>
                        <div className='card-body'>
                            <form onSubmit={onsubmit.bind(this, dispatch)}>
                                <TextInputGroup 
                                label='Title'
                                name='title'
                                placeholder='Enter you Post Title'
                                value={title}
                                onChange={e => onInputChange(e)}
                              
                                />
                                 <TextInputGroup 
                                label='Body'
                                name='body'
                                placeholder='Enter you Post body'
                                value={body}
                                onChange={e => onInputChange(e)}
                               
                                />
                                    <input
                    type="submit"
                    value="Add Post"
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

export default AddPost
