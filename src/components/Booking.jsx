import React from 'react'
import ReserveTable from './ReserveTable'

const Booking = (props) => {
    return (



        <ReserveTable availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm} />







    )
}

export default Booking