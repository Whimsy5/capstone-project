import React, { useReducer } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Menu from './components/Menu'
import Review from './components/Review'
import About from './components/About'
import Footer from './components/Footer'
import ReserveTable from './components/ReserveTable'
import { Routes, Route } from 'react-router-dom'
import Confirmed from './components/Confirmed'
import { useState } from 'react'

 const reducer = (state, action) => {
    if  (action.type === '09/17/2025') return {availableTimes: state.availableTimes + 1}
      
        
        return state;
    }

const App = () => {
  const [availableTimes, setAvailableTimes] = useState([
    '17:00', '18:00', '19:00', '20:00', '21:00'
  ])

  const [today, setToday] = useState('')
 
  
  const initializeTimes = {availableTimes: '17:00'}

  const fetchData = () => {
    fetch('https://raw.githubusercontent.com/courseraap/capstone/main/api.js')
    .then (data => setToday (data))
  }

  const [state, dispatch] = useReducer(reducer, initializeTimes)

  /*const handleAvailableTimes = (e) => {
    setAvailableTimes(availableTimes)
  }*/

  return (
    <>





      <Navbar />

      <main>

        <Routes>

          <Route path="/home" element={<Home />}></Route>
          <Route path="/reservetable" element={<ReserveTable options={availableTimes}  dispatch={dispatch} />}></Route>


          <Route path="/confirmed" element={<Confirmed />}></Route>

        </Routes>

        <div id='home'>
          <Home />
        </div>

        <div id='menu'>
          <Menu />
        </div>

        <div id='review'>
          <Review />

        </div>

        <div id='about'>
          <About />

        </div>

        <div id='footer'>
          <Footer />

        </div>







      </main>



    </>

  )
}


export default App