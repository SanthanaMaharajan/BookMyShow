import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Home'
import MovieDetails from './movieDetails'
import Theaters from './Theaters'
import Venue from './Venue'
import CheckOut from './CheckOut'
import Ticket from './Ticket'

function Router() {
    return (
        <BrowserRouter basename='/'>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/movie" element={<MovieDetails/>}></Route>
                <Route path="/movie/theaters" element={<Theaters/>}></Route>
                <Route path="/movie/theaters/booktickets" element={<Venue/>}></Route>
                <Route path="/movie/theaters/booktickets/checkout" element={<CheckOut/>}></Route>
                <Route path="/movie/theaters/booktickets/booking-confirmation" element={<Ticket/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router