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
import { useNavigate } from 'react-router-dom'
import Booking from './components/Booking'


/* const reducer = (state, action) => {
    if  (action.type === '09/24/2025') return {availableTimes: state.availableTimes + 1}
      
        
        return state;
    } */

const App = () => {

   //const [availableTimes, setAvailableTimes] =useState(['17:00', '18:00', '19:00', '20:00', '21:00'])

  const seedRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}



  const fetchAPI = function(date){
    let result = [];
    let random = seedRandom(date.getDate())
    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
  }

  const submitAPI = function(formData){
    return true
  }

  

  const initialState = {availableTimes :fetchAPI(new Date())}

  const [state, dispatch] = useReducer(updateTimes, initialState)

  function updateTimes(state, date){
    return{availableTimes: fetchAPI(new Date(date))}
  }

  const navigate = useNavigate();
  function submitForm (formData){
    if(submitAPI(formData)){
      navigate("/confirmed")
    }
  }







 

  

  

  

{/*  const [today, setToday] = useState('9/24/2025')*/}
 
  
  

  {/*const fetchData = () => {
    fetch('https://raw.githubusercontent.com/courseraap/capstone/main/api.js')
    .then (data => setToday (data))
  } */}

  

  

  /*const handleAvailableTimes = (e) => {
    setAvailableTimes(availableTimes)
  }*/

  return (
    <>





      <Navbar />

      <main>

        <Routes>

          <Route path="/home" element={<Home />}></Route>
          <Route path="/booking" element={<Booking  availableTimes= {state}  dispatch={dispatch} submitForm={submitForm}/>}></Route>
          <Route path="/confirmed"  element={<Confirmed/>}></Route>


          {/*<Route path="/confirmed" element={<Confirmed />}></Route>*/}

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