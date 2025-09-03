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



const App = () => {
  const [availableTimes, setAvailableTimes] = useState([
    '17:00', '18:00', '19:00', '20:00', '21:00'
  ])

  {/*const [today, setToday] = useState(8/21/2025)*/}
  const updateTimes = (state, action) => {
    switch (action.type) {
      case 'UPDATE_DATE':
        return {
          ...state,
          availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00']
        }
      default:
        return state;
    }
  }
  const initializeTimes = () => {
    return [
      '17:00', '18:00', '19:00', '20:00', '21:00'
    ]

  }

 {/*} const fetchData = (today) => {
    fetch('https://raw.githubusercontent.com/courseraap/capstone/main/api.js')
    .then (data => setToday (data))
  }*/}

  const [state, dispatch] = useReducer(updateTimes, initializeTimes)

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