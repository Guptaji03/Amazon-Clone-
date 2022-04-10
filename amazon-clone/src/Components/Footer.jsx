import React from 'react'
import "../Css/footer.css"
import {Link} from "react-router-dom"
const Footer = () => {
  return (
    <footer>
    <div className="main">
        <div className="col col1">
            <h3>Deluxe Hotel</h3>

            <div className="content">
                <div className="content-inner1">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </div>
            </div>

            <div className="media">
                <div className="media-inner">
                    <i className="fa fa-twitter circle"></i>
    
                </div>
                <div className="media-inner">
                    <i className="fa fa-facebook circle"></i>
    
                </div>
                <div className="media-inner">
                    <i className="fab fa-instagram"></i>
    
                </div>
            </div>
        </div>


        <div className="col col2">
            <h3>Useful Links</h3>

            <div className="content">
                <div className="content-inner" ><span>Blog</span></div>
                <div className="content-inner" ><span>Rooms</span></div>
                <div className="content-inner" ><span>Amenities</span></div>
                <div className="content-inner" ><span>Gift Card</span></div>
            </div>


        </div>


        <div className="col col3">
            <h3>Privacy</h3>

            <div className="content">
                <div className="content-inner" ><span>Career</span></div>
                <div className="content-inner" ><span>About Us</span></div>
                <div className="content-inner" ><span>Contact Us</span></div>
                <div className="content-inner" ><span>Services</span></div>
            </div>



        </div>


        <div className="col col4">

            <h3>Have a Questions?</h3>

            <div className="content">
                <div className="content-inner1">
                    <div className="icon">
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                    </div>
                    <div className="content-inner-inner add">
                        203 Fake St. Mountain View, San Francisco, California, USA
                    </div>
                </div>
                <div className="content-inner1">
                    <div className="icon">
                        <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="content-inner-inner cont">
                        +2 392 3929 210
                    
                    </div>
                </div>
                <br/>
                <div className="content-inner1">
                    <div className="icon">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                    </div>
                    <div className="content-inner-inner ema">
                        info@yourdomain.com
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="bottom">
        Copyright ©2022 All rights reserved | This template is made with <i className="fas fa-heart"></i>
        by <Link to="/" >Colorlib</Link> 
    </div>
</footer>
  )
}

export default Footer
