import React from 'react';
import Container from '@mui/material/Container'
import Button from 'react-bootstrap/Button';
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { TfiInstagram } from "react-icons/tfi";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";




function Footer() {
    return (
        <div>
            <div className='footer'>
                <Container >
                    <div className='d-flex align-items-center justify-content-around py-3'>
                        <img src='/images/hut.svg' />
                        <div className='fw-bold'>List your Show</div>
                        <div className='me-5'>Got a show, event, activity or a great experience? Partner with us &amp; get listed on BookMyShow</div>
                        <div className='ms-5'>
                            <Button variant="danger" size="lg">
                                Contact today!
                            </Button>
                        </div>
                    </div>
                </Container>
                <div className='icon-container d-flex justify-content-around align-items-center pt-3 '>
                    <div className='d-flex flex-column align-items-center'>
                        <img src='/images/customer-care.png' />
                        <p className='pt-3'>24/7 CUSTOMER CARE</p>
                    </div>
                    <div className='d-flex flex-column align-items-center'>
                        <img src='/images/ticket.png' />
                        <p className='pt-3'>RESEND BOOKING CONFIRMATION</p>
                    </div>
                    <div className='d-flex flex-column align-items-center'>
                        <img src='/images/newsletter.png' />
                        <p className='pt-3'>SUBSCRIBE TO NEWSLETTER</p>
                    </div>
                </div>
                <Container maxWidth='xl' className='foot-container' >
                    <div className='px-4 py-3'>
                        <div className='foot-title'>
                            Movies Now Showing in Chennai
                        </div>
                        <div >
                            <a href="" >Ghilli</a>
                            <a href="" >Rathnam</a>
                            <a href="" >Aavesham</a>
                            <a href="" >Dheena</a>
                            <a href="" >Aranmanai 4</a>
                            <a href="" >Malayalee From India</a>
                            <a href="" >Godzilla x Kong: The New Empire</a>
                            <a href="" >Romeo</a>
                            <a href="" >Billa</a>
                            <a href="">Nadikar</a>
                        </div>
                    </div>
                    <div className='px-4 py-3'>
                        <div className='foot-title'>
                            Upcoming Movies in Chennai
                        </div>
                        <div >
                            <a href="" >The Proof</a>
                            <a href="" >Lorii</a>
                            <a href="" >Tabahi Reloaded</a>
                            <a href="" >The Indian Story</a>
                            <a href="" >Maharaaj</a>
                            <a href="" >Desh Ke Gaddar</a>
                            <a href="" >Baak</a>
                            <a href="" >Tento</a>
                            <a href="" >Jagat</a>
                            <a href="" >Life Ek Settlement</a>
                        </div>
                    </div>
                    <div className='px-4 py-3'>
                        <div className='foot-title'>
                            Movies By Genre
                        </div>
                        <div >
                            <a href="" >Drama Movies</a>
                            <a href="" >Comedy Movies</a>
                            <a href="">Action Movies</a>
                            <a href="" >Thriller Movies</a>
                            <a href="">Romantic Movies</a>
                            <a href="" >Adventure Movies</a>
                            <a href="" >Horror Movies</a>
                            <a href="" >Fantasy Movies</a>
                            <a href="">Sports Movies</a>
                            <a href="" >Animation Movies</a>
                        </div>
                    </div>
                    <div className='px-4 py-3'>
                        <div className='foot-title'>
                            Movies By Language
                        </div>
                        <div >
                            <a href="" >Movies in English</a>
                            <a href="" >Movies in Tamil</a>
                            <a href="" >Movies in Hindi</a>
                            <a href="" >Movies in Malayalam</a>
                            <a href="" >Movies in Telugu</a>
                            <a href="" >Movies in Khasi</a>
                            <a href="" >Movies in Assamese</a>
                            <a href="" >Movies in Nepali</a>
                            <a href="">Movies in French</a>
                            <a href="" >Movies in Rajasthani</a>
                        </div>
                    </div>
                    <div className='px-4 py-3'>
                        <div className='foot-title'>
                            Sports Events in Chennai
                        </div>
                        <div >
                            <a href="" >Cricket</a>
                            <a href="">Chess</a>
                            <a href="">Running</a>
                            <a href="" >Archery</a>
                            <a href="" >Athletics</a>
                            <a href="" >Badminton</a>
                            <a href="" >Basketball</a>
                            <a href="">Baseball</a>
                            <a href="" >Boat Race</a>
                            <a href="" >Bowling</a>
                        </div>
                    </div>
                    <div className='px-4 py-3'>
                        <div className='foot-title'>
                            Events in Top Cities
                        </div>
                        <div >
                            <a href="">Events in Mumbai</a>
                            <a href="" >Events in Delhi-NCR</a>
                            <a href="">Events in Chennai</a>
                            <a href="">Events in Bengaluru</a>
                            <a href="">Events in Hyderabad</a>
                            <a href="">Events in Pune</a>
                            <a href="">Events in Ahmedabad</a>
                            <a href="">Events in Kolkata</a>
                            <a href="">Events in Kochi</a>
                        </div>
                    </div>
                    <div className='px-4 py-3'>
                        <div className='foot-title'>
                            Cinemas in Top Cities
                        </div>
                        <div >
                            <a href="">Cinemas in Mumbai</a>
                            <a href="">Cinemas in Delhi-NCR</a>
                            <a href="">Cinemas in Chennai</a>
                            <a href="">Cinemas in Bengaluru</a>
                            <a href="">Cinemas in Hyderabad</a>
                            <a href="" >Cinemas in Pune</a>
                            <a href="">Cinemas in Ahmedabad</a>
                            <a href="">Cinemas in Kolkata</a>
                            <a href="">Cinemas in Kochi</a>
                        </div>
                    </div>
                    <div className='px-4 py-3'>
                        <div className='foot-title'>
                            Plays in Top Cities
                        </div>
                        <div >
                            <a href="">Plays in Mumbai</a>
                            <a href="">Plays in Delhi-NCR</a>
                            <a href="">Plays in Chennai</a>
                            <a href="">Plays in Bengaluru</a>
                            <a href="">Plays in Hyderabad</a>
                            <a href="" >Plays in Pune</a>
                            <a href="">Plays in Ahmedabad</a>
                            <a href="">Plays in Kolkata</a>
                            <a href="">Plays in Kochi</a>
                        </div>
                    </div>
                    <div className='px-4 py-3'>
                        <div className='foot-title'>
                            Activities in Top Cities
                        </div>
                        <div >
                            <a href="">Activities in Mumbai</a>
                            <a href="">Activities in Delhi-NCR</a>
                            <a href="">Activities in Chennai</a>
                            <a href="">Activities in Bengaluru</a>
                            <a href="">Activities in Hyderabad</a>
                            <a href="">Activities in Pune</a>
                            <a href="">Activities in Ahmedabad</a>
                            <a href="">Activities in Kolkata</a>
                            <a href="">Activities in Kochi</a>
                        </div>
                    </div>
                    <div className='px-4 py-3'>
                        <div className='foot-title'>
                            Movies Now Showing
                        </div>
                        <div >
                            <a href="">Naach Ga Ghuma</a>
                            <a href="">Aa Okkati Adakku</a>
                            <a href="">Vakeel Saab</a>
                            <a href="">Maidaan</a>
                            <a href="">Juna Furniture</a>
                            <a href="">Ghilli</a>
                            <a href="">Baak</a>
                            <a href="">Rathnam</a>
                            <a href="">Bade Miyan Chote Miyan</a>
                            <a href="">Crew</a>
                        </div>
                    </div>
                    <div className='px-4 py-3'>
                        <div className='foot-title'>
                            COUNTRIES
                        </div>
                        <div >
                            <a href="">Indonesia</a>
                            <a href="">Singapore</a>
                            <a href="">UAE</a>
                            <a href="" >Sri Lanka</a>
                            <a href="">West Indies</a>
                        </div>
                    </div>
                    <div className='px-4 py-3'>
                        <div className='foot-title'>
                            HELP
                        </div>
                        <div >
                            <a href="" >About Us</a>
                            <a href="" >Contact Us</a>
                            <a href="" >Current Opening</a>
                            <a href="" >Press Release</a>
                            <a href="" >Press Coverage</a>
                            <a href="" >Sitemap</a>
                            <a href="">FAQs</a>
                            <a href="">Terms and Conditions</a>
                            <a href="">Privacy Policy</a>
                        </div>
                    </div>
                    <div className='px-4 py-3'>
                        <div className='foot-title'>
                            BOOKMYSHOW EXCLUSIVES
                        </div>
                        <div >
                            <a href="">Lollapalooza India</a>
                            <a href="">Superstar</a>
                            <a href="" >BookASmile</a>
                            <a href="" >Corporate Vouchers</a>
                            <a href="" >Gift Cards</a>
                            <a href="">List My Show</a>
                            <a href="" >Offers</a>
                            <a href="" >Stream</a>
                            <a href="" >Trailers</a>
                        </div>
                    </div>
                    <div className='px-4 py-3'>
                        <div className='foot-title'>
                            IPL 2024
                        </div>
                        <div >
                            <a href="">Mumbai Indians</a>
                            <a href="" >Rajasthan Royals</a>
                            <a href="">Kolkata Knight Riders</a>
                            <a href="">Lucknow Super Giants</a>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <hr className='w-50' />
                        <img src="/images/logo.svg" className='mx-2' />
                        <hr className='w-50' />
                    </div>
                    <div>
                        <div className='social-icons d-flex justify-content-center align-items-center mt-5'>
                            <a href=""><FaFacebookF /></a>
                            <a href=""><RiTwitterXLine /> </a>
                            <a href=""><TfiInstagram /></a>
                            <a href=""><FaYoutube /></a>
                            <a href=""><FaPinterestP /></a>
                            <a href=""><FaLinkedinIn /></a>
                        </div>
                    </div>
                    <div className="copyright">Copyright 2024 &copy; Bigtree Entertainment Pvt. Ltd. All Rights Reserved.
                        <br />
                        The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Footer;