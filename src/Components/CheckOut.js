import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Carousel } from 'react-responsive-carousel';

import { BiChevronLeft } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { bookSelectedSeats } from './ticketSlice';

function CheckOut() {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch=useDispatch()
    const { snacks, movieData, selectedSeats } = useSelector((state) => state.mainData)


    const theaterIndex = location.state.theaterIndex
    const movieIndex= location.state.movieIndex
    const movie = location.state.movie
    const timing = location.state.timing
    const date = location.state.date
    const pricing = location.state.pricing
    const newDate = new Date()
    const newTime = (newDate.getHours().toString()) + ((newDate.getMinutes() < 9) ? '0' + newDate.getMinutes() : newDate.getMinutes().toString())
    const [currentTime, setCurrentTime] = useState(date !== newDate.getDate() ? 0 : newTime)
    const currentDate = newDate.getDate() <= 9 ? '0' + newDate.getDate() : newDate.getDate()
    const month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
    const currentMonth = month[newDate.getMonth()]
    const seat = location.state.seat
    const convenience = seat * 30
    const tax = (seat * 30) * 18 / 100


    const makePayment=()=>{
        const amt= ((seat * pricing) + convenience + tax).toFixed(2)
		const options = {
			key: "rzp_test_GiBXeMfw5P7lga", 
            key_secret:"Fxfl521jNeK3IUFvjY7cIIN3", 
			amount: amt*100 ,  
			currency:"INR",
			name: "Book My Show Payment",  
			description: "Test Transaction",
			image: "https://in.bmscdn.com/bmsin/new/BMS_logo_new.png", 
			handler: function (response){
				if(response.razorpay_payment_id!==""){
                    dispatch(bookSelectedSeats())
                    navigate("/movie/theaters/booktickets/booking-confirmation",{state:{response,movieIndex,theaterIndex,movie,seat,pricing,date,timing}})
                }else{
                    alert("Payment failed! retry payment.")
                }
			
            }
        }
          const rzpay = new window.Razorpay(options);
            rzpay.open(); 
        }


    return (
        <div >
            {/* Header */}

            <div className="book-header">
                <span className="st-back-btn" onClick={() => navigate(-1)}>
                    <BiChevronLeft className='fs-2' />
                </span>
                <div className="header-container">
                    <h2>
                        <div>
                            <span className="__event-name"><a href=''>{movie.name}</a></span>
                        </div>
                        <div>
                            <span className="__event-details gap-2">
                                <span>{movie.theaters[theaterIndex].theaterName}</span>
                                <span>|</span>
                                <span>{date !== newDate.getDate() ? "" : "Today,"} {date !== newDate.getDate() ? (date <= 9 ? "0" + date : date) : currentDate} {currentMonth}, {timing}</span>
                            </span>
                        </div>
                    </h2>
                </div>
                <a className="__dismiss" onClick={() => navigate(-1)}>
                    <RxCross2 className='fs-5 text-muted' />
                </a>
            </div>

            {/* Body */}
            <div className='snack-body'>
                <div >

                    <Row className='p-2'>
                        <Col xs={12} md={8} >
                            <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showThumbs={false} className='mt-2'>
                                <div>
                                    <img src="/images/snacksban1.avif" />
                                </div>
                                <div>
                                    <img src="/images/snacksban2.avif" />
                                </div>
                            </Carousel>
                            <div className='bg-light mt-2 ms-2'>
                                <div className="fnb-section">
                                    <div className="block">
                                        <h2 className="__heading-text-plus-red">Grab a <span>bite!</span></h2>
                                        <span className="sub-head fc-text">Prebook Your Meal and<span> Save More!</span></span>
                                        <div className="fnb-filters">
                                            <span className="cat-filter _active-cat-filter">ALL</span>
                                            <span className="cat-filter" >POPCORN</span>
                                            <span className="cat-filter" >SNACKS</span>
                                            <span className="cat-filter" >COMBOS</span>
                                            <span className="cat-filter" >BEVERAGES</span>
                                            <span className="cat-filter" >DESSERTS</span>
                                        </div>
                                        <div className='fnb-container'>
                                            {
                                                snacks && snacks.map((snack, index) => {
                                                    return (

                                                        <div className="food-card-list" key={index}>
                                                            <div className="food-card-image">
                                                                <img src={snack.snackImg} width="100px" height="115px" />
                                                            </div>
                                                            <div className="food-card-details">
                                                                <div className="title-wrapper">
                                                                    <h4 className="catd-title">{snack.snackType}</h4>
                                                                    <h6 className="card-info">{snack.snackPackage}</h6>
                                                                </div>
                                                                <div className="card-amount">
                                                                    <div className="amount">
                                                                        ₹{snack.snackPrice}
                                                                    </div>
                                                                    <div className="fnb-add">
                                                                        <div className="add-cta">
                                                                            Add
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4} className='bg-light mt-2'>
                            <div>
                                <div className="order-summary bg-light">
                                    <span className="__circle-left"></span>
                                    <span className="__circle-right"></span>
                                    <h2>Booking Summary</h2>
                                    <div className='d-flex justify-content-between mt-3 px-2'>
                                        <span className="__ticket-cat">
                                            <span className="__seat-type">{movie.theaters[theaterIndex].pricing[0].PriceDesc}-{
                                                selectedSeats.map((ele, index) => {
                                                    return (
                                                        <span key={index}> |{ele.rowAlphabet}{ele.number}| </span>
                                                    )
                                                })
                                            }<span> ( {seat} Tickets )</span></span>
                                        </span>
                                        <span className="__seat-price">Rs. {seat * pricing}</span>
                                    </div>
                                    <div className='d-flex justify-content-between px-2 pt-3'>
                                        <span className="txt_brkp">Convenience fees</span>
                                        <span>Rs. {convenience + tax}</span>
                                    </div>
                                    <div className='d-flex justify-content-between convfee pt-2 px-4'>
                                        <span> Base Amount</span>
                                        <span>Rs. {convenience}</span>
                                    </div>
                                    <div className='d-flex justify-content-between convfee py-1 px-4'>
                                        <span> CIntegrated GST (IGST) @ 18%</span>
                                        <span>Rs. {tax}</span>
                                    </div>
                                    <div className="total-section px-2">
                                        <span>Sub total</span>
                                        <span>Rs. {((seat * pricing) + convenience + tax).toFixed(2)}</span>
                                    </div>
                                    <div className="d-flex justify-content-between px-2 mt-5 amt-payable">
                                        <span>Amount Payable</span>
                                        <span className="__amount-payable">Rs. {((seat * pricing) + convenience + tax).toFixed(2)}</span>
                                    </div>
                                    <div>
                                        <div className='final-btn' onClick={()=>{makePayment()}}>
                                            <div>TOTAL: Rs. {((seat * pricing) + convenience + tax).toFixed(2)}</div>
                                            <div>Proceed</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </div>
            </div>
        </div>
    );
}

export default CheckOut;