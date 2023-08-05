import React from "react";
import { NavLink } from "react-router-dom";
import {HiHome,HiBell,HiBookmark,} from 'react-icons/hi'
import {BiSolidUser} from 'react-icons/bi'



const Navbar = () => {

    return(
        <div className="nav-bar">
            <div className="icons-container">
                <NavLink to="/"> <HiHome className="icons"/> </NavLink>
                <NavLink to="/notify"> <HiBell className="icons"/> </NavLink>
                <NavLink to="/info"> <HiBookmark className="icons"/> </NavLink>
                <NavLink to="/details"> <BiSolidUser className="icons"/></NavLink>
            </div>
        </div>
    )
}
export default Navbar