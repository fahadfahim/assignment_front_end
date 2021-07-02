import React from 'react'
import { Consumer } from './context'
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import {Link} from 'react-router-dom'
import axios from 'axios';
const Post = ({post}) => {
    const {id,title,body} = post;

    const onDelteClick= async (id,dispatch) =>{
        // e.preventDefault();
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
            dispatch({ type: 'DELETE_POST', payload: id });
          } catch (e) {
            dispatch({ type: 'DELETE_POST', payload: id });
          }
    }
    return (
       <Consumer>
           {value =>{
               const {dispatch} = value;
               return(
                   <div className='card card-body card-height mb-3'>
                       <div className='card-title'>
                       <h4>{title}</h4>
                       </div>
                       <hr />
                       <div className='card-des'>
                       <p>{body}</p>
                       </div>
                       
                       <div className='card-buttons'>
                        <div className='card-button'>
                            <Link to={`/post/edit/${id}`}>
                        <CreateIcon className='mod_btn crt' />
                            </Link>
                        </div>
                        <div className='card-button'>
                            <DeleteIcon onClick={onDelteClick.bind(this,id,dispatch)} className='mod_btn del' />
                        </div>
                       
                        <div className='card-button'>
                            <Link to={`/post/details/${id}`} className='see_det'>See Details</Link>
                        </div>
                       </div>
                   </div>
               )
           }}
       </Consumer>
    )
}

export default Post
