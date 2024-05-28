import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { useLocation, useNavigate } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import { HiOutlineMoon } from "react-icons/hi2";
import { PiSunHorizonThin } from "react-icons/pi";
import { PiSunThin } from "react-icons/pi";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import "react-multi-carousel/lib/styles.css";
import { Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { BiChevronDown } from 'react-icons/bi';
import { TfiMobile } from "react-icons/tfi";
import { IoFastFood } from "react-icons/io5";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';



function Theaters() {
    const location = useLocation()
    const navigate=useNavigate()


    const BootstrapTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} arrow classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.arrow}`]: {
            color: "#fff",

        },
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: "#fff",
            color: 'rgba(0, 0, 0, 0.87)',
            boxShadow: "0 0 10px 1px #aaa"
        },
    }));


    const bookTickets = ( theaterIndex, movieIndex, movie, timing,date) => {
        navigate('/movie/theaters/booktickets' ,{state:{theaterIndex,movieIndex,movie,timing,date}})
    }

    const handleDate=(time,date,id)=>{
        setCurrentTime(time)
        setShowDate(date)
        setId(id)
    }
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEle, setAnchorEle] = React.useState(null);
    const open = Boolean(anchorEl);
    const openEle = Boolean(anchorEle);
    const handleClickMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };
    const handleClick = (event) => {
        setAnchorEle(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEle(null);
    };


    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 7
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3
        }
    };
    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: '#ff6d75',
        }
    });
    const [id,setId]=useState(1)
    const date = new Date()
    const newTime = (date.getHours().toString()) +((date.getMinutes()<9)? '0'+date.getMinutes() :date.getMinutes().toString())
    const [currentTime, setCurrentTime] = useState(newTime)
    const [maxTime, setMaxTime] = useState(2400)
    const days0fWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    const currentDate = Number(date.getDate() <= 9 ? '0' + date.getDate() : date.getDate())>30? Number(date.getDate() <= 9 ? '0' + date.getDate() : date.getDate())%30 : Number(date.getDate() <= 9 ? '0' + date.getDate() : date.getDate())
    const [showDate,setShowDate]=useState(currentDate)
    const month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
    const currentMonth = month[date.getMonth()]

    const filterTiming=(e,minTime,maxTime)=>{
        if (e.target.checked===true) {
            if(id==1){
                if(minTime>currentTime){
                    setCurrentTime(minTime)
                    setMaxTime(maxTime)
                }else{
                    setMaxTime(maxTime)
                }
            }else{
                setCurrentTime(minTime)
                setMaxTime(maxTime)
            }
            
          } else {
            setCurrentTime(newTime)
            setMaxTime(2400)
          }
    }
    
    const [search,setSearch]=useState('')

    const handleSearch=(e)=>{
        e.preventDefault()
        setSearch(e.target.value)
    }

    return (
        <div>
            <Header />

            <div className='px-4 pt-3'>
                <h3>{location.state.movie.name}-{location.state.movie.inLanguage}</h3>
                <small className='certificate-circle'>{location.state.movie.certificate}</small>
                <small className='border-dark border rounded-pill p-1 mx-3 mt-4'>{location.state.movie.genre}</small>

            </div>
            <hr className='text-secondary' />
            <div className='shadow-sm  d-flex justify-content-between align-items-center'>

                <div className=' w-25 px-4'>
                    <div className=' calendar py-2'>
                        <Carousel responsive={responsive} >
                            <div className= {id==1? 'active date-set': 'date-set'} onClick={() => handleDate(newTime,currentDate,1)}>
                                <div>{days0fWeek[date.getDay()]}</div>
                                <div className='date-number'>{(currentDate) <= 9 ? '0' + currentDate : currentDate}</div>
                                <div>{currentMonth}</div>
                            </div>
                            <div className={id==2? 'active date-set': 'date-set'} onClick={() => handleDate(0,(currentDate + 1),2)}>
                                <div>{days0fWeek[date.getDay() + 1 > 6 ? (date.getDay() + 1) % 7 : date.getDay() + 1]}</div>
                                <div className='date-number'>{(currentDate + 1) <= 9 ? '0' + (currentDate + 1) : currentDate + 1}</div>
                                <div>{currentMonth}</div>
                            </div>
                            <div className={id==3? 'active date-set': 'date-set'} onClick={() => handleDate(0,(currentDate + 2),3)}>
                                <div>{days0fWeek[date.getDay() + 2 > 6 ? (date.getDay() + 2) % 7 : date.getDay() + 2]}</div>
                                <div className='date-number'>{(currentDate + 2) <= 9 ? '0' + (currentDate + 2) : currentDate + 2}</div>
                                <div>{currentMonth}</div>
                            </div>
                            <div className={id==4? 'active date-set': 'date-set'} onClick={() => handleDate(0,(currentDate + 3),4)}>
                                <div>{days0fWeek[date.getDay() + 3 > 6 ? (date.getDay() + 3) % 7 : date.getDay() + 3]}</div>
                                <div className='date-number'>{(currentDate + 3) <= 9 ? '0' + (currentDate + 3) : currentDate + 3}</div>
                                <div>{currentMonth}</div>
                            </div>
                            <div className={id==5? 'active date-set': 'date-set'} onClick={() => handleDate(0,(currentDate + 4),5)}>
                                <div>{days0fWeek[date.getDay() + 4 > 6 ? (date.getDay() + 4) % 7 : date.getDay() + 4]}</div>
                                <div className='date-number'>{(currentDate + 4) <= 9 ? '0' + (currentDate + 4) : currentDate + 4}</div>
                                <div>{currentMonth}</div>
                            </div>
                            <div className={id==6? 'active date-set': 'date-set'} onClick={() => handleDate(0,(currentDate + 5),6)}>
                                <div>{days0fWeek[date.getDay() + 5 > 6 ? (date.getDay() + 5) % 7 : date.getDay() + 5]}</div>
                                <div className='date-number'>{(currentDate + 5) <= 9 ? '0' + (currentDate + 5) : currentDate + 5}</div>
                                <div>{currentMonth}</div>
                            </div>
                            <div className={id==7? 'active date-set': 'date-set'} onClick={() => handleDate(0,(currentDate + 6),7)}>
                                <div>{days0fWeek[date.getDay() + 6 > 6 ? (date.getDay() + 6) % 7 : date.getDay() + 6]}</div>
                                <div className='date-number'>{(currentDate + 6) <= 9 ? '0' + (currentDate + 6) : currentDate + 6}</div>
                                <div>{currentMonth}</div>
                            </div>

                        </Carousel>
                    </div>
                </div>

                <div className='theater-filter d-flex w-50 justify-content-end'>
                    <div className='border-top-0 border-bottom-0 border border-secondary p-3'>
                        <Typography
                            id="basic-button "
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClickMenu}
                            sx={{ fontSize: "12px" }}
                        >
                            Filter Price Range <BiChevronDown />
                        </Typography>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleCloseMenu}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                            sx={{ fontSize: "12px", mt: '25px' }}
                        >
                            <MenuItem sx={{ fontSize: "12px" }}><input type='checkbox' value={100} /> <label className='px-3'>Rs 0-100</label></MenuItem>
                            <MenuItem sx={{ fontSize: "12px" }}><input type='checkbox' value={200} /> <label className='px-3'>Rs 101-200</label></MenuItem>
                        </Menu>
                    </div>
                    <div className='border-top-0 border-bottom-0 border border-start-0  border-secondary p-3'>
                        <Typography
                            id="basic-button"
                            aria-controls={openEle ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={openEle ? 'true' : undefined}
                            onClick={handleClick}
                            sx={{ fontSize: "12px" }}
                        >
                            Filter Show Timing <BiChevronDown />
                        </Typography>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEle}
                            open={openEle}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                            sx={{ fontSize: "12px", mt: '25px' }}
                        >
                            <MenuItem sx={{ fontSize: "12px" }}><input type='checkbox' value={1200} onChange={(e)=>filterTiming(e,0,1200)} /> <label className='ps-3'><small>Morning <span className='text-secondary'>12:00-11:59AM <PiSunHorizonThin /></span></small></label></MenuItem>
                            <MenuItem sx={{ fontSize: "12px" }}><input type='checkbox' value={1600} onChange={(e)=>filterTiming(e,1200,1600)}/> <label className='ps-3'><small>Afternoon <span className='text-secondary'>12:00-03:59PM <PiSunThin /></span></small></label></MenuItem>
                            <MenuItem sx={{ fontSize: "12px" }}><input type='checkbox' value={1900} onChange={(e)=>filterTiming(e,1600,1900)}/> <label className='ps-3'><small>Evening <span className='text-secondary'>04:00-06:59PM <PiSunHorizonThin /></span></small></label></MenuItem>
                            <MenuItem sx={{ fontSize: "12px" }}><input type='checkbox' value={2400} onChange={(e)=>filterTiming(e,1900,2400)}/> <label className='ps-3'><small>Night <span className='text-secondary'>07:00-11:59PM <HiOutlineMoon /></span></small></label></MenuItem>

                        </Menu>
                    </div>
                    <div className=' d-flex gap-3 align-items-center search-input py-2 px-3 border-1'>
                            <SearchIcon className='search-lens' />
                        <input type='text' placeholder='Search for a cinema' className='border-0' onChange={(e)=>handleSearch(e)}/>
                    </div>
                </div>
            </div>
            <div className='theater-container'>
                <div className='theaters-display'>
                    <div>
                        <div className="d-flex justify-content-end border-bottom">
                            <div className="showtimes-legend p-2">
                                <div className="legend-icon"></div>
                                <div className="legend-text">Available</div>
                            </div>
                            <div className="showtimes-legend p-2">
                                <div className="legend-icon fast"></div>
                                <div className="legend-text">Fast Filling</div>
                            </div>
                            <div className="showtimes-legend p-2">
                                <div className="subtitle">LAN</div>
                                <div className="legend-text">Subtitles Language</div>
                            </div>
                        </div>
                    </div>


                    {
                        location.state.movie.theaters.filter((item)=>{
                            return search.toLowerCase()===""?item:item.theaterName.toLowerCase().includes(search)
                         }).map((theater, theaterIndex) => {
                            return (
                                <div className='gap-4 theater-wrapper p-2' key={theaterIndex} style={{ display: (theater.theaterTiming[theater.theaterTiming.length-1])>currentTime ? "flex" : "none" }}>
                                    <div className='d-flex gap-3 p-3'>
                                        <div>
                                            <StyledRating
                                                name="customized-color"
                                                defaultValue={0}
                                                getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                                precision={1}
                                                icon={<FavoriteIcon fontSize="inherit" />}
                                                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                                                max={1}
                                                size={'medium'}
                                            />
                                        </div>
                                        <div className="venue-container ">
                                            <div className="venue-title d-flex">
                                                <a className="venue-name">{theater.theaterName}</a>
                                                <div className="info-section">
                                                    <img src="https://in.bmscdn.com/moviemode/cinemaphotoshowcase/info.png" className="venue-info-icon" />
                                                    <div className="venue-info-text">INFO</div>
                                                </div>
                                            </div>
                                            <div className="unpaid-mticket-wrapper d-flex gap-4">
                                                <div className="mticket-info" style={{ display: (theater.ETicket) == "Y" ? "block" : "none" }} >
                                                    <span className="icon">
                                                        <TfiMobile className='mobile-icon' />
                                                    </span>
                                                    <label>M-Ticket</label>
                                                </div>
                                                <div className="fnb-info " style={{ display: (theater.IsFoodSales) == "Y" ? "block" : "none" }}>
                                                    <span className="icon">
                                                        <IoFastFood className='food-icon' />
                                                    </span>
                                                    <label>Food &amp; Beverage</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="showtimes-details-container ">

                                        <div className="showtime-pill-wrapper pe-2">

                                            {
                                                theater.theaterTimingString.map((timing, index) => {
                                                    return (
                                                        <div className="showtime-pill-container" key={index} style={{ display: (theater.theaterTiming[index])>currentTime && (theater.theaterTiming[index])<=maxTime ? "block" : "none" }} onClick={() => { bookTickets(theaterIndex, location.state.movieIndex, location.state.movie, timing, showDate) }}>
                                                            <BootstrapTooltip placement="top" title={
                                                                <div className='d-flex gap-4 p-2'>
                                                                    {theater.pricing.map((price, index) => {
                                                                        return (
                                                                            <div className='text-center' key={index}>
                                                                                <p>Rs. {price.CurPrice}</p>
                                                                                <small className='d-block'>{price.PriceDesc}</small>
                                                                                <small className={(price.Status) == "Sold" ? 'text-danger' : "text-success"}>{price.Status}</small>
                                                                            </div>
                                                                        )
                                                                    })}

                                                                </div>
                                                            }>
                                                                <a className="showtime-pill" >
                                                                    <div className="details">
                                                                        <div className="text">
                                                                            {timing}
                                                                        </div>
                                                                    </div>
                                                                    <div className="attribute">{theater.Attributes}</div>
                                                                </a>
                                                            </BootstrapTooltip>
                                                        </div>
                                                    )
                                                })
                                            }

                                        </div>
                                        <div className="venue-flags">
                                            <span className="gold-icon"></span>
                                            <span className="venue-flags-details">{theater.VenueInfoMessage}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>

            <Footer />
        </div >
    )
}

export default Theaters