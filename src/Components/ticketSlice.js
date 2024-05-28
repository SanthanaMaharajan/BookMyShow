import { createSlice } from '@reduxjs/toolkit'
import { requiredData } from './main'

export const ticketSlice = createSlice({
    name: "bookMyShow",
    initialState: {
        seatCount:2,
        remainingSeat:0,
        selectedSeats:[],
        selected: true,
        movieData:[...requiredData.data,...requiredData.movies],
        movieArray: requiredData.movies,
        movieArray2: requiredData.data,
        snacks:requiredData.snacksItems,
        seatImg:requiredData.seatImg
    },
    reducers: {
        updateSeatCount:(state,action)=>{
            
                for(let i=0;i<state.movieData[action.payload.movieIndex].theaters[action.payload.theaterIndex].seats.length;i++){
                    for(let j=0;j<state.movieData[action.payload.movieIndex].theaters[action.payload.theaterIndex].seats[i][1].length;j++){
                        state.movieData[action.payload.movieIndex].theaters[action.payload.theaterIndex].seats[i][1][j]={...state.movieData[action.payload.movieIndex].theaters[action.payload.theaterIndex].seats[i][1][j],selected:false}
                    }
                }
                state.selectedSeats=[]
                state.seatCount=action.payload.seat
        },
        bookSelectedSeats:(state,action)=>{
                state.selectedSeats.map((ele)=>{
                    state.movieData[ele.movieIndex].theaters[ele.theaterIndex].seats[ele.rowNumber][1][ele.colNumber]={...state.movieData[ele.movieIndex].theaters[ele.theaterIndex].seats[ele.rowNumber][1][ele.colNumber],status:"Sold"}
                })    
        },
        UpdateSelectedSeats: (state, action) => {
            if(state.seatCount===0){
                state.seatCount=action.payload.seat
                for(let i=0;i<state.movieData[action.payload.movieIndex].theaters[action.payload.theaterIndex].seats.length;i++){
                    for(let j=0;j<state.movieData[action.payload.movieIndex].theaters[action.payload.theaterIndex].seats[i][1].length;j++){
                        state.movieData[action.payload.movieIndex].theaters[action.payload.theaterIndex].seats[i][1][j]={...state.movieData[action.payload.movieIndex].theaters[action.payload.theaterIndex].seats[i][1][j],selected:false}
                    }
                }
                state.selectedSeats=[]
                for(let i=0; i<state.seatCount;i++){
                    if( action.payload.colIndex+i > 28){
                        break;
                    }else{
                        if(state.movieData[action.payload.movieIndex].theaters[action.payload.theaterIndex].seats[action.payload.rowIndex][1][action.payload.colIndex+i].keyy === "empty" || state.movieData[action.payload.movieIndex].theaters[action.payload.theaterIndex].seats[action.payload.rowIndex][1][action.payload.colIndex+i].status ==="Sold") {
                            break;
                        }else{
                            state.selected=action.payload.col.selected
                            state.movieData[action.payload.movieIndex].theaters[action.payload.theaterIndex].seats[action.payload.rowIndex][1][action.payload.colIndex+i]={...state.movieData[action.payload.movieIndex].theaters[action.payload.theaterIndex].seats[action.payload.rowIndex][1][action.payload.colIndex+i],selected:!state.selected}
                            state.remainingSeat=state.remainingSeat+1
                            state.selectedSeats.push({...state.movieData[action.payload.movieIndex].theaters[action.payload.theaterIndex].seats[action.payload.rowIndex][1][action.payload.colIndex+i],selected:!state.selected,rowNumber:action.payload.rowIndex,colNumber:action.payload.colIndex+i,rowAlphabet:state.movieData[action.payload.movieIndex].theaters[action.payload.theaterIndex].seats[action.payload.rowIndex][0],movieIndex:action.payload.movieIndex,theaterIndex:action.payload.theaterIndex})
                        }
                    }
                }
            }else{

                for(let i=0; i<state.seatCount;i++){
                    if( action.payload.colIndex+i > 28){
                        break;
                    }else{
                        if(state.movieData[action.payload.movieIndex].theaters[action.payload.theaterIndex].seats[action.payload.rowIndex][1][action.payload.colIndex+i].keyy === "empty" || state.movieData[action.payload.movieIndex].theaters[action.payload.theaterIndex].seats[action.payload.rowIndex][1][action.payload.colIndex+i].status ==="Sold") {
                            break;
                        }else{
                            state.selected=action.payload.col.selected
                            state.movieData[action.payload.movieIndex].theaters[action.payload.theaterIndex].seats[action.payload.rowIndex][1][action.payload.colIndex+i]={...state.movieData[action.payload.movieIndex].theaters[action.payload.theaterIndex].seats[action.payload.rowIndex][1][action.payload.colIndex+i],selected:!state.selected}
                            state.remainingSeat=state.remainingSeat+1
                            state.selectedSeats.push({...state.movieData[action.payload.movieIndex].theaters[action.payload.theaterIndex].seats[action.payload.rowIndex][1][action.payload.colIndex+i],selected:!state.selected,rowNumber:action.payload.rowIndex,colNumber:action.payload.colIndex+i,rowAlphabet:state.movieData[action.payload.movieIndex].theaters[action.payload.theaterIndex].seats[action.payload.rowIndex][0],movieIndex:action.payload.movieIndex,theaterIndex:action.payload.theaterIndex})
                       } 
                    }
                } 
            }
            state.seatCount=state.seatCount-state.remainingSeat
            state.remainingSeat=0
        }
    }
})

export const { UpdateSelectedSeats, updateSeatCount, bookSelectedSeats } = ticketSlice.actions
export default ticketSlice.reducer