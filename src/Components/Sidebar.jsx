import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
}from "react-icons/fa";
import Logo from "./th.jpeg"
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/about",
            name:"Profile",
            icon:<FaUserAlt/>
        },
        {
            path:"/analytics",
            name:"Grades",
            icon:<FaRegChartBar/>
        },
        {
            path:"/comment",
            name:"Notifications",
            icon:<FaCommentAlt/>
        },
        {
            path:"/product",
            name:"Logout",
            icon:<FaShoppingBag/>
        },
        
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none", textAlign: 'center'}} className="logo">
                    <img
                        src={Logo}  // Update the path accordingly
                        alt="logo"
                        style={{ maxWidth: '30%', height: 'auto' }}
                    />
                    <br />
                        <p style={{whiteSpace: 'nowrap'}} className='ict'>ICT Academy of Kerala</p>
                    </h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeClassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;