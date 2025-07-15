import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Menu from './components/Menu'
import Review from './components/Review'
import About from './components/About'
import Footer from './components/Footer'
import ReserveTable from './components/ReserveTable'
import { Routes, Route } from 'react-router-dom'
import Confirmed from './components/Confirmed'


const App = () => {

  return (
    <>





      <Navbar />





      <main>



        <Routes>

          <Route path="/home" element={<Home />}></Route>
          <Route path="/reservetable" element={<ReserveTable />}></Route>


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