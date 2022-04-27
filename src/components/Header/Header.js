import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/Group 1329.png';
import './Header.css';
const Header = () => {
  return (
    <nav className=" bg-[#F0F2EB]">
      <div className="w-4/5 mx-auto p-10 flex justify-between items-center">
        <div className="logo">
          <img src={logo} alt="" />{' '}
        </div>
        <div className="navigation-item flex gap-2">
          <ul className="flex gap-4 items-center">
            <Link to="/home">Home</Link>
            <Link to="/donation">Donation</Link>
            <Link to="/events">Events</Link>
            <Link to="/blogs">Blogs</Link>
          </ul>
          <Link to="/register">
            <button className="register-btn w-[153px] h-[40px] text-white bg-[#3F90FC] rounded-lg">
              Register
            </button>
          </Link>
          <Link to="/admin">
            <button className="admin-btn w-[153px] h-[40px] text-white bg-[#434141] rounded-lg">
              Admin
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
