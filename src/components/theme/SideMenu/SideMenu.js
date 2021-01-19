import React from 'react';
import SideMenuInfoSingle from './SideMenuInfoSingle/SideMenuInfoSingle';
import SideMenuSingle from './SideMenuSingle/SideMenuSingle';

const SideMenu = () => {
    return(
        <ul className="sidebar navbar-nav">
        

        <SideMenuSingle link="/" exact>
        <i className="fas fa-fw fa-home"></i>
        <span>Home</span>   
        </SideMenuSingle>

        <SideMenuSingle link="/channels" >
        <i className="fas fa-fw fa-users"></i>
        <span>Channels</span>   
        </SideMenuSingle>        

        <SideMenuSingle link="/categories" >
        <i className="fas fa-fw fa-list-alt"></i>
        <span>Category</span>   
        </SideMenuSingle>
        

        <li className="nav-item channel-sidebar-list">           
           <ul>
               <SideMenuInfoSingle link="/about">
                About StreamYou 
               </SideMenuInfoSingle>

               <SideMenuInfoSingle link="/terms">
               Terms & Condition
               </SideMenuInfoSingle>

               <SideMenuInfoSingle link="/policy">
               Privacy Policy & Safety
               </SideMenuInfoSingle>


           </ul>
        </li>        
     
     </ul>
    )
}

export default SideMenu;