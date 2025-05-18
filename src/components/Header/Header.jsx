import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import netflix from '../../assets/netflix.png'

function Header (){
return (
    <>
    <div className='Header_Container'>
        <div className='Header_wrapper'>
            <div className='Left_side'>
                <img className='Header_Logo' src={netflix} alt="" />
                <ul className='Header_links'>
                    <li>Home</li>
                    <li>Tv Show</li>
                    <li>Movies</li>
                    <li>Games</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browse by Language</li>
                </ul>
            </div>
            <div className='Rigth_side'>
                <div className='Header_Icons'><SearchIcon /></div>
                <div className='Header_Icons'><CircleNotificationsIcon /></div>
                <div className='Header_Icons'><AccountBoxIcon /></div>
                <div className='Header_Icons'><ArrowDropDownIcon /></div>

            </div> 
        </div>
    </div>
    
    </>
  )
}

export default Header