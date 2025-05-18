import React from 'react'
import "./Footer.css"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <>
    <div className='Footer_Container'>
        <div className='Footer_wrapper'>
            <div className='Footer_Icons'>
                <div><FacebookOutlinedIcon/></div>
                <div><InstagramIcon/></div>
                <div><TwitterIcon/></div>
                <div><YouTubeIcon/></div>
            </div>
            <div className='Footer_data'>
                <div className='Footer_links'>
                    <ul className='Footer_link'>
                        <li>Audio Description</li>
                        <li>Investor Realtion</li>
                        <li>Privacy</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className='Footer_links'>
                    <ul className='Footer_link'>
                        <li> Help Center</li>
                        <li> Jobs</li>
                        <li> Legal Notices</li>
                        <li> Do Not Sell or Shar My Personal Information</li>
                    </ul>
                </div>
                <div className='Footer_links'>
                    <ul className='Footer_link'>
                        <li> Gift Card</li>
                        <li> Netflix Shop</li>
                        <li> Cookie Prefernces</li>
                        <li> Ad Choices</li>
                    </ul>
                </div>
                <div className='Footer_links'>
                    <ul className='Footer_link'>
                        <li>Media Center </li>
                        <li>Terms of Use</li>
                        <li> Corporate Information</li>
                    </ul>
                </div>
            </div>
            <div className='Service_Code'>
                <input className='service' placeholder='Service Code' />
            </div>
            <div className='Copy_right'>
                &copy; 1997-2025 Netflix, Inc.
            </div>
            
        </div>
    </div>

    </>
  )
}

export default Footer