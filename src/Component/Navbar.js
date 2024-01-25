import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import {BsCart2} from "react-icons/bs";
import {HiOutlineCheck} from "react-icons/hi";
import {Box,List,Drawer,ListItem,ListItemButton,ListItemIcon,ListItemText} from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import InfoIcon from "@mui/icons-material/Info"
import PhoneRoundedIcon  from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon  from "@mui/icons-material/ShoppingCartRounded";
import {Link} from 'react-router-dom';



const Navbar=()=> {

    const [openMenu,setopenMenu]= useState(false)
    const menuoptions = [
        {
            text: "Home",
            icon:<HomeIcon/>
        },
        {
            text: "About",
            icon:<InfoIcon/>
        },
    
        {
            text: "Contact",
            icon:<PhoneRoundedIcon/>
        },
        {
            text: "Cart",
            icon:<ShoppingCartRoundedIcon/>
        },
       
   ]

  

    return <nav>
        <div className="nav-logo-container">
            <img src={Logo} alt="" />
        </div>
        <div className="navbar-links-container">
           <Link to='home'>Home</Link>
           <Link to='about'>About</Link>
           <Link to='contact'>Contact</Link>
            <Link to='cart'>
                <BsCart2 className="navbar-cart-icon" /> 
                </Link>
                <Link to="food"><button className="primary-button" >Order Now </button>
                </Link>
                
        </div>
        <div className="navbar-menu-container">
            <HiOutlineCheck onClick={()=> setopenMenu(true)}/>
</div>
<Drawer open={openMenu} onClose={() => setopenMenu(false)} anchor="right">
    <Box sx={{width:250}}
    role="presentation"
    onClick={()=> setopenMenu(false)}
    onKeyDown={()=>setopenMenu(false)}>
        <List>
            {menuoptions.map((item) =>(
                 <ListItem key={item.text} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>{item.icon}  </ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItemButton>
                 </ListItem>
            ))}
        </List>
    </Box>
</Drawer>
    </nav>
}

export default Navbar;