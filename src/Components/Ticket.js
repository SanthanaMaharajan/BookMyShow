import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { useLocation, useNavigate } from 'react-router-dom';
import { LuSofa } from "react-icons/lu";
import { useSelector } from 'react-redux';

function Ticket() {
    const location = useLocation()
    const navigate = useNavigate()
    const { selectedSeats } = useSelector((state) => state.mainData)
    const theaterIndex = location.state.theaterIndex
    const movie = location.state.movie
    const timing = location.state.timing
    const date = location.state.date
    const pricing = location.state.pricing
    const newDate = new Date()
    const newTime = (newDate.getHours().toString()) + ((newDate.getMinutes() < 9) ? '0' + newDate.getMinutes() : newDate.getMinutes().toString())
    const currentDate = newDate.getDate() <= 9 ? '0' + newDate.getDate() : newDate.getDate()
    const month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
    const currentMonth = month[newDate.getMonth()]
    const seat = location.state.seat
    const convenience = seat * 30
    const tax = (seat * 30) * 18 / 100
    return (
        <div>
            <Navbar className="bg-body-tertiary px-5 shadow d-flex justify-content-between align-items-center">

                <Navbar.Brand>
                    <img
                        src="https://in.bmscdn.com/bmsin/new/BMS_logo_new.png"
                        className="d-inline-block align-bottom"
                        alt="BookMyShow logo"
                    />

                </Navbar.Brand>
                <p className="fw-bolder">Reference Number : #{location.state.response.razorpay_payment_id}</p>

            </Navbar>
            <Container>
                <div className="thanks-cont">
                    <img src="/images/tick.gif" alt="" />
                    <h2>Thank you for your purchase!</h2>
                </div>
                <div className="ticket-cont">
                    <div>
                        <img src={movie.image} alt="" />
                    </div>
                    <div>
                        <h3>{movie.name}</h3>
                        <div>
                            <span className="ticket-event">
                                <span>{movie.theaters[theaterIndex].theaterName}</span>
                                <br />
                                <span>{date !== newDate.getDate() ? "" : "Today,"} {date !== newDate.getDate() ? (date <= 9 ? "0" + date : date) : currentDate} {currentMonth}, {timing}</span>
                            </span>
                        </div>
                        <div className='mb-3'>
                            <span className="pe-3 fs-4"><LuSofa/></span>
                            <span className="__ticket-category">
                                <span className="__seat-list">{movie.theaters[theaterIndex].pricing[0].PriceDesc}-{
                                    selectedSeats.map((ele, index) => {
                                        return (
                                            <span key={index}> |{ele.rowAlphabet}{ele.number}| </span>
                                        )
                                    })
                                }<span> ( {seat} Tickets )</span></span>
                            </span>
                        </div>
                        <div>
                            <p>Payment Method : Razorpay Payment Gateway</p>
                            <p>Payment Reference Number : #{location.state.response.razorpay_payment_id}</p>
                        </div>
                        <div className="d-flex justify-content-between px-2 mt-5 fw-bold amt-payable">
                            <span>Amount Paid</span>
                            <span className="__amount-payable">Rs. {(seat * pricing) + convenience + tax}</span>
                        </div>
                        <div>
                            <button className='back-to-home' onClick={()=>navigate("/")}>Back to home</button>
                        </div>
                    </div>
                    <div>
                        <img src="/images/qr.png" className="qr-img" alt=""/>

                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Ticket;