import React from 'react'
import { IoLogoFacebook } from "react-icons/io";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { FaSquareInstagram } from "react-icons/fa6";

function Footer() {
    return <div className='bg-gray-300'>
    <div className='flex items-center justify-around mt-10'>
        <div>
            ONLINE SHOPPING

        </div>

        <div>
            CUSTOMER POLICIES

        </div>

        <div>
            EXPERIENCE IT

        </div>

        <div>
            100% ORIGINAL guarantee for all products
        </div>
    </div>
    <div className='flex justify-around'>
        <div>
            <div>Men</div>
            <div>Women</div>
            <div>Kids</div>
            <div>Furniture</div>
            <div>Beauty</div>
            <div>Fragrance</div>
            <div>Groceries</div>
        </div>

        <div>
            <div className>Contact us</div>
            <div className>FAQ</div>
            <div className>T&C</div>
            <div className>Terms of Use</div>

        </div>
        <div>
            <div className='ml-16'>Keep in Touch</div>
            <div className='flex ml-16 '><IoLogoFacebook /> <TiSocialTwitter /> <TiSocialYoutube /> <FaSquareInstagram /></div>

        </div>
        <div>
            Return within 30days of receiving your orde

        </div>
    </div>
</div>

        
}

export default Footer
