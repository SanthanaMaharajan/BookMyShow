import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useSelector } from 'react-redux';

function Home() {
    const {movieArray,movieArray2}=useSelector((state)=>state.mainData)
    const navigate=useNavigate()
    const openMovie = (movie, movieIndex) => {
        navigate(`/movie?${movie.name}`,{state:{movie, movieIndex}})
    }
    return (
        <div className='overflow-hidden'>
            <Header/>
            {/* Banner Carousel */}
            <div data-aos="fade-up" data-aos-duration="500">

            <Carousel autoPlay={true} infiniteLoop={true} centerMode={true} showStatus={false} showThumbs={false} className='mt-2'>
                <div>
                    <img src="/images/ban1.avif" />
                </div>
                <div>
                    <img src="/images/ban2.avif" />
                </div>
                <div>
                    <img src="/images/ban4.avif" />
                </div>
                <div>
                    <img src="/images/ban3.avif" />
                </div>
            </Carousel>
            </div>


            {/* Movies section */}
            <div className='px-5 reco-movies py-4' data-aos="fade-left" data-aos-duration="500" >
                <div className='pb-4'>
                    <h4>Recommended Movies</h4>
                </div>

                <Carousel showThumbs={false} showStatus={false} showIndicators={false}>
                    <div className='d-flex gap-3'>
                        {movieArray2.map((movie, index) => {
                            return (

                                <div className='movie-card' key={index} onClick={() => openMovie(movie,index)}>
                                    <img src={movie.image} />
                                    <h5>{movie.name}</h5>
                                    <p>{movie.genre}</p>
                                </div>
                            )
                        })}

                    </div>
                    <div className='d-flex gap-3'>
                        {movieArray.map((movie, index) => {
                            return (

                                <div className='movie-card' key={index} onClick={() => openMovie(movie,index+5)}>
                                    <img src={movie.image} />
                                    <h5>{movie.name}</h5>
                                    <p>{movie.genre}</p>
                                </div>
                            )
                        })}
                    </div>

                </Carousel>
            </div>


            {/* Mini Banner */}
            <div className='p-5' data-aos="zoom-in-down" data-aos-duration="1000">
                <img src='images/smallban.avif' className='img-fluid' />
            </div>


            {/* Events section */}
            <div className='p-5 event-card mb-5'>
                <div className='pb-4' data-aos="fade-right" data-aos-duration="1000"  >
                    <h4>The Best of Live Events</h4>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000"  >

                <Carousel showThumbs={false} showStatus={false} showIndicators={false} >
                    <div className='d-flex gap-3'>
                        <div className='movie-card'>
                            <img src='images/event1.avif' />
                        </div>
                        <div className='movie-card'>
                            <img src='images/event2.avif' />
                        </div>
                        <div className='movie-card'>
                            <img src='images/event3.avif' />
                        </div>
                        <div className='movie-card'>
                            <img src='images/event4.avif' />
                        </div>
                        <div className='movie-card'>
                            <img src='images/event5.avif' />
                        </div>
                    </div>
                    <div className='d-flex gap-3'>
                        <div className='movie-card'>
                            <img src='images/event6.avif' />
                        </div>
                        <div className='movie-card'>
                            <img src='images/event7.avif' />
                        </div>
                        <div className='movie-card'>
                            <img src='images/event8.avif' />
                        </div>
                        <div className='movie-card'>
                            <img src='images/event9.avif' />
                        </div>
                        <div className='movie-card'>
                            <img src='images/event10.avif' />
                        </div>
                    </div>
                </Carousel>
                </div>
            </div>

            {/* Premiere section */}

            <div className='p-5 premiere-card' data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000">
                <div>
                    <img src='/images/premiere.avif' className='img-fluid pb-2' />
                    <div>
                        <div className='p-1 text-light'>
                            <h4>Premieres</h4>
                            <p>Brand new releases every Friday</p>
                        </div>
                        <div>

                        <Carousel showThumbs={false} showStatus={false} showIndicators={false}>
                            <div className='d-flex gap-3 text-start text-light'>
                                <div className='movie-card'>
                                    <img src='images/premiere1.avif' />
                                    <h5>Veppam Kulir Mazhai</h5>
                                    <p>Tamil</p>
                                </div>
                                <div className='movie-card'>
                                    <img src='images/premiere2.avif' />
                                    <h5>Yaavarum Vallavare</h5>
                                    <p>Tamil</p>
                                </div>
                                <div className='movie-card'>
                                    <img src='images/premiere3.avif' />
                                    <h5>Kung Fu Panda 4</h5>
                                    <p>English</p>
                                </div>
                                <div className='movie-card'>
                                    <img src='images/premiere4.avif' />
                                    <h5>Idi Minnal Kadhal</h5>
                                    <p>Tamil</p>
                                </div>
                                <div className='movie-card'>
                                    <img src='images/premiere5.avif' />
                                    <h5>Sila Nodigalil</h5>
                                    <p>Tamil</p>
                                </div>
                            </div>
                            <div className='d-flex gap-3 text-start text-light'>
                                <div className='movie-card'>
                                    <img src='images/premiere6.avif' />
                                    <h5>Downtown Owl</h5>
                                    <p>English</p>
                                </div>
                                <div className='movie-card'>
                                    <img src='images/premiere7.avif' />
                                    <h5>They Shot The Piano Player</h5>
                                    <p>English</p>
                                </div>
                                <div className='movie-card'>
                                    <img src='images/premiere8.avif' />
                                    <h5>Speak No Evil</h5>
                                    <p>English</p>
                                </div>
                                <div className='movie-card'>
                                    <img src='images/premiere9.avif' />
                                    <h5>Hilma</h5>
                                    <p>English</p>
                                </div>
                                <div className='movie-card'>
                                    <img src='images/premiere10.avif' />
                                    <h5>Out of Darkness</h5>
                                    <p>English</p>
                                </div>
                            </div>
                        </Carousel>
                        </div>
                    </div>
                </div>
            </div>


            {/* outdoor Events */}
                <div className='px-5 pt-5 pb-3 my-4 outdoor-card'>
                    <div className='p-1' data-aos="fade-right"  data-aos-duration="1000">
                            <h4>Outdoor events</h4>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1000"  >

                        <Carousel showThumbs={false} showStatus={false} showIndicators={false}>
                            <div className='d-flex gap-3 text-start '>
                                <div className='movie-card'>
                                    <img src='images/outdoor1.avif' />
                                    <h5>U1`s Long Drive - Live In Concert Chennai</h5>
                                    <p>YMCA Nandanam: Chennai</p>
                                </div>
                                <div className='movie-card'>
                                    <img src='images/outdoor2.avif' />
                                    <h5>Sunburn Arena Ft. Alan Walker - Chennai</h5>
                                    <p>Venue To Be Announced: Chennai</p>
                                </div>
                                <div className='movie-card'>
                                    <img src='images/outdoor3.avif' />
                                    <h5>Casagrand SunDance</h5>
                                    <p>Casagrand Sundance: Chennai</p>
                                </div>
                                <div className='movie-card'>
                                    <img src='images/outdoor4.avif' />
                                    <h5>Rajasthan Royals vs Punjab Kings</h5>
                                    <p>ACA Stadium, Barsapara: Guwahati</p>
                                </div>
                                <div className='movie-card'>
                                    <img src='images/outdoor5.avif' />
                                    <h5>Mumbai Indians vs Sunrisers Hyderabad</h5>
                                    <p>Wankhede Stadium: Mumbai</p>
                                </div>
                            </div>
                            <div className='d-flex gap-3 text-start text-light'>
                                <div className='movie-card'>
                                    <img src='images/outdoor6.avif' />
                                    <h5>Chess - Chai - Connect</h5>
                                    <p>One Paramount: Chennai</p>
                                </div>
                                <div className='movie-card'>
                                    <img src='images/outdoor7.avif' />
                                    <h5>CHAMAN CHATORA - Gaurav Kapoor`s Comedy Special</h5>
                                    <p>Raja Annamalai Mandram: Chennai</p>
                                </div>
                                <div className='movie-card'>
                                    <img src='images/outdoor8.avif' />
                                    <h5>Happy Ending - A Live Standup Show By Nesan David</h5>
                                    <p>The Music Academy Mini Hall: Chennai</p>
                                </div>
                                <div className='movie-card'>
                                    <img src='images/outdoor9.avif' />
                                    <h5>Oh No! - Standup comedy by Urooj Ashfaq</h5>
                                    <p>Medai - The Stage, Alwarpet: Chennai</p>
                                </div>
                                <div className='movie-card'>
                                    <img src='images/outdoor10.avif' />
                                    <h5>JAGANE THANDHIRAM - A TAMIL STANDUP SHOW</h5>
                                    <p>Music Academy: Chennai</p>
                                </div>
                            </div>
                        </Carousel>
                        </div>
                    </div>
                    <Footer/>
                </div>
                
    );
}

export default Home;