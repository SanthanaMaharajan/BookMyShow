import React from 'react'
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Container } from "@mui/material"
import { BiChevronLeft } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';
import { LiaPencilAltSolid } from 'react-icons/lia';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateSelectedSeats, updateSeatCount } from './ticketSlice';


function Venue() {
    
    const location = useLocation()
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {movieData,seatCount,seatImg}=useSelector((state)=>state.mainData)
    

    const theaterIndex = location.state.theaterIndex
    const movie=location.state.movie
    const movieIndex= location.state.movieIndex
    const [timing, setTiming] = useState(location.state.timing)
    const date= location.state.date
    const pricing= movieData[movieIndex].theaters[theaterIndex].pricing[0].CurPrice
    const newDate = new Date()
    const newTime = (newDate.getHours().toString()) + ((newDate.getMinutes() < 9) ? '0' + newDate.getMinutes() : newDate.getMinutes().toString())
    const currentTime = date!==newDate.getDate()? 0 : newTime
    const currentDate = newDate.getDate() <= 9 ? '0' + newDate.getDate() : newDate.getDate()
    const month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
    const currentMonth = month[newDate.getMonth()]
    const [seat, setSeat] = useState(2)

    const [show, setShow] = useState(true);

    const handleClose = (seat,movieIndex,theaterIndex) => {
        setShow(false)
        dispatch(updateSeatCount({seat,movieIndex,theaterIndex}))
    };
    const handleShow = () => setShow(true);

    const handleTicket=(movieIndex,theaterIndex,col,rowIndex,colIndex,seat)=>{
        dispatch(UpdateSelectedSeats({movieIndex,theaterIndex,col,rowIndex,colIndex,seat}))
    }

    const handlePayment=()=>{
        navigate("/movie/theaters/booktickets/checkout",{state:{movieIndex,theaterIndex,movie,seat,pricing,date,timing}})
    }
    

    return (
        <div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                centered
                keyboard={false}
            >

                <div className="popover qty-modal" >
                    <div className="header" id="qty-sel-title-text">How Many Seats?</div>
                    <div className="body" id="qty-sel-title-body">

                        <div className="__avatar">
                            {
                              seatImg.map((e,index)=>{
                                return(
                                    <div className="hidicon" key={index} style={{ display: seat === index+1 ? "inline-block" : "none" }} >
                                        <img alt="" src={e.path} />
                                    </div>
                                )
                              }) 
                            }
                        </div>

                        <div className="__list">
                            <ul>
                                <li className={seat === 1 ? "_active" : ""} onClick={() => setSeat(1)}>1</li>
                                <li className={seat === 2 ? "_active" : ""} onClick={() => setSeat(2)}>2</li>
                                <li className={seat === 3 ? "_active" : ""} onClick={() => setSeat(3)}>3</li>
                                <li className={seat === 4 ? "_active" : ""} onClick={() => setSeat(4)}>4</li>
                                <li className={seat === 5 ? "_active" : ""} onClick={() => setSeat(5)}>5</li>
                                <li className={seat === 6 ? "_active" : ""} onClick={() => setSeat(6)}>6</li>
                                <li className={seat === 7 ? "_active" : ""} onClick={() => setSeat(7)}>7</li>
                                <li className={seat === 8 ? "_active" : ""} onClick={() => setSeat(8)}>8</li>
                                <li className={seat === 9 ? "_active" : ""} onClick={() => setSeat(9)}>9</li>
                                <li className={seat === 10 ? "_active" : ""} onClick={() => setSeat(10)}>10</li>
                            </ul>
                        </div>
                        <div className="cat-list">
                            <div className="category-list">
                                <div className="cat-info">
                                    <span className="category">{movieData[movieIndex].theaters[theaterIndex].pricing[0].PriceDesc}</span>
                                    <span className="cat-price">Rs. {pricing}</span>
                                    <span className="cat-status _available">{movieData[movieIndex].theaters[theaterIndex].pricing[0].Status}</span>
                                </div>
                            </div>
                        </div>
                        <div className="btn-bar">
                            <div id="proceed-Qty" className="bar-btn _primary _full-width _centered" onClick={()=>handleClose(seat,movieIndex,theaterIndex)} data-value="">
                                Select Seats
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            {/* Header */}
            <div className="book-header">
                <span className="st-back-btn" onClick={()=>navigate(-1)}>
                    <BiChevronLeft className='fs-2' />
                </span>
                <div className="header-container">
                    <h2>
                        <div>
                            <span className="__event-name"><a href=''>{movie.name}</a></span>
                        </div>
                        <div>
                            <span className="__event-details gap-2">
                                <span>{movieData[movieIndex].theaters[theaterIndex].theaterName}</span>
                                <span>|</span>
                                <span>{date!==newDate.getDate()? "" : "Today,"} {date!==newDate.getDate()? (date<=9? "0"+date : date) : currentDate} {currentMonth}, {timing}</span>
                            </span>
                        </div>
                    </h2>
                    <div className="event-components">
                        <div >
                            <div className="no-of-tickets-button" onClick={handleShow}>
                                <span >{seat}</span>
                                <span >Tickets</span>
                                <div>
                                    <LiaPencilAltSolid className='fs-6' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="__dismiss" onClick={()=>navigate(-1)}>
                    <RxCross2 className='fs-5 text-muted' />
                </a>
            </div>
            <div className="showtime-section">
                <div className="showtime-pill-container d-flex gap-3">
                    {
                        movieData[movieIndex].theaters[theaterIndex].theaterTimingString.map((show, index) => {
                            return (
                                <a className={(show !== timing) ? "showtime-pill" : "showtime-pill _active"} key={index} onClick={() => setTiming(show)} style={{ display: (movieData[movieIndex].theaters[theaterIndex].theaterTiming[index]) > currentTime ? "flex" : "none" }}>
                                    <div className="details">
                                        <div className="text">
                                            {show}
                                        </div>
                                    </div>
                                    <div className="attribute">{movieData[movieIndex].theaters[theaterIndex].Attributes}</div>
                                </a>
                            )
                        })
                    }
                </div>
            </div>



            {/* theaterSeat */}
            <Container maxWidth="lg" className='mt-4' sx={{ overflowY: "auto", height: "70vh" }}>

                <Box sx={{ backgroundColor: "#f2f2f2" }} py={4}>
                    <Paper sx={{ width: '90%', margin: "auto" }}>
                        <TableContainer>
                            <Table>
                                <TableBody p={3}>
                                    {
                                        movieData[movieIndex].theaters[theaterIndex].seats.map((row, index) => {
                                            return (
                                                <TableRow key={index} className='p-3'>
                                                    <TableCell className="seatRow" sx={{ borderWidth: "0px" }}>{row[0]}</TableCell>
                                                    {
                                                        row[1].map((col, i) => {
                                                            return col.keyy === "empty" ?

                                                                <TableCell sx={{ padding: "0px", borderWidth: "0px" }} key={i}>
                                                                    <Box className="Emptyspace">

                                                                    </Box>
                                                                </TableCell>
                                                                :
                                                                <TableCell className="hoverSeat" sx={{ padding: "0px", borderWidth: "0px" }} key={i} onClick={()=>handleTicket(movieIndex,theaterIndex,col,index,i,seat)}>
                                                                    <Box id={col.keyy} className={col.status==="Available" ? (col.selected===true? "seat-selected" : "seatI"): "seat-booked"}>
                                                                        <a style={{ cursor: "pointer" }} >{col.number}</a>
                                                                    </Box>
                                                                </TableCell>
                                                        })
                                                    }
                                                </TableRow>
                                            )
                                        })
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <div className='d-flex justify-content-center my-4 py-4'>
                            <img alt="" src='/images/screen.svg'/>
                        </div>
                        
                    </Paper>
                </Box>
            </Container>

            
            {/* legend section */}

            <div className="seat-legends-wrapper">
                <div className="seat-legend-container">
                    <div className="seat-legend-box status-1">
                    </div>
                    <div className="seat-legend-text">
                        Available
                    </div>
                    <div className="seat-legend-info status-1">
                    </div>
                </div>
                <div className="seat-legend-container">
                    <div className="seat-legend-box status-88">
                    </div>
                    <div className="seat-legend-text">
                        Selected
                    </div>
                    <div className="seat-legend-info status-88">
                    </div>
                </div>
                <div className="seat-legend-container">
                    <div className="seat-legend-box status-2"></div>
                    <div className="seat-legend-text">Sold</div>
                    <div className="seat-legend-info status-2">
                    </div>
                </div>
            </div>

            {/* Price Modal */}

            <div className="__seat-action" style={{display: seatCount==0? "flex" : "none" }}>
                <a href="" className="bar-btn _primary" onClick={()=>handlePayment()}>Pay <span>Rs. {seat*pricing}</span></a>
            </div>

        </div>
    );
}

export default Venue;