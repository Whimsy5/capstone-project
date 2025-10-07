import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const ReserveTable = (props) => {


  const [date, setDate] = useState('')
  const [times, setTimes] = useState('')
  const [guests, setGuests] = useState('')
  const [occasion, setOccasion] = useState('')
  

  const handleChange = (e) => {
  /*const newDate= e.target.value;*/
  setDate(e);
  props.dispatch(e)

}


  
   

  /*const [selectedValues, setSelectedValues] = useState({
    choosedate: '',
    choosetime: '',
    numberofguests: '',
    occasion: ''

  })*/

  {/*const handleChanges = (e) => {
    setSelectedValues({ ...selectedValues, [e.target.name]: [e.target.setSelectedValues] })

  }*/}

  //const navigate = useNavigate();

  {/*const handleButtonClick = (e) => {

    navigate('/confirmed');
    e.preventDefault()
    console.log(selectedValues)
  };*/}

  const handleSubmit = (e) => {
    e.preventDefault()
    props.submitForm(e)
  }





  return (

    <div className='min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10v bg-[#495E57]'>
      <div className='container w-full lg:w-2/4 space-y-4 mt-14 lg:mt-12 '>
        <form onSubmit={handleSubmit} className='space-y-4 flex-col m-2 shadow-lg'>


          <div>
            <label htmlFor='res-date' >
              <strong className='text-[#ffffff]'>Choose Date: </strong>
            </label>

            <input type='date'
              id='res-date'
              onChange={(e) => handleChange(e.target.value)}
              required
              name='date'
              value={date}
              
            />




          </div>

          <>
            <label htmlFor="res-time">
              <strong className='text-[#ffffff]'>Choose Time: </strong>
            </label>

            <select id='res-time'
              value={times}
              onChange={(e) => setTimes(e.target.value)}
              required
              name='res-time'
            >

              
              

              {props.availableTimes.availableTimes.map(availableTimes => (
                <option key={availableTimes}> {availableTimes}
                  
                </option>)
              )
              }

            </select>
          </>

          <div>
            <label htmlFor='guests' className='font-semibold text-[#ffffff]'>Number of Guests:  </label>
            <input id='guest'
            value={guests}
              placeholder='1'
              min='1'
              max='10'
              type="number"
              onChange={(e) => setGuests(e.target.value)}
              required minguest='2'
              name='number'


            />

          </div>

          <div className='flex max-w-sm min-auto'>

            <label htmlFor='events' className='font-bold text-[#EDEFEE]'>Select an Occasion:</label>

            <select id="events"
            value={occasion}
              className='font-extrabold text-[#144B33]  border border-[#FBDABB] focus:ring-[#EDEFEE] focus:border-[#EDEFEE] bg-[#EDEFEE] dark:bg-[#EDEFEE] block w-full p-2.5 text-md rounded-lg dark:border-[#EE9972] dark:placeholder-[#EDEFEE] dark:focus:ring-[#EE9972] dark:focus-border-[EE9972] dark:text-[#495E57]'
              onChange={(e) => setOccasion(e.target.value)}
              required
              name='events' >



              <option>

                Occasion</option>
              <option>Birthday</option>
              <option>Engagement</option>
              <option>Anniversary</option>



            </select>



          </div>

          <div>
            <button  className='focus:outline-none focus:ring-2 focus:ring-[#F4CE14]-300 mt-4 cursor-pointer flex bg-[#F4CE14] hover:text-[#ffffff] font-bold text-xs py-2 px-4 rounded' type='submit'>Make Your Reservation</button>
          </div>





        </form>

      </div>
    </div>

  )
}

export default ReserveTable