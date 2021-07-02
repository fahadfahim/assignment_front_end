import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Pagination from './Pagination';
import './App.css'
const Users = () => {
    const [users,setUsers] = useState('');
    const [currentPage,setCurrentPage] = useState(1);
    const [usersPerPage] = useState(3);

    const [searchTerm,setSerchTerm] = useState('')
    useEffect(async() =>{
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(res.data)
        
        //console.log(res.data);
    },[])

    const ascSortUsersName = [...users].sort((a,b) => {
      if(a.name < b.name){
        return -1
      }
    if(b.name > a.name){
      return 1;
    }
    });

    const indexOfLastPost = currentPage * usersPerPage; //10*1=10

    const indexOfFirstPost = indexOfLastPost - usersPerPage; // 10 -10=0
  
    let currentPosts = ascSortUsersName.slice(indexOfFirstPost, indexOfLastPost); //0- 10
    
    
    const paginate = pageNumber => setCurrentPage(pageNumber);
 

   const searchText = (e) =>{
     e.preventDefault();
     let searchValue = e.target.value.toLowerCase();
     setSerchTerm(searchValue);

      let data = [...ascSortUsersName];
      Array.from(data).forEach(function(item){
        let itemName = item.name;
        if(itemName.toLowerCase().indexOf(searchTerm) != -1){

          return currentPosts = item;
       
           console.log(currentPosts);
        }else{
          return null;
        }
      })

  }
 
    return (
        <>
        <div className='user_head d-flex justify-content-center my-4'>
          <h2>Users</h2>
        </div>
        <div className='search_bar d-flex justify-content-center my-4'>
          <input  type='text' placeholder='Search by Name , email or website'
          onChange={searchText}
          />
        </div>
<div className='container table-responsive'>
<table class="table table-bordered table-hover">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Website</th>
    </tr>
  </thead>
  <tbody>
  { currentPosts.map((user,index) =>{
  return(
    <tr key={index}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.website}</td>
    </tr>
     )
    })}
  </tbody>
</table>
</div>
<div className='page d-flex justify-content-center my-4'>
<Pagination
usersPerPage={usersPerPage}
totalPosts={users.length}
paginate={paginate}
/>
</div>
</>
    )
}

export default Users
