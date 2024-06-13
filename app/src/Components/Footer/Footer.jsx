import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
function Footer() {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    {/* <img src={assets.logo} alt="" /> */}
                    <h3 id='kk'>CityFoods</h3>

                    <p> Our restaurant is exceptional, offering a delightful blend of flavors and impeccable service. Patrons rave about the mouthwatering dishes, cozy ambiance, and friendly staff.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />

                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Contacts</h2>
                    <ul>
                        <li>Call:+256764-428-003</li>
                        <li>WhatsApp:+256756-697-871</li>
                        <li>Email:opiyooscar414@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copy-right">cityfoods.com  &copy;{new Date().getFullYear()} All rights reserved.</p>

        </div>
    )
}

export default Footer