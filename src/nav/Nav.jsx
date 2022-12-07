import React, { useEffect, useState } from 'react'
import './Nav.scss'
import logo from '../images/clothlogo.png';
import { Link, useNavigate } from "react-router-dom";
import { FaBox, FaCartArrowDown, FaCog, FaFilePowerpoint } from 'react-icons/fa';
import { RiShutDownLine } from 'react-icons/ri'
import { ImProfile, ImEnter } from 'react-icons/im'
const Nav = () => {
  const [loggedUser, setLoggedUser] = useState(JSON.parse(localStorage.getItem('loggedUser')));
  const nav = useNavigate();

  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem('loggedUser')));
  }, []);


  useEffect(() => {
    isLogged();
    isAdmin();
  }, [loggedUser,]);


  const isLogged = () => {
    if (loggedUser) return true;
    else return false;
  }
  const isAdmin = () => {
    if (isLogged() && loggedUser.role === "ADMIN_ROLE") return true;
    else return false;
  }



  const logOut = () => {
    if (loggedUser !== {}) {
      localStorage.removeItem('loggedUser');
      localStorage.removeItem('products');
      console.log("adasdas",localStorage)
      setLoggedUser();
    }
    nav('/login') // /products
  }

  return (


    <nav className="navbar">
      <div className="nav-logo"> <img src={logo} alt="" /> SHOP.BA </div>
      <ul className="nav-links">
        <div className="menu">
          <li><Link to="/products"><FaBox className='mb-1'></FaBox> Proizvodi</Link></li>
          <li><Link to="/cart"><FaCartArrowDown className='mb-1'></FaCartArrowDown>Korpa</Link></li>
          {isAdmin() && <li> <Link to="/admin-panel"><FaCog className='mb-1'></FaCog> Admin panel</Link></li>}
          {isLogged() && <li><Link to="/Profile"> <ImProfile className='mb-1'></ImProfile> Profil</Link></li>}
          {isLogged() && <li onClick={logOut}><RiShutDownLine className='mb-1'></RiShutDownLine>Odjavi se</li>}
          {!isLogged() && <li> <Link to="/login"><ImEnter className='mb-1'></ImEnter>Povezi se</Link></li>}
        </div>
      </ul>
    </nav>
  )
}

export default Nav