import React from 'react'
import { Link } from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark mb-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand">
            <h1>Blog</h1>
          </a>
          <button className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navmenu'
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <HomeIcon /> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/post/add" className="nav-link">
                  <AddIcon /> Add posts
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/users" className="nav-link">
                  <GroupIcon /> See Users
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
    )
}

export default Header
