import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo1.png';

const Navbar = () => {
    return (
        <div >
            <div className="navbar bg-gradient-to-r from-sky-900 via-purple-900 to-indigo-900 text-gray-50 text-xl">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact text-black dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/blogs'>Blogs</Link></li>
                            <li><Link to='/myOrder'>My Order</Link></li>
                            <li><Link to='/addAReview'>Add A Review</Link></li>
                            <li><Link to='/myProfile'>My Profile</Link></li>
                            <li><Link to='/dashboard'>Dashboard</Link></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl"><img className='mr-2' src={logo} alt="" />DH</Link>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                        <li><Link to='/myOrder'>My Order</Link></li>
                        <li><Link to='/addAReview'>Add A Review</Link></li>
                        <li><Link to='/myProfile'>My Profile</Link></li>
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-buttonBag">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;