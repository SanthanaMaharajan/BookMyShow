import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Carousel } from 'react-responsive-carousel';




function MovieDetails() {

    const location = useLocation()
    const navigate=useNavigate()
    const movieBackGround = {
        backgroundImage: location.state.movie.bgImage,
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "right center",
        color: "white"
    }

    const showTheaters=(movie,movieIndex)=>{
        navigate("/movie/theaters",{state:{movie,movieIndex}})
    }
    return (
        <div>
            <Header />
            <div className='bg-dark' >
                <div style={movieBackGround} className='d-flex align-items-center justify-content-center'>
                    <div className='p-5'>
                        <img src={location.state.movie.image} className='poster-image' />
                        <small className='text-center p-1 d-block dark-back'>In cinemas</small>
                    </div>
                    <div>
                        <h1>{location.state.movie.name}</h1>
                        <Button variant="light rounded-0 d-block my-3 text-start">{location.state.movie.dimensions}</Button>
                        <Button variant="light rounded-0 d-block my-3">{location.state.movie.inLanguage}</Button>
                        <p className='my-4 '>{location.state.movie.duration}<span className='px-3'>•</span>{location.state.movie.genre}<span className='px-3'>•</span>{location.state.movie.certificate}<br/>{location.state.movie.datePublished} </p>
                        <Button variant="danger px-5" size="lg" onClick={()=>showTheaters(location.state.movie,location.state.movieIndex)}>Book Tickets</Button>
                    </div>
                    <div className='w-50'></div>
                </div>
            </div>
            <div className="py-3 px-5 shadow position-sticky top-0 d-flex justify-content-between align-items-center sticky-header mb-5 bg-light">
                <h3>{location.state.movie.name}</h3>
                <Button variant="danger px-5" size="lg"  onClick={()=>showTheaters(location.state.movie,location.state.movieIndex)}>Book Tickets</Button>
            </div>
            <div className='px-5 my-3'>
                <div className='py-4 '>
                    <h4 className='fw-bold'>About the movie</h4>
                    <p className='py-4 w-75'>{location.state.movie.description}</p>
                    <hr className='text-secondary' />
                </div>

                <div className='py-4'>
                    <h4 className='fw-bold'>Cast</h4>
                    <div className='cast-container d-flex gap-5 py-4'>
                        {
                            location.state.movie.actor.map((actor, index) => {
                                return (
                                    <div key={index} className='d-flex align-items-center justify-content-center flex-column'>
                                        <img src={actor.image} />
                                        <p className='text-center pt-4'>{actor.name}<br /> <span className='text-secondary text-center'>{actor.type}</span></p>

                                    </div>
                                )
                            })
                        }

                    </div>
                    <hr className='text-secondary' />
                </div>
                <div className='py-4'>
                    <h4 className='fw-bold'>Crew</h4>
                    <div className='cast-container  gap-5 py-4 d-flex'>
                        <div className='d-flex align-items-center justify-content-center flex-column'>
                            <img src={location.state.movie.director.image} />
                            <p className='text-center pt-4'>{location.state.movie.director.name}<br /> <span className='text-secondary text-center'>{location.state.movie.director.type}</span></p>
                        </div> 
                        <div className='d-flex align-items-center justify-content-center flex-column'>
                            <img src={location.state.movie.musicBy.image} />
                            <p className='text-center pt-4'>{location.state.movie.musicBy.name}<br /> <span className='text-secondary text-center'>{location.state.movie.musicBy.type}</span></p>
                        </div>
                    </div>
                    <hr className='text-secondary' />
                </div>
                <div className='py-3 event-card'>
                    <div className='pb-3 px-1'>
                        <h4>You might also like</h4>
                    </div>
                    <div>
                    <Carousel showThumbs={false} showStatus={false} showIndicators={false}>
                            <div className='d-flex gap-3 text-start'>
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
                            <div className='d-flex gap-3 text-start'>
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
            <Footer />
        </div>
    )
}

export default MovieDetails